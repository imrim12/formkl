import { ElButton, ElFormItem, FormItemRule } from "element-plus";
import { FieldDefault, FieldSelection, Formkl, Section } from "formkl";
import { computed, h, readonly, Ref, VNode } from "vue";
import { Form } from "../core/Form";
import { FieldHandler } from "../handlers/FieldHandler";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { Rule } from "../core/Rule";
import { DefaultComponent } from "../types/default-component.enum";

export class FieldRenderer {
  private _formkl: Formkl;
  private _section: Section;
  private _field: FieldDefault | FieldSelection;
  private _model: Readonly<Ref<SchemaBase | SchemaFlat>>;
  private _handler: FieldHandler;
  private _component: VNode | undefined;
  private _input: Readonly<Ref<any>>;
  private _rules: FormItemRule[] = [];
  private _sectionResponseIndex?: number;

  constructor(
    formkl: Formkl,
    section: Section,
    field: FieldDefault | FieldSelection,
    model: Ref<SchemaFlat | SchemaBase>,
    sectionResponseIndex?: number,
  ) {
    this._formkl = formkl;
    this._section = section;
    this._field = field;
    this._sectionResponseIndex = sectionResponseIndex;
    this._handler = new FieldHandler(this._formkl, this._section, this._field, model); // Keep the model reference and reactivity
    this._model = readonly(model);
    this._component = Form.getComponentMap().get(this._field.type);
    this._input = this._handler.getReactiveInput();

    const rule = new Rule(this._formkl, this._field);
    this._rules = rule.getRules();
  }

  private _renderFieldDefault(responseIndex?: number) {
    return this._component
      ? h(this._component, {
          ...this._handler.getEventHandler(responseIndex),
        })
      : null;
  }

  private _renderFieldSelection(responseIndex?: number) {
    return this._component
      ? h(this._component, {
          ...this._field,
          ...this._handler.getEventHandler(responseIndex),
        })
      : null;
  }

  private _buildSinglePropPath(responseIndex?: number): string {
    switch (this._formkl.model) {
      case "flat":
        return [this._section.key, this._field.key, responseIndex]
          .filter((i) => i !== undefined)
          .join(".");

      case "base":
      default:
        const modelBase: SchemaBase = this._model.value as SchemaBase;

        const fieldIndex = modelBase.data.findIndex(
          (f) => f.field === this._field.key && f.section === this._section.key,
        );
        return ["data", fieldIndex, "value", responseIndex]
          .filter((i) => i !== undefined)
          .join(".");
    }
  }

  private _buildMultiplePropPath(): string[] {
    switch (this._formkl.model) {
      case "flat":
        return (this._input.value as any[]).map((_, responseIndex: number) =>
          [this._section.key, this._field.key, responseIndex].join("."),
        );

      case "base":
      default:
        const modelBase: SchemaBase = this._model.value as SchemaBase;

        const fieldIndex = modelBase.data.findIndex(
          (f) => f.field === this._field.key && f.section === this._section.key,
        );
        return (this._input.value as any[]).map((_, responseIndex: number) =>
          ["data", fieldIndex, "value", responseIndex].join("."),
        );
    }
  }

  private _renderSingleField(propPath: string) {
    return h(
      ElFormItem,
      {
        label: this._field.label,
        key: propPath,
        prop: propPath,
        rules: this._rules,
      },
      () =>
        ["checkbox", "radio", "select"].includes(this._field.type)
          ? this._renderFieldSelection(this._sectionResponseIndex)
          : this._renderFieldDefault(this._sectionResponseIndex),
    );
  }

  private _renderMultipleField(propPath: string[]) {
    const fieldRemoveBtn =
      Form.getComponentMap().get(DefaultComponent.FIELD_REMOVE_BTN) ||
      h(ElButton, { type: "danger" });

    return propPath.map((prop, responseIndex) =>
      h(
        "div",
        {
          class: "formkl-field_response",
        },
        [
          h(
            ElFormItem,
            {
              label: responseIndex === 0 ? this._field.label : "",
              key: prop,
              prop: prop,
              rules: this._rules,
            },
            () =>
              ["checkbox", "radio", "select"].includes(this._field.type)
                ? this._renderFieldSelection(responseIndex)
                : this._renderFieldDefault(responseIndex),
          ),
          propPath.length > 1
            ? h(
                "div",
                {
                  class: "formkl-field_response__remover",
                },
                h(
                  fieldRemoveBtn,
                  {
                    onClick: this._handler.removeResponse.bind(this._handler, responseIndex),
                  },
                  () => "Remove field",
                ),
              )
            : null,
        ],
      ),
    );
  }

  private _renderBody(propPath: string | string[]) {
    return this._field.multiple
      ? this._renderMultipleField(propPath as string[])
      : this._renderSingleField(propPath as string);
  }

  private _renderFooter(allowAddMoreResponse: boolean) {
    const fieldAddBtn =
      Form.getComponentMap().get(DefaultComponent.FIELD_ADD_BTN) || h(ElButton, {});

    return h(
      "div",
      {
        class: "formkl-field__footer",
      },
      [
        this._field.multiple && allowAddMoreResponse
          ? h(
              fieldAddBtn,
              {
                onClick: this._handler.addResponse.bind(this._handler),
              },
              () => "Add field",
            )
          : null,
      ],
    );
  }

  public render() {
    const propPath = computed(() => {
      return this._field.multiple
        ? this._buildMultiplePropPath()
        : this._buildSinglePropPath(this._sectionResponseIndex);
    });

    const allowAddMoreResponse = computed(
      () => propPath.value?.length < Number(this._field?.maxResponseAllowed || Infinity),
    );

    return h(
      "div",
      {
        class: "formkl-field",
      },
      [this._renderBody(propPath.value), this._renderFooter(allowAddMoreResponse.value)],
    );
  }
}

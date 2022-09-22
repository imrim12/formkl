import { ElButton } from "element-plus";
import { Section, FieldDefault, FieldSelection, Formkl } from "formkl";
import { h, Ref } from "vue";
import { Form } from "../core/Form";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { SectionHandler } from "../handlers/SectionHandler";
import { DefaultComponent } from "../types/default-component.enum";
import { FieldRenderer } from "./FieldRenderer";

export class SectionRenderer {
  private _formkl: Formkl;
  private _section: Section;
  private _fields: Array<FieldDefault | FieldSelection>;
  private _model: Ref<SchemaBase | SchemaFlat>;
  private _handler: SectionHandler;

  constructor(formkl: Formkl, section: Section, model: Ref<SchemaFlat | SchemaBase>) {
    this._formkl = formkl;
    this._section = section;
    this._fields = section.fields;
    this._model = model;
    this._handler = new SectionHandler(this._formkl, this._section, this._model);
  }

  private _renderHeader() {
    return h(
      "header",
      {
        class: "formkl-section__header",
      },
      h("h3", this._section.title),
    );
  }

  private _renderSingleResponse() {
    return h(
      "div",
      {
        class: "formkl-section_response",
      },
      this._fields.map((field) => {
        const fieldRenderer = new FieldRenderer(this._formkl, this._section, field, this._model);

        return fieldRenderer.render();
      }),
    );
  }

  private _renderMultipleResponse() {
    const sectionRemoveBtn =
      Form.getComponentMap().get(DefaultComponent.SECTION_REMOVE_BTN) ||
      h(ElButton, { type: "danger" });

    let firstFieldResponse: any[] = [];

    switch (this._formkl.model) {
      case "flat":
        const _flatModel = this._model.value as SchemaFlat;
        firstFieldResponse = Object.values(_flatModel[this._section.key])[0];
        break;
      case "base":
      default:
        const _baseModel = this._model.value as SchemaBase;
        firstFieldResponse = _baseModel.data.find((i) => i.section === this._section.key)?.value;
        break;
    }

    return firstFieldResponse.map((_, responseIndex) =>
      h(
        "div",
        {
          class: "formkl-section_response",
        },
        [
          ...this._fields.map((field) => {
            const fieldRenderer: FieldRenderer = new FieldRenderer(
              this._formkl,
              this._section,
              field,
              this._model,
              responseIndex,
            );

            return fieldRenderer.render();
          }),
          firstFieldResponse.length > 1
            ? h(
                "div",
                {
                  class: "formkl-field_response__remover",
                },
                h(
                  sectionRemoveBtn,
                  {
                    onClick: this._handler.removeResponse.bind(this._handler, responseIndex),
                  },
                  () => "Remove section",
                ),
              )
            : null,
        ],
      ),
    );
  }

  private _renderBody() {
    return h(
      "section",
      {
        class: "formkl-section__body",
      },
      this._section.multiple ? this._renderMultipleResponse() : this._renderSingleResponse(),
    );
  }

  private _renderFooter() {
    const sectionAddBtn =
      Form.getComponentMap().get(DefaultComponent.SECTION_ADD_BTN) || h(ElButton, {});

    return h(
      "footer",
      {
        class: "formkl-section__footer",
      },
      [
        this._section.multiple
          ? h(
              sectionAddBtn,
              {
                onClick: this._handler.addResponse.bind(this._handler),
              },
              () => "Add section",
            )
          : null,
      ],
    );
  }

  public render() {
    return h(
      "div",
      {
        class: [
          "formkl-section__wrapper",
          this._section.multiple ? "formkl-section__wrapper--multiple" : "",
        ],
      },
      [this._renderHeader(), this._renderBody(), this._renderFooter()],
    );
  }
}

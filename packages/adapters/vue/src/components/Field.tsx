import { ElButton, ElFormItem } from "element-plus";
import { FieldDefault, FieldSelection, Formkl, Section } from "formkl";
import { computed, defineComponent, h, PropType, readonly, Ref } from "vue";
import { Form } from "../core/Form";
import { FieldHandler } from "../handlers/FieldHandler";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { Rule } from "../core/Rule";
import { DefaultComponent } from "../types/default-component.enum";

// Equivalent to React.createElement, but for Vue
const createElement = h;

export const FieldNode = defineComponent({
  name: "FieldNode",
  props: {
    formkl: {
      type: Object as PropType<Formkl>,
      required: true,
    },
    section: {
      type: Object as PropType<Section>,
      required: true,
    },
    field: {
      type: Object as PropType<FieldDefault | FieldSelection>,
      required: true,
    },
    model: {
      type: Object as PropType<Ref<SchemaFlat | SchemaBase>>,
      required: true,
    },
    sectionResponseIndex: Number,
  },
  setup(props) {
    const _formkl = props.formkl;
    const _section = props.section;
    const _field = props.field;
    const _sectionResponseIndex = props.sectionResponseIndex;
    const _handler = new FieldHandler(_formkl, _section, _field, props.model); // Keep the model reference and reactivity
    const _model = readonly(props.model);
    const _component = Form.getComponentMap().get(_field.type);
    const _input = _handler.getReactiveInput();

    const _rules = new Rule(_formkl, _field).getRules();

    const FieldAddBtn = Form.getComponentMap().get(DefaultComponent.FIELD_ADD_BTN) || <ElButton />;

    const FieldRemoveBtn = Form.getComponentMap().get(DefaultComponent.FIELD_REMOVE_BTN) || (
      <ElButton type="danger" />
    );

    const _buildSinglePropPath = (responseIndex?: number): string => {
      switch (_formkl.model) {
        case "flat":
          return [_section.key, _field.key, responseIndex].filter((i) => i !== undefined).join(".");

        case "base":
        default:
          const modelBase: SchemaBase = _model.value as SchemaBase;

          const fieldIndex = modelBase.data.findIndex(
            (f) => f.field === _field.key && f.section === _section.key,
          );
          return ["data", fieldIndex, "value", responseIndex]
            .filter((i) => i !== undefined)
            .join(".");
      }
    };

    const _buildMultiplePropPath = (): string[] => {
      switch (_formkl.model) {
        case "flat":
          return (_input.value as any[]).map((_, responseIndex: number) =>
            [_section.key, _field.key, responseIndex].join("."),
          );

        case "base":
        default:
          const modelBase: SchemaBase = _model.value as SchemaBase;

          const fieldIndex = modelBase.data.findIndex(
            (f) => f.field === _field.key && f.section === _section.key,
          );
          return (_input.value as any[]).map((_, responseIndex: number) =>
            ["data", fieldIndex, "value", responseIndex].join("."),
          );
      }
    };

    const propPath = computed(() => {
      return _field.multiple
        ? _buildMultiplePropPath()
        : _buildSinglePropPath(_sectionResponseIndex);
    });

    const allowAddMoreResponse = computed(
      () => propPath.value?.length < Number(_field?.maxResponseAllowed || Infinity),
    );

    return () => (
      <div class="formkl-field">
        {_field.multiple ? (
          (propPath.value as string[]).map((prop, responseIndex) => (
            <div class="formkl-field_response">
              <ElFormItem
                label={responseIndex === 0 ? _field.label : ""}
                key={prop}
                prop={prop}
                rules={_rules}
              >
                {() =>
                  _component
                    ? createElement(_component, {
                        ..._handler.getEventHandler(responseIndex),
                        ...(["checkbox", "radio", "select"].includes(_field.type) ? _field : {}),
                      })
                    : null
                }
              </ElFormItem>
              {(propPath.value as string[]).length > 1 ? (
                <div class="formkl-field_response__remover">
                  {createElement(
                    FieldRemoveBtn,
                    {
                      onClick: _handler.removeResponse.bind(_handler, responseIndex),
                    },
                    () => "Remove field",
                  )}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <ElFormItem
            label={_field.label}
            key={propPath.value as string}
            prop={propPath.value as string}
            rules={_rules}
          >
            {() =>
              _component
                ? createElement(_component, {
                    ..._handler.getEventHandler(_sectionResponseIndex),
                    ...(["checkbox", "radio", "select"].includes(_field.type) ? _field : {}),
                  })
                : null
            }
          </ElFormItem>
        )}
        <div class="formkl-field__footer">
          {_field.multiple && allowAddMoreResponse.value
            ? createElement(
                FieldAddBtn,
                {
                  onClick: _handler.addResponse.bind(_handler),
                },
                () => "Add field",
              )
            : null}
        </div>
      </div>
    );
  },
});

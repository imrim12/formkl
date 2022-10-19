import { ElButton, ElFormItem } from "element-plus";
import { FieldDefault, FieldSelection, Section } from "formkl";
import { computed, defineComponent, h, PropType } from "vue-demi";
import { Form } from "../core/Form";
import { SchemaBase } from "../core/Schema";
import { DefaultComponent } from "../types/default-component.enum";
import { useField } from "../hooks/useField";
import { useFormkl } from "../hooks/useFormkl";

// Equivalent to React.createElement, but for Vue
const createElement = h;

export const FieldNode = defineComponent({
  name: "FieldNode",
  props: {
    section: {
      type: Object as PropType<Section>,
      required: true,
    },
    field: {
      type: Object as PropType<FieldDefault | FieldSelection>,
      required: true,
    },
    sectionResponseIndex: Number,
  },
  setup(props) {
    const { formkl, model } = useFormkl();
    const { handler, component, input, rules, sectionResponseIndex } = useField();

    const FieldAddBtn = Form.getComponentMap().get(DefaultComponent.FIELD_ADD_BTN) || <ElButton />;

    const FieldRemoveBtn = Form.getComponentMap().get(DefaultComponent.FIELD_REMOVE_BTN) || (
      <ElButton type="danger" />
    );

    const _buildSinglePropPath = (responseIndex?: number): string => {
      switch (formkl.value.model) {
        case "flat":
          return [props.section.key, props.field.key, responseIndex]
            .filter((i) => i !== undefined)
            .join(".");

        case "base":
        default:
          const modelBase: SchemaBase = model.value as SchemaBase;

          const fieldIndex = modelBase.data.findIndex(
            (f) => f.field === props.field.key && f.section === props.section.key,
          );
          return ["data", fieldIndex, "value", responseIndex]
            .filter((i) => i !== undefined)
            .join(".");
      }
    };

    const _buildMultiplePropPath = (): string[] => {
      switch (formkl.value.model) {
        case "flat":
          return input.value.map((_: any, responseIndex: number) =>
            [props.section.key, props.field.key, responseIndex].join("."),
          );

        case "base":
        default:
          const modelBase: SchemaBase = model.value as SchemaBase;

          const fieldIndex = modelBase.data.findIndex(
            (f) => f.field === props.field.key && f.section === props.section.key,
          );
          return input.value.map((_: any, responseIndex: number) =>
            ["data", fieldIndex, "value", responseIndex].join("."),
          );
      }
    };

    const propPath = computed(() => {
      return props.field.multiple
        ? _buildMultiplePropPath()
        : _buildSinglePropPath(sectionResponseIndex);
    });

    const allowAddMoreResponse = computed(
      () => propPath.value?.length < Number(props.field?.maxResponseAllowed || Infinity),
    );

    return () => (
      <div class="formkl-field">
        {props.field.multiple ? (
          (propPath.value as string[]).map((prop, responseIndex) => (
            <div class="formkl-field_response">
              <ElFormItem
                label={responseIndex === 0 ? props.field.label : ""}
                key={prop}
                prop={prop}
                rules={rules}
              >
                {() =>
                  component
                    ? createElement(component, {
                        ...handler.getEventHandler(responseIndex),
                        ...(["checkbox", "radio", "select"].includes(props.field.type)
                          ? props.field
                          : {}),
                      })
                    : null
                }
              </ElFormItem>
              {(propPath.value as string[]).length > 1 ? (
                <div class="formkl-field_response__remover">
                  {createElement(
                    FieldRemoveBtn,
                    {
                      onClick: handler.removeResponse.bind(handler, responseIndex),
                    },
                    () => "Remove field",
                  )}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <ElFormItem
            label={props.field.label}
            key={propPath.value as string}
            prop={propPath.value as string}
            rules={rules}
          >
            {() =>
              component
                ? createElement(component, {
                    ...handler.getEventHandler(sectionResponseIndex),
                    ...(["checkbox", "radio", "select"].includes(props.field.type)
                      ? props.field
                      : {}),
                  })
                : null
            }
          </ElFormItem>
        )}
        <div class="formkl-field__footer">
          {props.field.multiple && allowAddMoreResponse.value
            ? createElement(
                FieldAddBtn,
                {
                  onClick: handler.addResponse.bind(handler),
                },
                () => "Add field",
              )
            : null}
        </div>
      </div>
    );
  },
});

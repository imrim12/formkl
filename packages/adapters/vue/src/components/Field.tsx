import { ElButton, ElFormItem } from "element-plus";
import { FieldDefault, FieldSelection, Formkl, Section } from "formkl";
import { computed, h, readonly, Ref } from "vue";
import { Form } from "../core/Form";
import { FieldHandler } from "../handlers/FieldHandler";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { Rule } from "../core/Rule";
import { DefaultComponent } from "../types/default-component.enum";

// Equivalent to React.createElement, but for Vue
const createElement = h;

interface FieldNodeProps {
  formkl: Formkl;
  section: Section;
  field: FieldDefault | FieldSelection;
  model: Ref<SchemaFlat | SchemaBase>;
  sectionResponseIndex?: number;
}

export const FieldNode = ({
  formkl,
  section,
  field,
  model,
  sectionResponseIndex,
}: FieldNodeProps) => {
  const _formkl = formkl;
  const _section = section;
  const _field = field;
  const _sectionResponseIndex = sectionResponseIndex;
  const _handler = new FieldHandler(_formkl, _section, _field, model); // Keep the model reference and reactivity
  const _model = readonly(model);
  const _component = Form.getComponentMap().get(_field.type);
  const _input = _handler.getReactiveInput();

  const _rules = new Rule(_formkl, _field).getRules();

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

  const DefaultField = ({ responseIndex }: { responseIndex?: number }) => {
    return _component
      ? createElement(_component, {
          ..._handler.getEventHandler(responseIndex),
        })
      : null;
  };

  const SelectionField = ({ responseIndex }: { responseIndex?: number }) => {
    return _component
      ? createElement(_component, {
          ..._field,
          ..._handler.getEventHandler(responseIndex),
        })
      : null;
  };

  const SingleField = ({ propPath }: { propPath: string }) => {
    return (
      <ElFormItem label={_field.label} key={propPath} prop={propPath} rules={_rules}>
        {() =>
          ["checkbox", "radio", "select"].includes(_field.type) ? (
            <SelectionField responseIndex={_sectionResponseIndex} />
          ) : (
            <DefaultField responseIndex={_sectionResponseIndex} />
          )
        }
      </ElFormItem>
    );
  };

  const MultipleField = ({ propPath }: { propPath: string[] }) => {
    const fieldRemoveBtn = Form.getComponentMap().get(DefaultComponent.FIELD_REMOVE_BTN) || (
      <ElButton type="danger" />
    );

    return (
      <>
        {propPath.map((prop, responseIndex) => (
          <div class="formkl-field_response">
            <ElFormItem
              label={responseIndex === 0 ? _field.label : ""}
              key={prop}
              prop={prop}
              rules={_rules}
            >
              {() =>
                ["checkbox", "radio", "select"].includes(_field.type) ? (
                  <SelectionField responseIndex={responseIndex} />
                ) : (
                  <DefaultField responseIndex={responseIndex} />
                )
              }
            </ElFormItem>
            {propPath.length > 1 ? (
              <div class="formkl-field_response__remover">
                {createElement(
                  fieldRemoveBtn,
                  {
                    onClick: _handler.removeResponse.bind(_handler, responseIndex),
                  },
                  () => "Remove field",
                )}
              </div>
            ) : null}
          </div>
        ))}
      </>
    );
  };

  const FieldBody = ({ propPath }: { propPath: string | string[] }) => {
    return _field.multiple ? (
      <MultipleField propPath={propPath as string[]} />
    ) : (
      <SingleField propPath={propPath as string} />
    );
  };

  const FieldFooter = ({ allowAddMoreResponse }: { allowAddMoreResponse: boolean }) => {
    const fieldAddBtn = Form.getComponentMap().get(DefaultComponent.FIELD_ADD_BTN) || <ElButton />;

    return (
      <div class="formkl-field__footer">
        {_field.multiple && allowAddMoreResponse
          ? createElement(
              fieldAddBtn,
              {
                onClick: _handler.addResponse.bind(_handler),
              },
              () => "Add field",
            )
          : null}
      </div>
    );
  };

  const propPath = computed(() => {
    return _field.multiple ? _buildMultiplePropPath() : _buildSinglePropPath(_sectionResponseIndex);
  });

  const allowAddMoreResponse = computed(
    () => propPath.value?.length < Number(_field?.maxResponseAllowed || Infinity),
  );

  return (
    <div class="formkl-field">
      <FieldBody propPath={propPath.value} />
      <FieldFooter allowAddMoreResponse={allowAddMoreResponse.value} />
    </div>
  );
};

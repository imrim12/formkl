import {
  FieldDefault,
  FieldSelection,
  Section,
  SchemaBase,
  Formkl,
  SchemaFlat,
} from "@formkl/shared";
import { FieldWrapper } from "./wrappers/FieldWrapper";
import { FieldBtnAddResponse } from "./wrappers/FieldBtnAddResponse";
import { FieldBtnRemoveResponse } from "./wrappers/FieldBtnRemoveResponse";
import { Adapter } from "../core/Adapter";
import { Rule } from "../core/Rule";
import { FieldProps } from "../types/field-props.type";
import { useField } from "../hooks/useField";

export const FieldNode = (props: FieldProps) => {
  const { getMethod } = useField(props);

  const rules = new Rule(props.formkl, props.field).getRules();

  const InputField = Adapter.getComponent(props.field.type) || "input";

  const updateResponse = () => {
    console.log(props.model);
  };

  const addResponse = () => {
    console.log(props.model);
  };

  const removeResponse = (responseIndex: number) => {
    console.log(props.model);
  };

  const getInputValue = () => {
    return getMethod(
      () => {
        const _baseModel = (props.model.current || props.model.value) as SchemaBase;
        const _fieldValue = _baseModel.data.find(
          (m) => m.section === props.section.key && m.field === props.field.key,
        );

        return _fieldValue?.value;
      },
      () => {
        const _flatModel = (props.model.current || props.model.value) as SchemaFlat;

        return _flatModel?.[props.section.key]?.[props.field.key];
      },
    );
  };

  const _buildSinglePropPath = (responseIndex?: number): string => {
    return getMethod(
      () => {
        const modelBase: SchemaBase = (props.model.current || props.model.value) as SchemaBase;

        const fieldIndex = modelBase.data.findIndex(
          (f) => f.field === props.field.key && f.section === props.section.key,
        );
        return ["data", fieldIndex, "value", responseIndex]
          .filter((i) => i !== undefined)
          .join(".");
      },
      () => {
        return [props.section.key, props.field.key, responseIndex]
          .filter((i) => i !== undefined)
          .join(".");
      },
    );
  };

  const _buildMultiplePropPath = (): string[] => {
    return getMethod(
      () => {
        const modelBase: SchemaBase = (props.model.current || props.model.value) as SchemaBase;

        const fieldIndex = modelBase.data.findIndex(
          (f) => f.field === props.field.key && f.section === props.section.key,
        );
        return getInputValue().map((_: any, responseIndex: number) =>
          ["data", fieldIndex, "value", responseIndex].join("."),
        );
      },
      () => {
        return getInputValue().map((_: any, responseIndex: number) =>
          [props.section.key, props.field.key, responseIndex].join("."),
        );
      },
    );
  };

  const propPath = () =>
    props.field.multiple
      ? _buildMultiplePropPath()
      : _buildSinglePropPath(props.sectionResponseIndex);

  const allowAddMoreResponse = () =>
    propPath?.length < Number(props.field?.maxResponseAllowed || Infinity);

  return (
    <div className="formkl-field">
      {props.field.multiple ? (
        (propPath() as string[]).map((prop, responseIndex) => (
          <div key={responseIndex} className="formkl-field_response">
            <FieldWrapper
              label={responseIndex === 0 ? props.field.label : ""}
              key={prop}
              prop={prop}
              rules={rules}
            >
              <InputField
                value={getInputValue()}
                onInput={updateResponse}
                {...(["checkbox", "radio", "select"].includes(props.field.type) ? props.field : {})}
              />
            </FieldWrapper>
            {(propPath() as string[]).length > 1 ? (
              <div className="formkl-field_response__remover">
                <FieldBtnRemoveResponse onClick={removeResponse(responseIndex)}>
                  Remove field
                </FieldBtnRemoveResponse>
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <FieldWrapper
          label={props.field.label}
          key={propPath() as string}
          prop={propPath() as string}
          rules={rules}
        >
          <InputField
            value={getInputValue()}
            onInput={updateResponse}
            {...(["checkbox", "radio", "select"].includes(props.field.type) ? props.field : {})}
          />
        </FieldWrapper>
      )}
      <div className="formkl-field__footer">
        {props.field.multiple && allowAddMoreResponse() ? (
          <FieldBtnAddResponse onClick={addResponse}>Add field</FieldBtnAddResponse>
        ) : null}
      </div>
    </div>
  );
};

import { FieldDefault, FieldSelection, Formkl, Section } from "@formkl/shared";
import { FieldEvent } from "../types/field-event.type";
import { Adapter } from "../core/Adapter";
import { DefaultValueMap, Model } from "../core/Model";
import { FieldWrapper } from "./FieldWrapper";
import { FieldBtnAddResponse } from "./FieldBtnAddResponse";
import { FieldBtnRemoveResponse } from "./FieldBtnRemoveResponse";

type FieldNodeProps = {
  key: number | string;
  formkl: Formkl;
  field: FieldDefault | FieldSelection;
  fieldIndex: number;
  section: Section;
  sectionIndex: number;
  responseIndex?: number;
  formModel: Model;
  onFieldChange: (payload: FieldEvent) => void;
};

// Feature:
// 1. Render field from a Component instance (default field or custom syntax field)
// 2. Adapt field input/change event from Component
// 3. Render field label tip/description if declared
// 4. Adapt validator base on the used UI library
// 5. Render field error message if has validation
// 6. Support multiple responses
// 7. Support conditional rendering
export default function FieldNode(props: FieldNodeProps) {
  const {
    formkl,
    field,
    fieldIndex,
    section,
    sectionIndex,
    responseIndex,
    formModel,
    onFieldChange,
  } = props;

  const getModelValue = () => {
    return formModel.getFieldModelValue(section.key, field.key);
  };

  const InputField = Adapter.getComponent(field.type) || "input";

  const _updateFieldValue = (value: any, fieldIndex?: number) => {
    const payload: FieldEvent = {
      field,
      fieldIndex,
      responseIndex: field.multiple ? fieldIndex : section.multiple ? responseIndex : undefined,
      value,
    };

    onFieldChange(payload);
  };

  const handleChange = async (event: any, fieldIndex: number) => {
    let inputValue: any = event;

    if (event.target) {
      const inputElement = event.target as HTMLInputElement;
      inputValue = inputElement.value || "";
    }

    const currentModelValue = getModelValue();
    if (field.multiple || section.multiple) {
      currentModelValue[fieldIndex || 0] = inputValue;
    }

    _updateFieldValue(currentModelValue, fieldIndex);
  };

  const handleRemoveResponse = (fieldIndex: number) => {
    let currentModelValue = getModelValue();

    currentModelValue[fieldIndex] = undefined;
    currentModelValue = [...currentModelValue.filter((v: any) => v !== undefined)];

    _updateFieldValue(currentModelValue);
  };

  const handleAddResponse = () => {
    const currentModelValue = getModelValue();

    currentModelValue.push(DefaultValueMap[field.type]);

    _updateFieldValue(currentModelValue);
  };

  return (
    <FieldWrapper
      {...(Adapter.getFieldWrapper()?.returnProps?.({
        formModel: formModel.getModel(),
        section,
        field,
        formkl,
      }),
      field)}
    >
      {field.multiple ? (
        <>
          {getModelValue().map((_: any, index: number) => (
            <div key={field.key} className="field__response">
              <InputField
                id={[field.key, index].join("-")}
                onInput={(e: any) => handleChange(e, index)}
                onChange={(e: any) => handleChange(e, index)}
              />
              <div className="field__footer">
                <FieldBtnRemoveResponse onClick={() => handleRemoveResponse(index)}>
                  Remove response
                </FieldBtnRemoveResponse>
              </div>
            </div>
          ))}
          <div className="field__inner--footer">
            <FieldBtnAddResponse onClick={handleAddResponse}>Add response</FieldBtnAddResponse>
          </div>
        </>
      ) : (
        <InputField
          id={field.key}
          onInput={handleChange}
          onChange={handleChange}
          className="field__response"
        />
      )}
    </FieldWrapper>
  );
}

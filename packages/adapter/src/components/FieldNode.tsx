import type {
  FieldDefault,
  FieldSelection,
  Formkl,
  SchemaBase,
  SchemaFlat,
  Section,
} from "@formkl/shared";
import type { FormOptions } from "../createForm";
import { useField } from "../hooks/useField";

export type FieldNodeProps = {
  key: string;
  formkl: Formkl;
  model: SchemaBase | SchemaFlat;
  section: Section;
  field: FieldDefault | FieldSelection;
  sectionResponseIndex?: number;
  onFieldChange?: (e?: any) => void;
};

export const createFieldNode = (options: FormOptions) => {
  const FieldBtnAddResponse = options?.FieldBtnAddResponse?.component || "button";
  const FieldBtnRemoveResponse = options?.FieldBtnRemoveResponse?.component || "button";

  const Wrapper = options?.FieldWrapper?.component;
  const getWrapperProps = options?.FieldWrapper?.returnProps;

  const FieldNode = (props: FieldNodeProps) => {
    const {
      formkl,
      section,
      field,
      rules,
      sectionResponseIndex,
      handler,
      computedMultiplePropPath,
      computedSinglePropPath,
      computedFieldPropPath,
      computedFieldAllowMoreResponse,
    } = useField(props);

    const FieldWrapper = (p: any) =>
      Wrapper ? (
        <Wrapper {...(getWrapperProps?.(props) || props)} rules={rules}>
          {p.children}
        </Wrapper>
      ) : (
        <div className="field__wrapper">
          <label htmlFor={field.key} className="field__label">
            <span>{field.label}</span>
            <div className="field__inner">{p.children}</div>
          </label>
        </div>
      );

    const InputNode = "input";

    return (
      <div className="formkl-field">
        {field.multiple ? (
          (computedFieldPropPath() as string[]).map((propPath, fieldResponseIndex) => (
            <div key={fieldResponseIndex} className="formkl-field_response">
              <FieldWrapper
                label={fieldResponseIndex === 0 ? field.label : ""}
                key={propPath}
                prop={propPath}
                rules={rules}
                children={
                  <InputNode
                    onInput={(e: any) => handler.onInput(e, fieldResponseIndex)}
                    onChange={(e: any) => handler.onChange(e, fieldResponseIndex)}
                    {...(["checkbox", "radio", "select"].includes(field.type) ? field : {})}
                  />
                }
              />
              {(computedFieldPropPath() as string[]).length > 1 ? (
                <div className="formkl-field_response__remover">
                  <FieldBtnRemoveResponse
                    onClick={() => handler.onRemoveResponse(fieldResponseIndex)}
                  >
                    Remove field
                  </FieldBtnRemoveResponse>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <FieldWrapper
            label={field.label}
            key={computedFieldPropPath() as string}
            prop={computedFieldPropPath() as string}
            rules={rules}
            children={
              <InputNode
                onInput={handler.onInput}
                onChange={handler.onChange}
                {...(["checkbox", "radio", "select"].includes(field.type) ? field : {})}
              />
            }
          />
        )}
        <div className="formkl-field__footer">
          {field.multiple && computedFieldAllowMoreResponse() ? (
            <FieldBtnAddResponse onClick={handler.onAddResponse}>Add field</FieldBtnAddResponse>
          ) : null}
        </div>
      </div>
    );
  };

  return FieldNode;
};

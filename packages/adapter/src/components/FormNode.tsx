import type { SchemaBase, SchemaFlat } from "@formkl/shared";
import type { FormOptions } from "../createForm";
import { useForm } from "../hooks/useForm";
import { createSectionNode } from "./SectionNode";

export type FormNodeProps = {
  syntax: string;
  modelDefault?: SchemaBase | SchemaFlat;
  onSubmit?: (event: any) => void;
  onChange?: (e: any) => void;
};

export const createFormNode = (options: FormOptions) => {
  const Wrapper = options?.FormWrapper?.component;
  const getWrapperProps = options?.FormWrapper?.returnProps;

  const SectionNode = createSectionNode(options);

  const FormNode = (props: FormNodeProps) => {
    const { formkl, model, handler } = useForm(props);

    const FormWrapper = (p: { children: any }) =>
      Wrapper ? (
        <Wrapper {...(getWrapperProps?.(props) || props)} onSubmit={handler.onSubmit}>
          {p.children}
        </Wrapper>
      ) : (
        <form className="form__wrapper" onSubmit={handler.onSubmit}>
          {p.children}
        </form>
      );

    return formkl ? (
      <FormWrapper
        children={
          <>
            {formkl.title || formkl.description ? (
              <header className="formkl__header">
                {formkl.title ? <h2>{formkl.title}</h2> : null}
                {formkl.description ? <h3>{formkl.description}</h3> : null}
              </header>
            ) : null}
            <div className="formkl__body">
              {formkl.sections.map((section) => (
                <SectionNode
                  key={section.key}
                  formkl={formkl}
                  model={model}
                  section={section}
                  onSectionChange={handler.onChange}
                />
              ))}
              {JSON.stringify(model)}
            </div>
          </>
        }
      />
    ) : null;
  };

  return FormNode;
};

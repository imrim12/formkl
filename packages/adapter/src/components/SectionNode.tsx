import type { Formkl, SchemaBase, SchemaFlat, Section } from "@formkl/shared";
import type { FormOptions } from "../createForm";
import { useSection } from "../hooks/useSection";
import { createFieldNode } from "./FieldNode";

export type SectionNodeProps = {
  key: string;
  formkl: Formkl;
  model: SchemaBase | SchemaFlat;
  section: Section;
  onSectionChange?: (e?: any) => void;
};

export const createSectionNode = (options: FormOptions) => {
  const SectionBtnAddResponse = options?.SectionBtnAddResponse?.component || "button";
  const SectionBtnRemoveResponse = options?.SectionBtnRemoveResponse?.component || "button";

  const Wrapper = options?.SectionWrapper?.component;
  const getWrapperProps = options?.SectionWrapper?.returnProps;

  const FieldNode = createFieldNode(options);

  const SectionNode = (props: SectionNodeProps) => {
    const {
      formkl,
      model,
      section,
      handler,
      computedSectionFirstResponse,
      computedSectionResponseCount,
      computedSectionAllowMoreResponse,
    } = useSection(props);

    const SectionWrapper = (p: any, ctx?: any) =>
      Wrapper ? (
        <Wrapper {...(getWrapperProps?.(props) || props)}>
          {p.children || ctx?.slots?.default?.()}
        </Wrapper>
      ) : (
        <section className="section__wrapper">{p.children || ctx?.slots?.default?.()}</section>
      );

    return (
      <SectionWrapper>
        <div
          className={[
            "formkl-section__wrapper",
            section.multiple ? "formkl-section__wrapper--multiple" : "",
          ].join(" ")}
        >
          <header className="formkl-section__header">
            <h3>{section.title}</h3>
          </header>
          <section className="formkl-section__body">
            {section.multiple ? (
              new Array(computedSectionResponseCount())
                .fill(null)
                .map((_, sectionResponseIndex) => (
                  <div key={sectionResponseIndex} className="formkl-section_response">
                    {section.fields.map((field) => (
                      <FieldNode
                        key={field.key}
                        formkl={formkl}
                        model={model}
                        section={section}
                        field={field}
                        sectionResponseIndex={sectionResponseIndex}
                        onFieldChange={handler.onFieldChange}
                      />
                    ))}
                    {computedSectionResponseCount() > 1 ? (
                      <div className="formkl-section_response__remover">
                        <SectionBtnRemoveResponse
                          onClick={() => handler.onRemoveResponse(sectionResponseIndex)}
                        >
                          Remove section
                        </SectionBtnRemoveResponse>
                      </div>
                    ) : null}
                  </div>
                ))
            ) : (
              <div className="formkl-section_response">
                {section.fields.map((field) => (
                  <FieldNode
                    key={field.key}
                    formkl={formkl}
                    model={model}
                    section={section}
                    field={field}
                    onFieldChange={handler.onFieldChange}
                  />
                ))}
              </div>
            )}
          </section>
          <footer className="formkl-section__footer">
            {computedSectionAllowMoreResponse() ? (
              <SectionBtnAddResponse onClick={() => handler.onAddResponse()}>
                Add section
              </SectionBtnAddResponse>
            ) : null}
          </footer>
        </div>
      </SectionWrapper>
    );
  };

  return SectionNode;
};

import { Section, SchemaBase, SchemaFlat, Formkl } from "@formkl/shared";
import { FieldNode } from "./Field";
import { useSection } from "../hooks/useSection";
import { SectionBtnAddResponse } from "./wrappers/SectionBtnAddResponse";
import { SectionBtnRemoveResponse } from "./wrappers/SectionBtnRemoveResponse";

export const SectionNode = (props: {
  key: string;
  formkl: Formkl;
  model: {
    current?: SchemaBase | SchemaFlat;
    value?: SchemaBase | SchemaFlat;
  };
  section: Section;
}) => {
  const { handler } = useSection(props);

  const firstFieldResponse = () => {
    if (props.section.multiple) {
      switch (props.formkl.model) {
        case "flat":
          const _flatModel = (props.model.current || props.model.value) as SchemaFlat;
          return Object.values(_flatModel[props.section.key])[0];
        case "base":
        default:
          const _baseModel = (props.model.current || props.model.value) as SchemaBase;
          return _baseModel.data.find((i) => i.section === props.section.key)?.value;
      }
    } else {
      return null;
    }
  };

  const allowAddMoreResponse = () =>
    firstFieldResponse()?.length < Number(props.section?.maxResponseAllowed || Infinity);

  const numberOfAnswers = () => firstFieldResponse()?.length || 1;

  return (
    <div
      className={[
        "formkl-section__wrapper",
        props.section.multiple ? "formkl-section__wrapper--multiple" : "",
      ]}
    >
      <header className="formkl-section__header">
        <h3>{props.section.title}</h3>
      </header>
      <section className="formkl-section__body">
        {props.section.multiple ? (
          new Array(numberOfAnswers()).fill(null).map((_, responseIndex) => (
            <div key={responseIndex} className="formkl-section_response">
              {props.section.fields.map((field) => (
                <FieldNode
                  key={field.key}
                  formkl={props.formkl}
                  model={props.model}
                  section={props.section}
                  field={field}
                  sectionResponseIndex={responseIndex}
                />
              ))}
              {numberOfAnswers() > 1 ? (
                <div className="formkl-section_response__remover">
                  <SectionBtnRemoveResponse
                    onClick={handler.removeResponse.bind(handler, responseIndex)}
                  >
                    Remove section
                  </SectionBtnRemoveResponse>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div className="formkl-section_response">
            {props.section.fields.map((field) => (
              <FieldNode
                key={field.key}
                formkl={props.formkl}
                model={props.model}
                section={props.section}
                field={field}
              />
            ))}
          </div>
        )}
      </section>
      <footer className="formkl-section__footer">
        {allowAddMoreResponse() ? (
          <SectionBtnAddResponse onClick={handler.addResponse.bind(handler)}>
            Add section
          </SectionBtnAddResponse>
        ) : null}
      </footer>
    </div>
  );
};

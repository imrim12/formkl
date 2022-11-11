import { Formkl, Section } from "@formkl/shared";
import { SectionEvent } from "../types/section-event.type";
import { FieldEvent } from "../types/field-event.type";
import { Model } from "../core/Model";
import { Adapter } from "../core/Adapter";

import FieldNode from "./FieldNode";
import { SectionWrapper } from "./SectionWrapper";
import { SectionBtnAddResponse } from "./SectionBtnAddResponse";
import { SectionBtnRemoveResponse } from "./SectionBtnRemoveResponse";

type SectionNodeProps = {
  key: number | string;
  formkl: Formkl;
  section: Section;
  sectionIndex: number;
  formModel: Model;
  onSectionChange: (payload: SectionEvent) => void;
};

// Feature:
// 1. Render section
// 2. Adapt section input/change event from Component
// 3. Render section title tip/description if declared
// 4. Adapt section validator base on the used UI library
// 5. Render section error message if has validation
// 6. Support multiple responses
// 7. Support conditional rendering
export default function SectionNode(props: SectionNodeProps) {
  const { formkl, section, sectionIndex, formModel, onSectionChange } = props;

  const getFirstFieldModelValue = () => {
    return formModel.getFieldModelValue(section.key, section.fields[0].key);
  };

  const handleFieldChange = (payload: FieldEvent) => {
    const sectionPayload: SectionEvent = {
      section,
      sectionIndex,
      ...payload,
    };

    onSectionChange(sectionPayload);
  };

  return (
    <SectionWrapper
      {...Adapter.getSectionWrapper()?.returnProps?.({
        formModel: formModel.getModel(),
        section,
        formkl,
      })}
    >
      {section.multiple ? (
        <>
          {getFirstFieldModelValue().map((_: any, responseIndex: number) => (
            <div key={responseIndex} className="section__response">
              <p className="section__title">{section.title}</p>
              <div className="section__inner">
                {section.fields.map((field, fieldIndex) => (
                  <FieldNode
                    key={fieldIndex}
                    formkl={formkl}
                    field={field}
                    fieldIndex={fieldIndex}
                    section={section}
                    sectionIndex={sectionIndex}
                    responseIndex={responseIndex}
                    formModel={formModel}
                    onFieldChange={handleFieldChange}
                  />
                ))}
              </div>
              <div className="section__footer">
                <SectionBtnRemoveResponse>Remove response</SectionBtnRemoveResponse>
              </div>
            </div>
          ))}
          <div className="section__wrapper--footer">
            <SectionBtnAddResponse>Add response</SectionBtnAddResponse>
          </div>
        </>
      ) : (
        <div className="section__response">
          <p className="section__title">{section.title}</p>
          <div className="section__inner">
            {section.fields.map((field, fieldIndex) => (
              <FieldNode
                key={fieldIndex}
                formkl={formkl}
                field={field}
                fieldIndex={fieldIndex}
                section={section}
                sectionIndex={sectionIndex}
                formModel={formModel}
                onFieldChange={handleFieldChange}
              />
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}

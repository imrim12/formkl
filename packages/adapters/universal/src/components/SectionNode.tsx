import { Section } from "@formkl/shared";
import { SectionEvent } from "../types/section-event.type";
import { FieldEvent } from "../types/field-event.type";

import FieldNode from "./FieldNode";

type SectionNodeProps = {
  key: number | string;
  section: Section;
  sectionIndex: number;
  onSectionChange: (payload: SectionEvent) => void;
};

export default function SectionNode(props: SectionNodeProps) {
  const { section, sectionIndex, onSectionChange } = props;

  const handleFieldChange = (payload: FieldEvent) => {
    onSectionChange({
      section,
      sectionIndex,
      ...payload,
    });
  };

  return (
    <section className="section__inner">
      <div className="section__wrapper">
        {section.fields.map((field, fieldIndex) => (
          <FieldNode
            key={fieldIndex}
            field={field}
            fieldIndex={fieldIndex}
            onFieldChange={(payload) => handleFieldChange(payload)}
          />
        ))}
      </div>
    </section>
  );
}

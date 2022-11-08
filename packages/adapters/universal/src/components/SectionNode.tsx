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

// Feature:
// 1. Render section
// 2. Adapt section input/change event from Component
// 3. Render section title tip/description if declared
// 4. Adapt section validator base on the used UI library
// 5. Render section error message if has validation
// 6. Support multiple responses
// 7. Support conditional rendering
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

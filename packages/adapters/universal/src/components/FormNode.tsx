import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import { Model } from "../core/Model";
import { SectionEvent } from "../types/section-event.type";
import { Schema } from "../core/Schema";

import SectionNode from "./SectionNode";

type FormNodeProps = {
  formkl: Formkl;
  model?: SchemaBase | SchemaFlat;
  onSubmit?: (model: SchemaBase | SchemaFlat) => void;
  onChange?: (model: SchemaBase | SchemaFlat) => void;
};

export default function FormNode(options: FormNodeProps) {
  const { formkl, model, onSubmit, onChange } = options;

  // construct a reactive model
  const formSchema = new Schema(formkl);
  const formModel = new Model(formkl, formSchema, model);

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    onSubmit?.(formModel.getModel());
  };

  const handleSectionChange = (payload: SectionEvent) => {
    onChange?.(formModel.getModel());
  };

  return (
    <form className="form__wrapper" onSubmit={handleSubmit}>
      <div className="section__wrapper">
        {formkl.sections.map((section, sectionIndex) => (
          <SectionNode
            section={section}
            sectionIndex={sectionIndex}
            onSectionChange={handleSectionChange}
          />
        ))}
      </div>
    </form>
  );
}

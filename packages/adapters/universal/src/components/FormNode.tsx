import FormklParser from "formkl";

import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import { Model } from "../core/Model";
import { SectionEvent } from "../types/section-event.type";
import { Schema } from "../core/Schema";

import SectionNode from "./SectionNode";

type FormNodeProps = {
  formkl: Formkl | string;
  model?: SchemaBase | SchemaFlat;
  onSubmit?: (model: SchemaBase | SchemaFlat) => void;
  onChange?: (model: SchemaBase | SchemaFlat) => void;
};

const safeFormklParse = (str: string) => {
  try {
    return FormklParser.parse(str);
  } catch (err: any) {
    console.warn("[Formkl Adapter]: ", err);

    return null;
  }
};

export default function FormNode(options: FormNodeProps) {
  const { formkl, model, onSubmit, onChange } = options;

  const parsedFormkl = typeof formkl === "string" ? safeFormklParse(formkl) : formkl;

  // construct a reactive model
  const formSchema = parsedFormkl ? new Schema(parsedFormkl) : null;
  const formModel = parsedFormkl ? new Model(parsedFormkl, formSchema, model) : null;

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    onSubmit?.(formModel.getModel());
  };

  const handleSectionChange = (payload: SectionEvent) => {
    onChange?.(formModel.getModel());
  };

  return parsedFormkl ? (
    <form className="form__wrapper" onSubmit={handleSubmit}>
      <div className="section__wrapper">
        {parsedFormkl.sections.map((section, sectionIndex) => (
          <SectionNode
            key={sectionIndex}
            section={section}
            sectionIndex={sectionIndex}
            onSectionChange={handleSectionChange}
          />
        ))}
      </div>
    </form>
  ) : null;
}

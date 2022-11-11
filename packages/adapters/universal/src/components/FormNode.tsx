import FormklParser from "formkl";

import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import { Model } from "../core/Model";
import { SectionEvent } from "../types/section-event.type";
import { Schema } from "../core/Schema";
import { Adapter } from "../core/Adapter";

import SectionNode from "./SectionNode";
import { FormWrapper } from "./FormWrapper";

type FormNodeProps = {
  formkl: Formkl | string;
  model?: SchemaBase | SchemaFlat;
  onSubmit?: (model: SchemaBase | SchemaFlat) => Promise<void>;
  onChange?: (model: SchemaBase | SchemaFlat) => void;
};

const safeFormklParse = (str: string): Formkl | null => {
  try {
    return FormklParser.parse(str);
  } catch (err: any) {
    console.warn("[Formkl Adapter]: ", err);

    return null;
  }
};

// TODO: Explain how our components are async and requires a <Suspense> wrapper

// Feature:
// 1. Render form
// 2. Adapt form input/change event
// 3. Render form title tip/description if declared
// 4. Render form error message if has validation
// 5. Support presets for different UI libraries
export default function FormNode(props: FormNodeProps) {
  const { formkl, model, onSubmit, onChange } = props;

  const parsedFormkl = typeof formkl === "string" ? safeFormklParse(formkl) : formkl;

  if (!(parsedFormkl && formkl)) return null;

  // construct a reactive model
  const formSchema = new Schema(parsedFormkl);
  const formModel = new Model(parsedFormkl, formSchema, model);

  const reactiveModel = ref(formModel.getModel());

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    await onSubmit?.(formModel.getModel());
  };

  const handleSectionChange = (payload: SectionEvent) => {
    // Change model with payload
    const newModel = formModel.setModel(payload);
    onChange?.(newModel);
  };

  return (
    <FormWrapper
      {...Adapter.getFormWrapper()?.returnProps?.({
        formModel: formModel.getModel(),
        formkl: parsedFormkl,
      })}
      className="form__wrapper"
      onSubmit={handleSubmit}
    >
      <h3 className="form__title">{parsedFormkl.title}</h3>
      <h4 className="form__description">{parsedFormkl.description}</h4>
      <div className="form__section">
        {parsedFormkl.sections.map((section, sectionIndex) => (
          <SectionNode
            key={sectionIndex}
            formkl={parsedFormkl}
            section={section}
            sectionIndex={sectionIndex}
            formModel={formModel}
            onSectionChange={handleSectionChange}
          />
        ))}
      </div>
    </FormWrapper>
  );
}

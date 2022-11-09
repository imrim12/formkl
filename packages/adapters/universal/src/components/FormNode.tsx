import FormklParser from "formkl";

import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import { Model } from "../core/Model";
import { SectionEvent } from "../types/section-event.type";
import { Schema } from "../core/Schema";
import { Adapter } from "../core/Adapter";

import SectionNode from "./SectionNode";

type FormNodeProps = {
  formkl: Formkl | string;
  model?: SchemaBase | SchemaFlat;
  onSubmit?: (model: SchemaBase | SchemaFlat) => Promise<void>;
  onChange?: (model: SchemaBase | SchemaFlat) => Promise<void>;
};

const safeFormklParse = (str: string) => {
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
export default function FormNode(options: FormNodeProps) {
  const { formkl, model, onSubmit, onChange } = options;

  const parsedFormkl = typeof formkl === "string" ? safeFormklParse(formkl) : formkl;

  Adapter.callHook("onParse", parsedFormkl);

  // construct a reactive model
  const formSchema = parsedFormkl ? new Schema(parsedFormkl) : null;
  const formModel = parsedFormkl ? new Model(parsedFormkl, formSchema, model) : null;

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    const { doContinue, resolvedPayload } = await Adapter.callHook(
      "onBeforeSubmit",
      formModel.getModel(),
    );

    if (doContinue) {
      onSubmit?.(resolvedPayload);

      await Adapter.callHook("onSubmit", resolvedPayload);
    }
  };

  const handleSectionChange = async (payload: SectionEvent) => {
    const { doContinue, resolvedPayload } = await Adapter.callHook(
      "onBeforeModelChange",
      formModel.getModel(),
    );

    if (doContinue) {
      formModel.setModel(resolvedPayload);

      await onChange?.(formModel.getModel());

      await Adapter.callHook("onModelChange", formModel.getModel());
    }
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

import type { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import type { FormNodeProps } from "../components/FormNode";

import { useFormHandler } from "./handlers/useFormHandler";
import { createSchema } from "../createSchema";

import FormklParser from "formkl";

export const useForm = (props: FormNodeProps) => {
  let formkl: Formkl | null = null;

  try {
    formkl = FormklParser.parse(props.syntax);
  } catch (e) {
    console.error(e);
  }

  const model = createSchema(formkl, props.modelDefault);

  const handler = useFormHandler(Object.assign({}, props, { formkl, model }));

  return {
    formkl,
    model,
    handler,
  };
};

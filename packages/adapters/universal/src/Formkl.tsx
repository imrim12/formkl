import { Form } from "./core/Form";
import { FormNode } from "./components/Form";
import { isReact } from "./utils/isReact";
import type { FormOptions } from "./types/form-option.type";

import FormklParser from "formkl";

import _debounce from "lodash/debounce";

export const Formkl = (props: { formkl: string; debounce?: number; options?: FormOptions }) => {
  let instance$: Form | null = null;
  let error$: Error | null = null;

  try {
    const formkl = FormklParser.parse(props.formkl);

    instance$ = new Form(formkl, props.options);
  } catch (err: any) {
    console.warn("[Formkl Adapter]: ", err);

    error$ = err;
  }

  return <FormNode formkl={instance$?.formkl} model={instance$?.model} />;
};

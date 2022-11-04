import { mount } from "@vue/test-utils";
import type { FormOptions } from "..";
import FormklPlugin, { Formkl } from "..";

export const setupTest = (formklSyntax: string, options: FormOptions = {}, debounce = 100) =>
  mount(Formkl, {
    props: {
      formkl: formklSyntax,
      options,
      debounce,
    },
    global: {
      plugins: [FormklPlugin],
    },
  });

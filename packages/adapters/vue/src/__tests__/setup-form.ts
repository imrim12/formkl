import { mount } from "@vue/test-utils";
import type { FormOptions } from "@formkl/vue";
import FormklPlugin, { Formkl } from "@formkl/vue";

export const setupForm = (formklSyntax: string, options?: FormOptions, debounce = 100) =>
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

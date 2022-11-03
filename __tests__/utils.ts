import { mount } from "@vue/test-utils";
import type { FormOptions } from "@formkl/vue";
import FormklPlugin from "@formkl/vue";

export const setupTest = (formklSyntax: string, options: FormOptions = {}, debounce = 100) =>
  mount(
    {
      template: `<span><formkl :formkl="formklSyntax" :debounce="debounce" :options="options" /></span>`,
      data() {
        return {
          formklSyntax,
          options,
          debounce,
        };
      },
    },
    {
      global: {
        plugins: [[FormklPlugin, { globallyRegister: true }]],
      },
    },
  );

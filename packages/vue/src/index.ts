import type { Plugin } from "vue";

import Formkl from "./main.vue";
import { themeInjectionKey } from "./keys/theme";

const plugin: Plugin = {
  install(app, options) {
    app.component("formkl", Formkl);

		app.provide(themeInjectionKey, options.theme)
  },
};

export { Formkl };

export default plugin;

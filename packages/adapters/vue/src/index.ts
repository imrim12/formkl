import { Plugin } from "vue";

import Formkl from "./main.vue";

const plugin: Plugin = {
  install(app, options) {
    app.component("formkl", Formkl);

    app.config.globalProperties.$formkl = Object.assign(
      {
        theme: {},
      },
      options,
    );
  },
};

export { Formkl };

export default plugin;

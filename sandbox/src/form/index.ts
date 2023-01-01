import { Plugin } from "vue";

const plugin: Plugin = {
  install(app, options) {
    app.config.globalProperties.$formkl = Object.assign(
      {
        theme: {},
      },
      options,
    );
  },
};

export default plugin;

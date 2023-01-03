import FormklPlugin from "@formkl/vue";

import formklTheme from "@formkl/elemento";

import DefaultTheme from "vitepress/theme";

import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    if (DefaultTheme.enhanceApp) DefaultTheme.enhanceApp(ctx);

    FormklPlugin.install(ctx.app, {
      theme: formklTheme,
    });
  },
};

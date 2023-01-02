import "virtual:windi.css";

import { createApp } from "vue";

import App from "./App.vue";
import FormklPlugin from "@formkl/vue";

import ElementPlus from "element-plus";

import formklTheme from "@formkl/elemento";

import "element-plus/dist/index.css";

import "@formkl/editor";

import "./style.css";

createApp(App)
  .use(FormklPlugin, {
    theme: formklTheme,
  })
  .use(ElementPlus)
  .mount("#app");

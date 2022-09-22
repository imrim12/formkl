import { createApp, h } from "vue";
import App from "./App.vue";

import "element-plus/dist/index.css";

import { Adapter, Plugin } from "../../src";
import { ElInput } from "element-plus";

Adapter.registerPlugin(
  new Plugin({
    name: "text",
    component: h(ElInput, { size: "large" }),
  }),
);

createApp(App).mount("#app");

import { h } from "vue-demi";
import { ElInput } from "element-plus";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginText = new Plugin({
  name: DefaultComponent.TEXT,
  component: h(ElInput),
  events: {},
});

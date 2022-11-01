import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import { ElInput } from "element-plus";

export const PluginText = new Plugin({
  name: DefaultComponent.TEXT,
  component: h(ElInput),
  events: {},
});

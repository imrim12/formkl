import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import { ElInput } from "element-plus";

export const PluginParagraph = new Plugin({
  name: DefaultComponent.PARAGRAPH,
  component: h(ElInput, { type: "textarea" }),
});

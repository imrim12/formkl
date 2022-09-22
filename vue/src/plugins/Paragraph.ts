import { h } from "vue";
import { ElInput } from "element-plus";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginParagraph = new Plugin({
  name: DefaultComponent.PARAGRAPH,
  component: h(ElInput, { type: "textarea" }),
});

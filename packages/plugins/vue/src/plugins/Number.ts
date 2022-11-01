import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import { ElInputNumber } from "element-plus";

export const PluginNumber = new Plugin({
  name: DefaultComponent.NUMBER,
  component: h(ElInputNumber),
});

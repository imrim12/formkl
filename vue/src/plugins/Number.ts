import { h } from "vue";
import { ElInputNumber } from "element-plus";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginNumber = new Plugin({
  name: DefaultComponent.NUMBER,
  component: h(ElInputNumber),
});

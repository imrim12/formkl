import { h } from "vue";
import { ElSwitch } from "element-plus";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginSwitch = new Plugin({
  name: DefaultComponent.SWITCH,
  component: h(ElSwitch),
});

import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import { ElSwitch } from "element-plus";

export const PluginSwitch = new Plugin({
  name: DefaultComponent.SWITCH,
  component: h(ElSwitch),
});

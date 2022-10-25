import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import { ElTimePicker } from "element-plus";

export const PluginTime = new Plugin({
  name: DefaultComponent.TIME,
  component: h(ElTimePicker),
});

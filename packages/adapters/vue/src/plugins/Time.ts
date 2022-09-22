import { h } from "vue";
import { ElTimePicker } from "element-plus";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginTime = new Plugin({
  name: DefaultComponent.TIME,
  component: h(ElTimePicker),
});

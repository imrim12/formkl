import { h } from "vue-demi";
import { ElTimePicker } from "element-plus";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginTimeRange = new Plugin({
  name: DefaultComponent.TIMERANGE,
  component: h(ElTimePicker, { type: "timerange" }),
});

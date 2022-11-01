import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import { ElTimePicker } from "element-plus";

export const PluginTimeRange = new Plugin({
  name: DefaultComponent.TIMERANGE,
  component: h(ElTimePicker, { type: "timerange" }),
});

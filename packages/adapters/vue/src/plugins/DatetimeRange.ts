import { h } from "vue-demi";
import { ElDatePicker } from "element-plus";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginDatetimeRange = new Plugin({
  name: DefaultComponent.DATETIMERANGE,
  component: h(ElDatePicker, { type: "datetimerange" }),
});

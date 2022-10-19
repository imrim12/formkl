import { h } from "vue-demi";
import { ElDatePicker } from "element-plus";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginDateRange = new Plugin({
  name: DefaultComponent.DATERANGE,
  component: h(ElDatePicker, { type: "daterange" }),
});

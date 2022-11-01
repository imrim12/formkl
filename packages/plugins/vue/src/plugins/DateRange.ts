import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import { ElDatePicker } from "element-plus";

export const PluginDateRange = new Plugin({
  name: DefaultComponent.DATERANGE,
  component: h(ElDatePicker, { type: "daterange" }),
});

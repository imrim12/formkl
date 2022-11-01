import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import { ElDatePicker } from "element-plus";

export const PluginDatetimeRange = new Plugin({
  name: DefaultComponent.DATETIMERANGE,
  component: h(ElDatePicker, { type: "datetimerange" }),
});

import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import { ElDatePicker } from "element-plus";

export const PluginDatetime = new Plugin({
  name: DefaultComponent.DATETIME,
  component: h(ElDatePicker, { type: "datetime" }),
});

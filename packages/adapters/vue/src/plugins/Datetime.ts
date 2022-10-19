import { h } from "vue-demi";
import { ElDatePicker } from "element-plus";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginDatetime = new Plugin({
  name: DefaultComponent.DATETIME,
  component: h(ElDatePicker, { type: "datetime" }),
});

import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import { ElDatePicker } from "element-plus";

export const PluginDate = new Plugin({
  name: DefaultComponent.DATE,
  component: h(ElDatePicker),
});

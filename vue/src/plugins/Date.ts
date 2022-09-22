import { h } from "vue";
import { ElDatePicker } from "element-plus";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginDate = new Plugin({
  name: DefaultComponent.DATE,
  component: h(ElDatePicker),
});

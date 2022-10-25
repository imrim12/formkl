import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import FormklSelect from "../components/FormklSelect";

export const PluginSelect = new Plugin({
  name: DefaultComponent.SELECT,
  component: h(FormklSelect),
});

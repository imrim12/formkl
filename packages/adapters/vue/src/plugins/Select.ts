import { h } from "vue-demi";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

import FormklSelect from "../components/wrappers/FormklSelect";

export const PluginSelect = new Plugin({
  name: DefaultComponent.SELECT,
  component: h(FormklSelect),
});

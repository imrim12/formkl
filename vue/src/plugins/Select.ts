import { h } from "vue";

import { Plugin } from "../core/Plugin";

import FormklSelect from "../components/FormklSelect.vue";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginSelect = new Plugin({
  name: DefaultComponent.SELECT,
  component: h(FormklSelect),
});

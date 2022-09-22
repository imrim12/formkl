import { h } from "vue";

import { Plugin } from "../core/Plugin";
import FormklCheckbox from "../components/FormklCheckbox.vue";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginCheckbox = new Plugin({
  name: DefaultComponent.CHECKBOX,
  component: h(FormklCheckbox),
});

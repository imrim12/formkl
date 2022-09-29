import { h } from "vue";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

import FormklCheckbox from "../components/FormklCheckbox";

export const PluginCheckbox = new Plugin({
  name: DefaultComponent.CHECKBOX,
  component: h(FormklCheckbox),
});

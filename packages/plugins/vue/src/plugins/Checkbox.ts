import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import FormklCheckbox from "../components/FormklCheckbox";

export const PluginCheckbox = new Plugin({
  name: DefaultComponent.CHECKBOX,
  component: h(FormklCheckbox),
});

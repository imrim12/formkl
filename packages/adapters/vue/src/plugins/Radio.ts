import { h } from "vue-demi";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

import FormklRadio from "../components/wrappers/FormklRadio";

export const PluginRadio = new Plugin({
  name: DefaultComponent.RADIO,
  component: h(FormklRadio),
});

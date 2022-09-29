import { h } from "vue";

import { Plugin } from "../core/Plugin";
import { DefaultComponent } from "../types/default-component.enum";

import FormklRadio from "../components/FormklRadio";

export const PluginRadio = new Plugin({
  name: DefaultComponent.RADIO,
  component: h(FormklRadio),
});

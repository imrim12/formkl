import { h } from "vue";

import { Plugin } from "../core/Plugin";
import FormklRadio from "../components/FormklRadio.vue";
import { DefaultComponent } from "../types/default-component.enum";

export const PluginRadio = new Plugin({
  name: DefaultComponent.RADIO,
  component: h(FormklRadio),
});

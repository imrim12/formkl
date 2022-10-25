import { h } from "vue-demi";
import { DefaultComponent } from "../types/default-component.enum";
import { Plugin } from "../Plugin";

import FormklRadio from "../components/FormklRadio";

export const PluginRadio = new Plugin({
  name: DefaultComponent.RADIO,
  component: h(FormklRadio),
});

import { App } from "vue";
import { Adapter } from "./core/Adapter";
import { Plugin } from "./core/Plugin";
import { DefaultComponent } from "./types/default-component.enum";

import Formkl from "./Main.vue";

import FormklParser from "formkl";

import { bootstrap } from "./bootstrap";

import "./assets/main.scss";

bootstrap();

function install(app: App) {
  app.component("formkl", Formkl);

  app.config.globalProperties.$formkl = FormklParser;
}

export { Formkl, FormklParser, Adapter, Plugin, DefaultComponent };

export default { install };

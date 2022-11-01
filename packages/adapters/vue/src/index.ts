import { App } from "vue-demi";
import {
  Adapter,
  Plugin,
  DefaultComponent,
  PluginCheckbox,
  PluginDate,
  PluginDateRange,
  PluginDatetime,
  PluginDatetimeRange,
  PluginNumber,
  PluginParagraph,
  PluginRadio,
  PluginSelect,
  PluginSwitch,
  PluginText,
  PluginTime,
  PluginTimeRange,
} from "@formkl/plugin-vue";

import Formkl from "./Main";

import FormklParser from "formkl";

import "./assets/main.scss";

interface PluginOptions {
  globallyRegister?: boolean;
  useDefaultPlugins?: boolean;
  plugins?: Plugin[];
}

function install(app: App, options: PluginOptions = {}) {
  const { globallyRegister = false, useDefaultPlugins = true, plugins = [] } = options;

  // Default plugins
  if (useDefaultPlugins) {
    Adapter.registerPlugin(
      PluginCheckbox,
      PluginDate,
      PluginDateRange,
      PluginDatetime,
      PluginDatetimeRange,
      PluginNumber,
      PluginParagraph,
      PluginRadio,
      PluginSelect,
      PluginSwitch,
      PluginText,
      PluginTime,
      PluginTimeRange,
    );
  }

  // Overide default plugins
  Adapter.registerPlugin(...plugins);

  if (globallyRegister) {
    app.component("formkl", Formkl);

    app.config.globalProperties.$formkl = FormklParser;
  }
}

export { Formkl, FormklParser, Adapter, Plugin, DefaultComponent };

export default { install };

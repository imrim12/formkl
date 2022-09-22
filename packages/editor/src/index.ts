import { App } from "vue";

import FormklEditor from "./Editor.vue";

import "./assets/main.scss";

function install(app: App) {
  app.component("formkl-editor", FormklEditor);
}

export { FormklEditor };

export default { install };

import "virtual:windi.css";

import { createApp } from "vue";

import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "./style.css";

createApp(App).use(ElementPlus).mount("#app");

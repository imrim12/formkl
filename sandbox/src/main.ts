import "virtual:windi.css";

import { createApp } from "vue";

import App from "./App.vue";
import FormklPlugin from "@formkl/vue";

import ElementPlus, { ElButton } from "element-plus";
import "element-plus/dist/index.css";

import "@formkl/editor";

import "./style.css";

import { Adapter } from "@formkl/adapter";
import { ElForm, ElFormItem } from "element-plus";

Adapter.setOptions({
  FormWrapper: {
    component: ElForm,
  },
  FieldWrapper: {
    component: ElFormItem,
  },
  SectionBtnAddResponse: {
    component: ElButton,
  },
  SectionBtnRemoveResponse: {
    component: ElButton,
  },
  FieldBtnAddResponse: {
    component: ElButton,
  },
  FieldBtnRemoveResponse: {
    component: ElButton,
  },
});

createApp(App).use(FormklPlugin).use(ElementPlus).mount("#app");

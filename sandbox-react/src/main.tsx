import "virtual:windi.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@formkl/editor";

import { Adapter, Component } from "@formkl/adapter";
import { Form, Button, Input } from "antd";

import "antd/dist/antd.css";

Adapter.registerComponent(
  new Component({
    name: "text",
    renderer: Input,
  }),
);

Adapter.setOptions({
  FormWrapper: {
    component: Form,
  },
  FieldWrapper: {
    component: Form.Item,
  },
  SectionBtnAddResponse: {
    component: Button,
  },
  SectionBtnRemoveResponse: {
    component: Button,
  },
  FieldBtnAddResponse: {
    component: Button,
  },
  FieldBtnRemoveResponse: {
    component: Button,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

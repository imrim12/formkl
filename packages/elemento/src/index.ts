import { h } from "vue";
import { Theme } from "@formkl/shared";
import {
  ElInput,
  ElButton,
  ElSwitch,
  ElInputNumber,
  ElDatePicker,
  ElTimePicker,
  ElForm,
  ElFormItem,
} from "element-plus";

import RadioComponent from "./components/radio.component";
import CheckboxComponent from "./components/checkbox.component";
import SelectComponent from "./components/select.component";

import "element-plus/dist/index.css";

import "./style.css";

const themeConfig: Theme = {
  VNodeFormWrapper: h(ElForm),
  vNodeFieldWrapper: h(ElFormItem),
  vNodeFields: {
    text: h(ElInput),
    paragraph: h(ElInput, { type: "textarea" }),
    switch: h(ElSwitch),
    number: h(ElInputNumber),
    date: h(ElDatePicker, { valueFormat: "YYYY-MM-DD" }),
    time: h(ElTimePicker, { valueFormat: "HH:mm:ss" }),
    datetime: h(ElDatePicker, { type: "datetime", valueFormat: "YYYY-MM-DD HH:mm:ss" }),
    daterange: h(ElDatePicker, { isRange: true, valueFormat: "YYYY-MM-DD" }),
    timerange: h(ElTimePicker, { isRange: true, valueFormat: "HH:mm:ss" }),
    datetimerange: h(ElDatePicker, {
      type: "datetime",
      isRange: true,
      valueFormat: "YYYY-MM-DD HH:mm:ss",
    }),
    select: SelectComponent,
    checkbox: CheckboxComponent,
    radio: RadioComponent,
  },
  vNodeComponents: {
    addSection: h(ElButton, () => "Add section"),
    removeSection: h(ElButton, { type: "danger" }, "Remove section"),
    addField: h(ElButton, () => "Add field"),
    removeField: h(ElButton, { type: "danger" }, "Remove field"),
  },
};

export default themeConfig;

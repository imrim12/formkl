import { defineComponent, h } from "vue";
import { Theme } from "@formkl/shared";
import {
  ElInput,
  ElButton,
  ElSelectV2,
  ElSwitch,
  ElInputNumber,
  ElDatePicker,
  ElTimePicker,
  ElCheckboxGroup,
  ElCheckbox,
  ElRadioGroup,
  ElRadio,
} from "element-plus";

import "element-plus/dist/index.css";

import "./style.css";

const themeConfig: Theme = {
  vNodeFields: {
    text: h(ElInput),
    paragraph: h(ElInput, { type: "textarea" }),
    switch: h(ElSwitch),
    number: h(ElInputNumber),
    date: h(ElDatePicker),
    time: h(ElTimePicker),
    datetime: h(ElDatePicker, { type: "datetime" }),
    daterange: h(ElDatePicker, { isRange: true }),
    timerange: h(ElTimePicker, { isRange: true }),
    datetimerange: h(ElDatePicker, { type: "datetime", isRange: true }),
    select: h(ElSelectV2),
    checkbox: defineComponent({
      props: {
        options: Array,
      },
      setup(props, { attrs }) {
        return () =>
          h(
            ElCheckboxGroup,
            Object.assign({}, props, attrs),
            props.options.map((option: any) => h(ElCheckbox, { label: option }, option)),
          );
      },
    }),
    radio: defineComponent({
      props: {
        options: Array,
      },
      setup(props, { attrs }) {
        return () =>
          h(
            ElRadioGroup,
            Object.assign({}, props, attrs),
            props.options.map((option: any) => h(ElRadio, { label: option }, option)),
          );
      },
    }),
  },
  vNodeComponents: {
    addSection: h(ElButton, () => "Add section"),
    removeSection: h(ElButton, { type: "danger" }, "Remove section"),
    addField: h(ElButton, () => "Add field"),
    removeField: h(ElButton, { type: "danger" }, "Remove field"),
  },
};

export default themeConfig;

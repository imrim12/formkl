import { h } from "vue";
import { Theme } from "@formkl/shared";
import { ElInput, ElButton } from "element-plus";

const themeConfig: Theme = {
  vNodeFields: {
    text: ElInput,
    paragraph: h(ElInput, { type: "textarea" }),
  },
  vNodeComponents: {
    addSection: h(ElButton, "Add section"),
    removeSection: h(ElButton, { type: "danger" }, "Remove section"),
    addField: h(ElButton, "Add field"),
    removeField: h(ElButton, { type: "danger" }, "Remove field"),
  },
};

export default themeConfig;

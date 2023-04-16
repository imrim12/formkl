import { ElCheckboxGroup, ElCheckbox } from "element-plus";
import { defineComponent, h } from "vue";
import { useSelection } from "./useSelection";

export default defineComponent({
  name: "FormklCheckbox",
  props: {
    options: Array,
    modelValue: [String, Number],
    fetchUrl: {
      type: String,
      default: "",
    },
    fetchDataPath: {
      type: String,
      default: "",
    },
    labelKey: {
      type: String,
      default: "name",
    },
    valueKey: {
      type: String,
      default: "id",
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { attrs }) {
    const { computedOptions } = useSelection();

    return () =>
      h(
        ElCheckboxGroup,
        Object.assign({}, props as any, attrs),
        computedOptions.value.map((option) => h(ElCheckbox, { label: option.value }, option.label)),
      );
  },
});

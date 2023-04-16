import { ElRadioGroup, ElRadio } from "element-plus";
import { defineComponent, h } from "vue";
import { useSelection } from "./useSelection";

export default defineComponent({
  name: "FormklRadio",
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
        ElRadioGroup,
        Object.assign({}, props as any, attrs),
        computedOptions.value.map((option: any) =>
          h(ElRadio, { label: option.value }, option.label),
        ),
      );
  },
});

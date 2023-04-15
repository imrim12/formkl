import { ElSelectV2 } from "element-plus";
import { defineComponent, getCurrentInstance, h } from "vue";

import { isNaNStrict } from "@formkl/shared";
import { useSelection } from "./useSelection";

export default defineComponent({
  name: "FormklSelect",
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
  setup(props, { emit }) {
    const vm = getCurrentInstance()?.proxy;

    const { computedOptions, isLoading, handleSearchOption } = useSelection();

    const handleSelectionChange = (event: any) => {
      emit("change", event);
      emit("update:modelValue", event);

      (vm.$refs.selectV2Ref as any).handleClickOutside();
    };

    console.log(computedOptions.value);

    return () =>
      h(
        ElSelectV2,
        {
          ref: "selectV2Ref",
          valueKey: "value",
          filterable: true,
          clearable: true,
          multiple: false,
          defaultFirstOption: true,
          modelValue: isNaNStrict(props.modelValue) ? Number(props.modelValue) : props.modelValue,
          remote: Boolean(props.fetchUrl),
          remoteMethod: handleSearchOption,
          loading: isLoading.value,
          options: computedOptions.value,
          onChange: handleSelectionChange,
          onClear: handleSelectionChange,
        },
        {
          default: ({ item }) => h("span", { class: "text-sm" }, item.label),
        },
      );
  },
});

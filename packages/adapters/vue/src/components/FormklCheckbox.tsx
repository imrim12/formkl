import { defineComponent, PropType } from "vue";
import { ElCheckboxGroup, ElCheckbox } from "element-plus";

import type { CheckboxValueType } from "element-plus";

export default defineComponent({
  name: "FormklCheckboxWrapper",
  props: {
    modelValue: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    options: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const handleChange = (value: CheckboxValueType[]) => {
      emit("update:modelValue", value);
    };

    return () => (
      <ElCheckboxGroup modelValue={props.modelValue} onChange={handleChange}>
        {props.options.map((option) => (
          <ElCheckbox label={option} key={String(option)} />
        ))}
      </ElCheckboxGroup>
    );
  },
});

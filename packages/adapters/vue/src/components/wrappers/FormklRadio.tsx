import { defineComponent, PropType } from "vue";
import { ElRadioGroup, ElRadio } from "element-plus";

export default defineComponent({
  name: "FormklRadioWrapper",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
    },
    options: {
      type: Array as PropType<Array<string | number | boolean>>,
      default: () => [],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const handleChange = (value: string | number | boolean) => {
      emit("update:modelValue", value);
    };

    return () => (
      <ElRadioGroup modelValue={props.modelValue} onChange={handleChange}>
        {props.options.map((option) => (
          <ElRadio label={option} key={String(option)} />
        ))}
      </ElRadioGroup>
    );
  },
});

<template>
  <el-radio-group :model-value="modelValue" @change="handleChange">
    <el-radio v-for="option in options" :label="option" :key="String(option)" />
  </el-radio-group>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ElRadioGroup, ElRadio } from "element-plus";

export default defineComponent({
  name: "FormklRadioWrapper",
  components: { ElRadioGroup, ElRadio },
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

    return {
      handleChange,
    };
  },
});
</script>

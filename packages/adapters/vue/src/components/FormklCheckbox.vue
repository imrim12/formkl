<template>
  <el-checkbox-group :model-value="modelValue" @change="handleChange">
    <el-checkbox v-for="option in options" :label="option" :key="option" />
  </el-checkbox-group>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ElCheckboxGroup, ElCheckbox } from "element-plus";

import type { CheckboxValueType } from "element-plus";

export default defineComponent({
  name: "FormklCheckboxWrapper",
  components: { ElCheckboxGroup, ElCheckbox },
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

    return {
      handleChange,
    };
  },
});
</script>

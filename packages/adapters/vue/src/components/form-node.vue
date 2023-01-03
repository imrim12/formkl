<template>
  <div class="formkl-form__wrapper">
    <div class="formkl-form__container">
      <SectionNode
        v-for="section in form.sections"
        :key="section.key"
        :form="form"
        :section="section"
        :model-value="modelValue?.[section.key]"
        @update:model-value="handleUpdateSection($event, section)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Formkl, Schema } from "@formkl/shared";

import SectionNode from "./section-node.vue";

const props = defineProps({
  form: Object as PropType<Formkl>,
  modelValue: {
    type: Object as PropType<Schema>,
    required: true,
  },
});

const emit = defineEmits<{
  (event: "update:modelValue", model: any): void;
}>();

const handleUpdateSection = (value: any, section: any) => {
  emit("update:modelValue", Object.assign({}, props.modelValue, { [section.key]: value }));
};
</script>

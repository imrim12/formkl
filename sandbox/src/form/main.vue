<template>
  <div class="formkl__wrapper">
    <FormLayout v-if="formComputed" :form="formComputed">
      <FormNode
        :form="formComputed"
        :model="modelValue"
        @change="handleChange"
        @submit="handleSubmit"
      />
    </FormLayout>
    <div v-else class="formkl__error">Failed to load form</div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Formkl } from "@formkl/shared";

import { themeInjectionKey } from "./keys/theme";

import FormParser from "formkl";
import FormLayout from "./layout.vue";
import FormNode from "./nodes/form-node.vue";

const props = defineProps({
  syntax: {
    type: String,
    required: false,
  },
  form: {
    type: Object as PropType<Formkl>,
    required: false,
  },
  modelValue: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits<{
  (event: "change"): void;
  (event: "update:modelValue"): void;
  (event: "submit"): void;
}>();

const vm = getCurrentInstance()?.proxy;

const currentTheme = computed(() => vm.$formkl.theme);
provide(themeInjectionKey, currentTheme);

const formComputed = computed<Formkl | null>(() => {
  if (props.syntax) {
    try {
      return FormParser.parse(props.syntax);
    } catch (error) {
      console.error(error);

      return null;
    }
  }

  return props.form;
});

const handleChange = () => {
  emit("change");
  emit("update:modelValue");
};

const handleSubmit = () => {
  emit("submit");
};

onMounted(() => {
  if (!props.syntax && !props.form) {
    throw new Error("Either syntax or form is required");
  }
});
</script>

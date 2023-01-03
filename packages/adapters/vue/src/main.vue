<template>
  <div class="formkl__wrapper">
    <component v-if="formComputed" :is="VNodeLayout" :form="formComputed">
      <FormNode
        :form="formComputed"
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </component>
    <div v-else class="formkl__error">Failed to load form</div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "Formkl",
});
</script>

<script lang="ts" setup>
import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  PropType,
  provide,
} from "vue";
import { Formkl, Schema } from "@formkl/shared";

import { themeInjectionKey } from "./keys/theme";

import _set from "lodash/set";

import FormParser from "formkl";
import LayoutDefault from "./layouts/default.vue";
import FormNode from "./components/form-node.vue";

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
    type: Object as PropType<Schema>,
    default: () => ({}),
  },
});

const emit = defineEmits<{
  (event: "update:modelValue", model: any): void;
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

const _buildSchema = () => {
  const schema = {};
  formComputed.value?.sections.forEach((section) => {
    section.fields.forEach((field) => {
      if (section.multiple) {
        _set(schema, section.key, [
          {
            [field.key]: null,
          },
        ]);
      } else if (field.multiple) {
        _set(schema, `${section.key}.${field.key}`, [null]);
      } else {
        _set(schema, `${section.key}.${field.key}`, null);
      }
    });
  });

  emit("update:modelValue", schema);
};
_buildSchema();

const VNodeLayout = computed(() => h(currentTheme.value?.vNodeLayout || LayoutDefault));

onMounted(() => {
  if (!props.syntax && !props.form) {
    throw new Error("Either syntax or form is required");
  }
});
</script>

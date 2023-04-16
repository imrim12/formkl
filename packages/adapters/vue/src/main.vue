<template>
  <component :is="VNodeFormWrapper" class="formkl__wrapper">
    <component v-if="formComputed" :is="VNodeLayout">
      <FormNode
        :form="formComputed"
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </component>
    <div v-else class="formkl__error">Failed to load form</div>
  </component>
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
  useAttrs,
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

const attrs = useAttrs();

// Attributes that start in "on"
const listerers$ = computed(() => {
  const listeners = {};
  Object.keys(attrs).forEach((key) => {
    if (key.startsWith("on")) {
      listeners[key] = attrs[key];
    }
  });

  return listeners;
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

const VNodeLayout = defineComponent({
  name: "FormLayout",
  setup:
    (props, { slots }) =>
    () =>
      h(
        currentTheme.value.vNodeLayout || LayoutDefault,
        { form: formComputed.value },
        {
          default: () => slots.default(),
        },
      ),
});

const VNodeFormWrapper = defineComponent({
  name: "FormWrapper",
  setup:
    (props, { slots }) =>
    () =>
      h(currentTheme.value?.VNodeFormWrapper || "form", listerers$, {
        default: () => slots.default(),
      }),
});

onMounted(() => {
  if (!props.syntax && !props.form) {
    throw new Error("Either syntax or form is required");
  }
});
</script>

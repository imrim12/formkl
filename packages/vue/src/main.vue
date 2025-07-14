<template>
  <component :is="VNodeFormWrapper" class="formkl__wrapper">
    <component v-if="formComputed" :is="VNodeLayout">
      <FormNode
        :form="formComputed"
        v-model="modelValue"
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
import type { Formkl, Schema } from "@formkl/shared";
import { themeInjectionKey } from "./keys/theme";
import { set as _set } from 'es-toolkit/compat'
import FormParser from "formkl";
import LayoutDefault from "./layouts/default.vue";
import FormNode from "./components/form-node.vue";

const props = defineProps<{
  syntax?: string;
  form?: Formkl;
}>();

const modelValue = defineModel<Schema>({ default: () => ({}) });

const currentTheme = inject(themeInjectionKey)

if (!currentTheme) {
  throw new Error("[formkl] Theme is not provided. Please make sure to install the Formkl plugin with a theme.");
}

const formComputed = computed<Formkl | null | undefined>(() => {
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
  const listeners: any = {};
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
      if (section.key) {
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
      }
    });
  });
  modelValue.value = schema;
};

_buildSchema();

const VNodeLayout = defineComponent({
  name: "FormLayout",
  setup: (props, { slots }) => () =>
    h(
      toValue(currentTheme).vNodeLayout || LayoutDefault,
      { form: formComputed.value },
      {
        default: () => slots.default?.(),
      },
    ),
});

const VNodeFormWrapper = defineComponent({
  name: "FormWrapper",
  setup: (props, { slots }) => () =>
    h(toValue(currentTheme).VNodeFormWrapper || "form", listerers$, {
      default: () => slots.default?.(),
    }),
});

onMounted(() => {
  if (!props.syntax && !props.form) {
    throw new Error("Either syntax or form is required");
  }
});
</script>

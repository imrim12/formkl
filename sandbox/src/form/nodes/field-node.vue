<template>
  <div class="formkl-field__wrapper">
    <p v-if="field.label" class="formkl-field__title">{{ field.label }}</p>
    <div class="formkl-field__container">
      <component :is="VNodeField" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { FieldCustom, FieldDefault, FieldSelection, Formkl, Section } from "@formkl/shared";
import { themeInjectionKey } from "../keys/theme";

const props = defineProps({
  form: Object as PropType<Formkl>,
  section: Object as PropType<Section>,
  field: Object as PropType<FieldDefault | FieldSelection | FieldCustom>,
  model: {
    type: Object,
    required: true,
  },
});

const currentTheme = inject(themeInjectionKey);

const VNodeField = computed(() => currentTheme.value?.vNodeFields?.[props.field.type] || "input");
</script>

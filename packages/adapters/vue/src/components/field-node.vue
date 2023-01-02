<template>
  <div class="formkl-field__wrapper">
    <p v-if="field.label" class="formkl-field__title">{{ field.label }}</p>
    <div class="formkl-field__container">
      <template v-if="field.multiple">
        <template v-for="(modelValueEach, index) in modelValue" :key="index">
          <component
            :is="VNodeField"
            :model-value="modelValueEach"
            @update:model-value="handleUpdateFieldMultiple($event, index)"
          />
        </template>
      </template>
      <template v-else>
        <component
          :is="VNodeField"
          :model-value="modelValue"
          @update:model-value="handleUpdateFieldSingle"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, h, inject, PropType } from "vue";
import { FieldCustom, FieldDefault, FieldSelection, Formkl, Section } from "@formkl/shared";
import { themeInjectionKey } from "../keys/theme";

import _cloneDeep from "lodash/cloneDeep";
import _set from "lodash/set";

const props = defineProps({
  form: Object as PropType<Formkl>,
  section: Object as PropType<Section>,
  field: Object as PropType<FieldDefault | FieldSelection | FieldCustom>,
  modelValue: {
    type: [Object, Array, String, Number, Boolean] as PropType<any>,
    default: () => null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleUpdateFieldMultiple = (value: any, index: number) => {
  const currentValue = _cloneDeep(props.modelValue) as Array<any>;
  _set(currentValue, String(index), value);
  emit("update:modelValue", currentValue);
};

const handleUpdateFieldSingle = (value: any) => {
  emit("update:modelValue", value);
};

const currentTheme = inject(themeInjectionKey);

const VNodeField = computed(() =>
  h(currentTheme.value?.vNodeFields?.[props.field.type] || "input"),
);
</script>

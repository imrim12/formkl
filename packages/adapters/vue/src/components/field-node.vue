<template>
  <div class="formkl-field__wrapper">
    <p v-if="field.label" class="formkl-field__title">{{ field.label }}</p>
    <div class="formkl-field__container">
      <template v-if="field.multiple">
        <template v-for="(modelValueEach, index) in modelValue" :key="index">
          <div class="formkl-field__inner">
            <component
              :is="VNodeField"
              :model-value="modelValueEach"
              @update:model-value="handleUpdateFieldMultiple($event, index)"
            />
            <component
              v-if="modelValue.length > 1"
              :is="VNodeBtnRemoveField"
              @click="handleRemoveValueFieldMultiple(index)"
            />
          </div>
        </template>
        <div class="formkl-field__footer">
          <component :is="VNodeBtnAddField" @click="handleAddValueFieldMultiple" />
        </div>
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
import { h, inject, PropType } from "vue";
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

const handleAddValueFieldMultiple = () => {
  const currentValue = _cloneDeep(props.modelValue) as Array<any>;
  currentValue.push(null);
  emit("update:modelValue", currentValue);
};

const handleRemoveValueFieldMultiple = (index: number) => {
  const currentValue = _cloneDeep(props.modelValue) as Array<any>;
  currentValue.splice(index, 1);
  emit("update:modelValue", currentValue);
};

const currentTheme = inject(themeInjectionKey);

const VNodeField = () => h(currentTheme.value?.vNodeFields?.[props.field.type] || "input");

const VNodeBtnAddField = () =>
  currentTheme.value?.vNodeComponents?.addField
    ? h(currentTheme.value?.vNodeComponents?.addField)
    : h("button", () => "Add field");

const VNodeBtnRemoveField = () =>
  currentTheme.value?.vNodeComponents?.addField
    ? h(currentTheme.value?.vNodeComponents?.removeField)
    : h("button", () => "Remove field");
</script>

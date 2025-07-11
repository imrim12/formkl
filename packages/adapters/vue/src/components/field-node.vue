<template>
  <div v-if="field" class="formkl-field__wrapper">
    <p v-if="field.label" class="formkl-field__title">{{ field.label }}</p>
    <div class="formkl-field__container">
      <template v-if="field.multiple">
        <component
          v-for="(modelValueEach, index) in modelValue"
          class="formkl-field__inner"
          :is="VNodeFieldWrapper"
          :key="index"
        >
          <component
            :is="VNodeField"
            :model-value="modelValueEach"
            @update:model-value="handleUpdateFieldMultiple($event, index)"
          />
          <div class="formkl-field__remover">
            <component
              v-if="modelValue.length > 1"
              :is="VNodeBtnRemoveField"
              @click="handleRemoveValueFieldMultiple(index)"
            />
          </div>
        </component>
        <div class="formkl-field__footer">
          <component :is="VNodeBtnAddField" @click="handleAddValueFieldMultiple" />
        </div>
      </template>
      <component v-else :is="VNodeFieldWrapper">
        <component
          :is="VNodeField"
          :model-value="modelValue"
          @update:model-value="handleUpdateFieldSingle"
        />
      </component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, h, inject, toValue } from "vue";
import type { PropType } from "vue";
import type { FieldCustom, FieldDefault, FieldSelection, Formkl, Section } from "@formkl/shared";
import { themeInjectionKey } from "../keys/theme";

import { set as _set, cloneDeep as _cloneDeep } from 'es-toolkit/compat'

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

if (!currentTheme) {
	throw new Error("[formkl] Theme is not provided. Please make sure to install the Formkl plugin with a theme.");
}

const VNodeFieldWrapper = defineComponent({
  name: "FieldWrapper",
  setup:
    (props, { slots }) =>
    () =>
      h(toValue(currentTheme).vNodeFieldWrapper || "div", slots.default?.()),
});

const VNodeField = defineComponent({
  name: "Field",
  setup: () => () => props.field
		? h(toValue(currentTheme).vNodeFields?.[props.field.type] || "div", props.field)
		: null,
});

const VNodeBtnAddField = defineComponent({
  name: "BtnAddField",
  setup: () => () =>
    toValue(currentTheme).vNodeComponents?.addField
      ? h(toValue(currentTheme).vNodeComponents?.addField)
      : h("button", () => "Add field"),
});

const VNodeBtnRemoveField = defineComponent({
  name: "BtnRemoveField",
  setup: () => () =>
    toValue(currentTheme).vNodeComponents?.addField
      ? h(toValue(currentTheme).vNodeComponents?.removeField)
      : h("button", () => "Remove field"),
});
</script>

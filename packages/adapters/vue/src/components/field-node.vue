<template>
  <div class="formkl-field__wrapper">
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
import { defineComponent, h, inject, PropType } from "vue";
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

const VNodeFieldWrapper = defineComponent({
  name: "FieldWrapper",
  setup:
    (props, { slots }) =>
    () =>
      h(currentTheme.value?.vNodeFieldWrapper || "div", () => slots.default()),
});

const VNodeField = defineComponent({
  name: "Field",
  setup: () => () => h(currentTheme.value?.vNodeFields?.[props.field.type] || "div", props.field),
});

const VNodeBtnAddField = defineComponent({
  name: "BtnAddField",
  setup: () => () =>
    currentTheme.value?.vNodeComponents?.addField
      ? h(currentTheme.value?.vNodeComponents?.addField)
      : h("button", () => "Add field"),
});

const VNodeBtnRemoveField = defineComponent({
  name: "BtnRemoveField",
  setup: () => () =>
    currentTheme.value?.vNodeComponents?.addField
      ? h(currentTheme.value?.vNodeComponents?.removeField)
      : h("button", () => "Remove field"),
});
</script>

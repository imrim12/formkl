<template>
  <div class="formkl-section__wrapper">
    <p v-if="section.title" class="formkl-section__title">{{ section.title }}</p>
    <div class="formkl-section__container">
      <template v-for="field in section.fields">
        <template v-if="section.multiple">
          <div
            v-for="(modelValueEach, index) in (modelValue as Array<any>)"
            :key="field.key + '-' + index"
            class="formkl-section__inner"
          >
            <FieldNode
              :section="section"
              :field="field"
              :model-value="modelValueEach[field.key]"
              @update:model-value="handleUpdateFieldMultiple($event, field, index)"
            />
            <div class="formkl-section__remover">
              <component
                v-if="modelValue.length > 1"
                :is="VNodeBtnRemoveSection"
                @click="handleRemoveValueSectionMultiple(index)"
              />
            </div>
          </div>
          <div class="formkl-section__footer">
            <component :is="VNodeBtnAddSection" @click="handleAddValueSectionMultiple" />
          </div>
        </template>
        <FieldNode
          v-else
          :key="field.key"
          :section="section"
          :field="field"
          :model-value="modelValue?.[field.key]"
          @update:model-value="handleUpdateFieldSingle($event, field)"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, h, inject, PropType } from "vue";
import { FieldCustom, FieldDefault, FieldSelection, Formkl, Section } from "@formkl/shared";

import _cloneDeep from "lodash/cloneDeep";

import FieldNode from "./field-node.vue";
import { themeInjectionKey } from "../keys/theme";

const props = defineProps({
  form: Object as PropType<Formkl>,
  section: Object as PropType<Section>,
  modelValue: {
    type: [Object, Array],
    default: () => ({}),
  },
});

const emit = defineEmits<{
  (event: "update:modelValue", model: any): void;
}>();

const handleUpdateFieldMultiple = (
  value: any,
  field: FieldDefault | FieldSelection | FieldCustom,
  index: number,
) => {
  emit(
    "update:modelValue",
    Object.assign({}, props.modelValue, {
      [index]: Object.assign({}, props.modelValue[index], { [field.key]: value }),
    }),
  );
};

const handleUpdateFieldSingle = (
  value: any,
  field: FieldDefault | FieldSelection | FieldCustom,
) => {
  emit("update:modelValue", Object.assign({}, props.modelValue, { [field.key]: value }));
};

const handleAddValueSectionMultiple = () => {
  const newModelValue = _cloneDeep(props.modelValue) as Array<any>;
  const sectionModel = props.section.fields.reduce(
    (a, b) => Object.assign({}, a, { [b.key]: null }),
    {},
  );
  newModelValue.push(sectionModel);
  emit("update:modelValue", newModelValue);
};

const handleRemoveValueSectionMultiple = (index: number) => {
  const newModelValue = _cloneDeep(props.modelValue) as Array<any>;
  newModelValue.splice(index, 1);
  emit("update:modelValue", newModelValue);
};

const currentTheme = inject(themeInjectionKey);

const VNodeBtnAddSection = defineComponent({
  name: "BtnAddSection",
  setup: () => () =>
    currentTheme.value?.vNodeComponents?.addSection
      ? h(currentTheme.value?.vNodeComponents?.addSection)
      : h("button", () => "Add section"),
});

const VNodeBtnRemoveSection = defineComponent({
  name: "BtnRemoveSection",
  setup: () => () =>
    currentTheme.value?.vNodeComponents?.removeSection
      ? h(currentTheme.value?.vNodeComponents?.removeSection)
      : h("button", () => "Remove section"),
});
</script>

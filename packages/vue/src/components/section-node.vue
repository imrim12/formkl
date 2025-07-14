<template>
  <div v-if="section" class="formkl-section__wrapper">
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
          :model-value="(modelValue as Record<string, any>)?.[field.key]"
          @update:model-value="handleUpdateFieldSingle($event, field)"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FieldCustom, FieldDefault, FieldSelection, Formkl, Section } from "@formkl/shared";
import { cloneDeep as _cloneDeep } from 'es-toolkit/compat'
import FieldNode from "./field-node.vue";
import { themeInjectionKey } from "../keys/theme";

const props = defineProps<{
  form?: Formkl;
  section?: Section;
}>();

const modelValue = defineModel<Record<string, any> | Array<any>>({ default: () => ({}) });

const handleUpdateFieldMultiple = (
  value: any,
  field: FieldDefault | FieldSelection | FieldCustom,
  index: number,
) => {
  const currentValue = { ...modelValue.value as Record<string, any> };
  currentValue[index] = { ...currentValue[index], [field.key]: value };
  modelValue.value = currentValue;
};

const handleUpdateFieldSingle = (
  value: any,
  field: FieldDefault | FieldSelection | FieldCustom,
) => {
  modelValue.value = { ...modelValue.value as Record<string, any>, [field.key]: value };
};

const handleAddValueSectionMultiple = () => {
  if (props.section) {
    const newModelValue = _cloneDeep(modelValue.value) as Array<any>;
    const sectionModel = props.section.fields.reduce(
      (a, b) => ({ ...a, [b.key]: null }),
      {},
    );
    newModelValue.push(sectionModel);
    modelValue.value = newModelValue;
  }
};

const handleRemoveValueSectionMultiple = (index: number) => {
  const newModelValue = _cloneDeep(modelValue.value) as Array<any>;
  newModelValue.splice(index, 1);
  modelValue.value = newModelValue;
};

const currentTheme = inject(themeInjectionKey);

if (!currentTheme) {
  throw new Error("[formkl] Theme is not provided. Please make sure to install the Formkl plugin with a theme.");
}

const VNodeBtnAddSection = defineComponent({
  name: "BtnAddSection",
  setup: () => () =>
    toValue(currentTheme).vNodeComponents?.addSection
      ? h(toValue(currentTheme).vNodeComponents?.addSection)
      : h("button", () => "Add section"),
});

const VNodeBtnRemoveSection = defineComponent({
  name: "BtnRemoveSection",
  setup: () => () =>
    toValue(currentTheme).vNodeComponents?.removeSection
      ? h(toValue(currentTheme).vNodeComponents?.removeSection)
      : h("button", () => "Remove section"),
});
</script>

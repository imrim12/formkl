<template>
  <div class="formkl-section__wrapper">
    <p v-if="section.title" class="formkl-section__title">{{ section.title }}</p>
    <div class="formkl-section__container">
      <template v-for="field in section.fields">
        <template v-if="section.multiple">
          <template v-for="(modelValueEach, index) in modelValue" :key="field.key + '-' + index">
            <FieldNode
              :section="section"
              :field="field"
              :model-value="modelValueEach[field.key]"
              @update:model-value="handleUpdateFieldMultiple($event, field, index)"
            />
          </template>
        </template>
        <template v-else>
          <FieldNode
            :key="field.key"
            :section="section"
            :field="field"
            :model-value="modelValue?.[field.key]"
            @update:model-value="handleUpdateFieldSingle($event, field)"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import {
  FieldCustom,
  FieldDefault,
  FieldSelection,
  Formkl,
  SchemaFlat,
  SchemaFlatSectionMultiple,
  Section,
} from "@formkl/shared";

import FieldNode from "./field-node.vue";

const props = defineProps({
  form: Object as PropType<Formkl>,
  section: Object as PropType<Section>,
  modelValue: {
    type: [Object, Array] as PropType<SchemaFlat["section"] | SchemaFlatSectionMultiple["section"]>,
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
</script>

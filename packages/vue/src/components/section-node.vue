<script lang="ts" setup>
import type { FieldCustom, FieldDefault, FieldSelection, Formkl, Section } from '@formkl/shared'
import { cloneDeep as _cloneDeep } from 'es-toolkit/compat'
import { themeInjectionKey } from '../keys/theme'
import FieldNode from './field-node.vue'

const props = defineProps<{
  form?: Formkl
  section?: Section
}>()

const modelValue = defineModel<Record<string, any> | Array<any>>({ default: () => ({}) })

function handleUpdateFieldMultiple(value: any, field: FieldDefault | FieldSelection | FieldCustom, index: number) {
  const currentValue = _cloneDeep(modelValue.value) as Array<any>
  if (!currentValue[index]) {
    currentValue[index] = {}
  }
  currentValue[index][field.key] = value
  modelValue.value = currentValue
}

function handleUpdateFieldSingle(value: any, field: FieldDefault | FieldSelection | FieldCustom) {
  modelValue.value = { ...modelValue.value as Record<string, any>, [field.key]: value }
}

function handleAddValueSectionMultiple() {
  if (props.section) {
    // Ensure we have an array to work with
    const currentValue = modelValue.value
    const newModelValue = Array.isArray(currentValue)
      ? _cloneDeep(currentValue)
      : []

    const sectionModel = props.section.fields.reduce(
      (a, b) => ({ ...a, [b.key]: null }),
      {},
    )
    newModelValue.push(sectionModel)
    modelValue.value = newModelValue
  }
}

function handleRemoveValueSectionMultiple(index: number) {
  const newModelValue = _cloneDeep(modelValue.value) as Array<any>
  newModelValue.splice(index, 1)
  modelValue.value = newModelValue
}

const currentTheme = inject(themeInjectionKey)

if (!currentTheme) {
  throw new Error('[formkl] Theme is not provided. Please make sure to install the Formkl plugin with a theme.')
}

const VNodeBtnAddSection = computed(() =>
  toValue(currentTheme).vNodeComponents?.addSection || 'button',
)

const VNodeBtnRemoveSection = computed(() =>
  toValue(currentTheme).vNodeComponents?.removeSection || 'button',
)
</script>

<template>
  <div v-if="section" class="formkl-section__wrapper">
    <p v-if="section.title" class="formkl-section__title">
      {{ section.title }}
    </p>
    <div class="formkl-section__container">
      <template v-for="field in section.fields" :key="field.key">
        <template v-if="section.multiple">
          <div
            v-for="(modelValueEach, index) in (modelValue as Array<any>)"
            :key="`${field.key}-${index}`"
            class="formkl-section__inner"
          >
            <FieldNode
              :path="section.key ? `${section.key}.${index}.${field.key}` : field.key"
              :section="section"
              :field="field"
              :model-value="modelValueEach[field.key]"
              @update:model-value="handleUpdateFieldMultiple($event, field, index)"
            />
            <div class="formkl-section__remover">
              <component
                :is="VNodeBtnRemoveSection"
                v-if="modelValue.length > 1"
                @click="handleRemoveValueSectionMultiple(index)"
              >
                Remove section
              </component>
            </div>
          </div>
          <div class="formkl-section__footer">
            <component :is="VNodeBtnAddSection" @click="handleAddValueSectionMultiple">
              Add section
            </component>
          </div>
        </template>
        <FieldNode
          v-else
          :key="field.key"
          :path="section.key ? `${section.key}.${field.key}` : field.key"
          :section="section"
          :field="field"
          :model-value="(modelValue as Record<string, any>)?.[field.key]"
          @update:model-value="handleUpdateFieldSingle($event, field)"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FieldCustom, FieldDefault, FieldSelection, Formkl, Section } from '@formkl/shared'
import { cloneDeep as _cloneDeep, omit as _omit, set as _set } from 'es-toolkit/compat'
import { themeInjectionKey } from '../keys/theme'

const props = defineProps<{
  path: string
  form?: Formkl
  section?: Section
  field?: FieldDefault | FieldSelection | FieldCustom
}>()

const modelValue = defineModel<any>({ default: null })

function handleUpdateFieldMultiple(value: any, index: number) {
  const currentValue = _cloneDeep(modelValue.value) as Array<any>
  _set(currentValue, String(index), value)
  modelValue.value = currentValue
}

function handleUpdateFieldSingle(value: any) {
  modelValue.value = value
}

function handleAddValueFieldMultiple() {
  const currentValue = _cloneDeep(modelValue.value) as Array<any>
  currentValue.push(null)
  modelValue.value = currentValue
}

function handleRemoveValueFieldMultiple(index: number) {
  const currentValue = _cloneDeep(modelValue.value) as Array<any>
  currentValue.splice(index, 1)
  modelValue.value = currentValue
}

const currentTheme = inject(themeInjectionKey)

if (!currentTheme) {
  throw new Error('[formkl] Theme is not provided. Please make sure to install the Formkl plugin with a theme.')
}

const VNodeFieldWrapper = computed(() => toValue(currentTheme).vNodeFieldWrapper || 'div')

const VNodeField = computed(() => toValue(currentTheme).vNodeFields?.[props.field?.type || ''] || 'div')

const VNodeBtnAddField = computed(() =>
  toValue(currentTheme).vNodeComponents?.addField || 'button',
)

const VNodeBtnRemoveField = computed(() =>
  toValue(currentTheme).vNodeComponents?.removeField || 'button',
)
</script>

<template>
  <div v-if="field" class="formkl-field__wrapper">
    <p v-if="field.label" class="formkl-field__title">
      {{ field.label }}
    </p>
    <div class="formkl-field__container">
      <template v-if="field.multiple">
        <component
          :is="VNodeFieldWrapper"
          v-for="(modelValueEach, index) in modelValue"
          :key="index"
          :required="field.required"
          :prop="`${path}.${index}`"
          class="formkl-field__inner"
        >
          <component
            :is="VNodeField"
            v-bind="_omit(field, ['required'])"
            :model-value="modelValueEach"
            @update:model-value="handleUpdateFieldMultiple($event, index)"
          />
          <div class="formkl-field__remover">
            <component
              :is="VNodeBtnRemoveField"
              v-if="modelValue.length > 1"
              @click="handleRemoveValueFieldMultiple(index)"
            >
              Remove field
            </component>
          </div>
        </component>
        <div class="formkl-field__footer">
          <component :is="VNodeBtnAddField" @click="handleAddValueFieldMultiple">
            Add field
          </component>
        </div>
      </template>
      <component :is="VNodeFieldWrapper" v-else :prop="path" :required="field.required">
        <component
          :is="VNodeField"
          v-bind="_omit(field, ['required'])"
          :model-value="modelValue"
          @update:model-value="handleUpdateFieldSingle"
        />
      </component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Formkl, Schema } from '@formkl/shared'
import FormParser from 'formkl'
import FormNode from './components/form-node.vue'
import { themeInjectionKey } from './keys/theme'
import LayoutDefault from './layouts/default.vue'

defineOptions({
  name: 'Formkl',
})

const props = defineProps<{
  syntax?: string
  form?: Formkl
}>()

const modelValue = defineModel<Schema>({ default: () => ({}) })

const currentTheme = inject(themeInjectionKey)

if (!currentTheme) {
  throw new Error('[formkl] Theme is not provided. Please make sure to install the Formkl plugin with a theme.')
}

const formComputed = computed<Formkl | null | undefined>(() => {
  if (props.syntax) {
    try {
      return FormParser.parse(props.syntax)
    }
    catch (error) {
      console.error(error)
      return null
    }
  }
  return props.form
})

const attrs = useAttrs()

// Attributes that start in "on"
const listerers$ = computed(() => {
  const listeners: any = {}
  Object.keys(attrs).forEach((key) => {
    if (key.startsWith('on')) {
      listeners[key] = attrs[key]
    }
  })
  return listeners
})

function _buildSchema() {
  const schema: any = {}
  formComputed.value?.sections.forEach((section) => {
    section.fields.forEach((field) => {
      if (section.key) {
        if (section.multiple) {
          // For multiple sections, create an array directly
          if (!schema[section.key]) {
            schema[section.key] = []
          }
          schema[section.key].push({
            [field.key]: field.multiple ? [null] : null,
          })
        }
        else if (field.multiple) {
          // For multiple fields, ensure we have the section object first
          if (!schema[section.key]) {
            schema[section.key] = {}
          }
          schema[section.key][field.key] = [null]
        }
        else {
          // For single field and section
          if (!schema[section.key]) {
            schema[section.key] = {}
          }
          schema[section.key][field.key] = null
        }
      }
    })
  })
  modelValue.value = schema
}

_buildSchema()

const VNodeLayout = computed(() => toValue(currentTheme).vNodeLayout || LayoutDefault)

const VNodeFormWrapper = computed(() => toValue(currentTheme).VNodeFormWrapper || 'form')

onMounted(() => {
  if (!props.syntax && !props.form) {
    throw new Error('Either syntax or form is required')
  }
})
</script>

<template>
  <component :is="VNodeFormWrapper" class="formkl__wrapper" v-on="listerers$">
    <component :is="VNodeLayout" v-if="formComputed" v-bind="{ form: formComputed }">
      <FormNode
        v-model="modelValue"
        :form="formComputed"
      />
    </component>
    <div v-else class="formkl__error">
      Failed to load form
    </div>
  </component>
</template>

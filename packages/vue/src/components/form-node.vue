<script lang="ts" setup>
import type { Formkl, Schema } from '@formkl/shared'
import SectionNode from './section-node.vue'

defineProps<{
  form: Formkl
}>()

const modelValue = defineModel<Schema>({ required: true })

function handleUpdateSection(value: any, section: any) {
  modelValue.value = { ...modelValue.value, [section.key]: value }
}
</script>

<template>
  <div class="formkl-form__wrapper">
    <div class="formkl-form__container">
      <template
        v-for="section in form.sections"
        :key="section.key"
      >
        <SectionNode
          v-if="section.key"
          :form="form"
          :section="section"
          :model-value="modelValue?.[section.key]"
          @update:model-value="handleUpdateSection($event, section)"
        />
      </template>
    </div>
  </div>
</template>

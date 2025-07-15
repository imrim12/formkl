<script lang="ts" setup>
import { ElButton } from 'element-plus'

import FormParser from 'formkl'
// TODO: Pending https://github.com/microsoft/TypeScript/pull/51435
// @ts-expect-error: ExampleForm uses non-standard export until TypeScript PR 51435 is merged
import ExampleForm from './example.form'

const formklSyntax = ref(FormParser.stringify(ExampleForm))

const exampleModel = ref({})

const formklTemplate = useTemplateRef('formklRef')

function handleSubmit() {
  if (formklTemplate.value) {
    const formkl = formklTemplate.value as any

    formkl.formRef.validate()
  }
}

function onSubmit() {
  console.log('Form submitted with model:', exampleModel.value)
}
</script>

<template>
  <div class="flex w-full justify-between">
    <div class="flex-1">
      <formkl-editor v-model="formklSyntax" />
    </div>
    <div class="flex-1 py-2 px-8">
      <formkl
        ref="formklRef"
        v-model="exampleModel"
        :syntax="formklSyntax"
        :model="exampleModel"
        @submit="onSubmit"
      >
        <div>
          <ElButton native-type="submit" @click="handleSubmit">
            Submit
          </ElButton>
        </div>
      </formkl>
    </div>
  </div>
</template>

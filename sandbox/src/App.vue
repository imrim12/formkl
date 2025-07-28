<script lang="ts" setup>
import { FormKitSchema } from '@formkit/vue'

// TODO: Pending https://github.com/microsoft/TypeScript/pull/51435
// @ts-expect-error: ExampleForm uses non-standard export until TypeScript PR 51435 is merged
import exampleForm from './example.form'
import rawExampleForm from './example.form?raw'

const formklSyntax = ref(rawExampleForm)

function handleSubmit(data: any) {
  // eslint-disable-next-line no-console
  console.log('Form submitted with data:', data)
}
</script>

<template>
  <div class="flex w-full justify-between">
    <div class="flex-1">
      <formkl-editor v-model="formklSyntax" />

      <pre class="text-sm">{{ JSON.stringify(exampleForm, null, 2) }}</pre>
    </div>
    <div class="flex-1 py-2 px-8">
      <FormKitSchema
        :schema="exampleForm"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>

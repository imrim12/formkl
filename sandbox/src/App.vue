<script lang="ts" setup>
import { FormKitSchema } from '@formkit/vue'

// TODO: Pending https://github.com/microsoft/TypeScript/pull/51435
// @ts-expect-error: ExampleForm uses non-standard export until TypeScript PR 51435 is merged
import exampleForm from './example.form'
import rawExampleForm from './example.form?raw'

const formklSyntax = ref(rawExampleForm)
</script>

<template>
  <div class="flex w-full justify-between">
    <div class="flex-1">
      <formkl-editor v-model="formklSyntax" />
    </div>
    <div class="flex-1 py-2 px-8">
      <FormKitSchema
        :schema="exampleForm"
      />
    </div>
  </div>
</template>

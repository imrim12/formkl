<script lang="ts" setup>
import type { Formkl } from '@formkl/shared'

defineOptions({
  name: 'FormLayoutNode',
})

defineProps<{
  form?: Formkl
}>()
</script>

<template>
  <div class="formkl-layout__wrapper">
    <p v-if="form?.title" class="formkl-layout__title">
      {{ form.title }}
    </p>
    <p v-if="form?.description" class="formkl-layout__description">
      {{ form.description }}
    </p>
    <div class="formkl-layout__container">
      <slot />
    </div>
  </div>
</template>

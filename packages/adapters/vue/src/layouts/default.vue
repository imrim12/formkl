<template>
  <div class="formkl-layout__wrapper">
    <p v-if="form.title" class="formkl-layout__title">{{ form.title }}</p>
    <p v-if="form.description" class="formkl-layout__description">{{ form.description }}</p>
    <div class="formkl-layout__container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormLayoutNode",
};
</script>

<script lang="ts" setup>
import { PropType } from "vue";
import { Formkl } from "@formkl/shared";

defineProps({
  form: {
    type: Object as PropType<Formkl>,
    required: false,
  },
});
</script>

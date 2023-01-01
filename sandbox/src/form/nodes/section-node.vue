<template>
  <div class="formkl-section__wrapper">
    <p v-if="section.title" class="formkl-section__title">{{ section.title }}</p>
    <div class="formkl-section__container">
      <FieldNode v-for="field in section.fields" :section="section" :field="field" :model="model" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Formkl, Section } from "@formkl/shared";

import FieldNode from "./field-node.vue";

const props = defineProps({
  form: Object as PropType<Formkl>,
  section: Object as PropType<Section>,
  model: {
    type: Object,
    required: true,
  },
});
</script>

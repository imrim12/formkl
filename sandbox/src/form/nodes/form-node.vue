<template>
  <div class="formkl-form__wrapper">
    <div class="formkl-form__container">
      <SectionNode
        v-for="section in form.sections"
        :form="form"
        :section="section"
        :model="model"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Formkl } from "@formkl/shared";

import SectionNode from "./section-node.vue";

const props = defineProps({
  form: Object as PropType<Formkl>,
  model: {
    type: Object,
    required: true,
  },
});
</script>

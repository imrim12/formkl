<template>
  <div class="flex w-full justify-between">
    <div class="flex-1">
      <formkl-editor v-model="formklSyntax" />
    </div>
    <div class="flex-1 py-2 px-8">
      <div class="text-lg text-gray-500 font-bold">From bundled file</div>
      <formkl v-model="exampleModel" :form="exampleForm" />
      <div class="text-lg text-gray-500 font-bold">From editor</div>
      <formkl v-model="exampleModel" :syntax="formklSyntax" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FormParser from "formkl";

// TODO: Pending https://github.com/microsoft/TypeScript/pull/51435
// @ts-ignore
import ExampleForm from "./example.form";

export default defineComponent({
  setup() {
    const formklSyntax = ref(FormParser.stringify(ExampleForm));

    const exampleModel = ref({});

    return {
      formklSyntax,
      exampleForm: ExampleForm,
      exampleModel,
    };
  },
});
</script>

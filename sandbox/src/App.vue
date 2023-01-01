<template>
  <div class="flex w-full justify-between">
    <div class="flex-1">
      <formkl-editor v-model="formklSyntax" />
    </div>
    <div class="flex-1 py-2 px-8">
      <!-- <Formkl ref="formklRef" :formkl="formklSyntax" /> -->
      <div class="text-lg text-gray-500 font-bold">From bundled file</div>
      <Form v-model="exampleModel" :form="exampleForm" />
      <div class="text-lg text-gray-500 font-bold">From editor</div>
      <Form v-model="exampleModel" :syntax="formklSyntax" />
    </div>
  </div>
</template>

<script lang="ts">
import { Formkl } from "@formkl/vue";
import { defineComponent } from "vue";

import Form from "./form/main.vue";

import FormParser from "formkl";

// TODO: Pending https://github.com/microsoft/TypeScript/pull/51435
// @ts-ignore
import ExampleForm from "./example.form";

export default defineComponent({
  components: {
    Formkl,
    Form,
  },
  setup() {
    const formklRef = ref();
    const formklSyntax = ref(FormParser.stringify(ExampleForm));

    const submit = () => {
      formklRef.value?.submit$();
    };

    const exampleModel = ref({});

    return {
      formklRef,
      formklSyntax,
      submit,
      exampleForm: ExampleForm,
      exampleModel,
    };
  },
});
</script>

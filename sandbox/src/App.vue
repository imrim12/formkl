<template>
  <div class="flex w-full justify-between">
    <div class="flex-1">
      <formkl-editor v-model="formklSyntax" />
    </div>
    <div class="flex-1 py-2 px-8">
      <Formkl ref="formklRef" :formkl="formklSyntax" />
    </div>
  </div>
</template>

<script lang="ts">
import { Formkl } from "@formkl/vue";
import { defineComponent } from "vue";

import FormParser from "formkl";

// TODO: Pending https://github.com/microsoft/TypeScript/pull/51435
// @ts-ignore
import ExampleForm from "./example.form";

export default defineComponent({
  components: {
    Formkl,
  },
  setup() {
    const formklRef = ref();
    const formklSyntax = ref(FormParser.stringify(ExampleForm));

    const submit = () => {
      formklRef.value?.submit$();
    };

    return {
      formklRef,
      formklSyntax,
      submit,
    };
  },
});
</script>

<template>
  <div>
    <div>
      <FormklEditor v-model="formklSyntax" />
    </div>
    <div>
      <Formkl :formkl="formklSyntax" />
    </div>
  </div>
</template>

<script lang="ts">
import { Formkl } from "@formkl/vue";
import { FormklEditor } from "@formkl/editor";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    Formkl,
    FormklEditor,
  },
  setup() {
    const formklSyntax = ref("");

    return {
      formklSyntax,
    };
  },
});
</script>

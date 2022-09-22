<template>
  <FormklEditor v-model="something" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { FormklEditor } from "../../src";

export default defineComponent({
  name: "App",
  components: { FormklEditor },
  setup() {
    const something = ref("");

    onMounted(() => {
      setTimeout(() => {
        something.value = `// Start writing your formkl
formkl "Form title" {
  "Personal Information" includes {
    "Fullname" text;
    "Gender" radio ("Male","Female","Other");
  }
}`;
      }, 1000);
    });

    return { something };
  },
});
</script>

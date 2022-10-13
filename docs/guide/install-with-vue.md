# Quick start with Vue 3

This guide will walk you through the process of creating a simple form using `formkl` in your Vue 3 project.

## Demo

You can visit the playground here: https://formkl.vercel.app/

## Instalation

To begin, install the `formkl` adapter as a dependency in your project:

```cmd
npm i @formkl/vue
```

or with yarn

```cmd
yarn add @formkl/vue
```

or with pnpm

```cmd
pnpm add @formkl/vue
```

⚡️ That's all! You're ready to start building forms.

## Basic Usage

Use the `Formkl` adapter component to digest the formkl syntax and render the form.

This is an example `MyFormPage.vue` file that uses the `Formkl` component.

```html
<template>
  <Formkl ref="formklRef" :formkl="formklSyntax" />
  <!-- Use with Element Plus el-button -->
  <el-button type="primary" @click="submit">
    Submit
  </el-button>
</template>

<script>
  import { defineComponent, ref } from "vue";
  import { Formkl } from "@formkl/vue";

  export default defineComponent({
    name: "MyFormPage",
    components: { Formkl },
    setup() {
      const formklRef = ref();
      const formklSyntax = ref(`
        formkl post("https://yoursite.com/api/personal-info") {
          "Personal information" includes {
            "Full name" text;
            "Age" number;
          }
        }
      `);

      const submit = () => {
        formklRef.value?.submit();
      };

      return {
        formklRef,
        formklSyntax,
        formklOptions,
        submit,
      };
    },
  });
</script>
```

::: info Don't know the syntax in this example?
You'll learn about the syntax in the [Syntax guide](/guide/syntax).
:::

# Quick start with Vue 3

This guide will walk you through the process of creating a simple form using `formkl` in your Vue 3 project.

## Demo

You can visit the playground here: https://sandbox.formkl.org/

## Instalation

To begin, install the `formkl` adapter as a dependency in your project:

Use your favorite package manager to install the packages, like `npm`, `yarn`, or `pnpm`

```cmd
pnpm add @formkl/vue @formkl/elemento
pnpm add -D @formkl/plugin-vite
```

### Setup loader

Setup `.form` file loader for your bundler ([Vite](https://vitejs.dev)/[Webpack](https://webpack.js.org/)) so you can import `.form` files directly in Vue file or JavaScript module.

You can checkout the installation guide for [Vite](/installation/vite) or [Webpack](/installation/webpack).

```typescript
// vite.config.ts
import FormklPlugin from "@formkl/plugin-vite";

export default {
  plugins: [
    // Your other plugins
    FormklPlugin(),
  ],
};
```

### Setup plugin

Setup `@formkl/vue` using the default theme `@formkl/elemento` or your own theme

```typescript
// main.ts
import { createApp } from "vue";
import FormklPlugin from "@formkl/vue";
import formklTheme from "@formkl/elemento";
import App from "./App.vue";

import "./style.css";

createApp(App)
  .use(FormklPlugin, {
    theme: formklTheme,
  })
  .mount("#app");

```

```css
/* style.css */
@import url(@formkl/elemento);
```

⚡️ That's all! You're ready to start building forms.

## Basic Usage

Use the `Formkl` component to render the form.

```text
// example.form
formkl {
  "Personal Information" has {
    "Fullname" text;
    "Bio" paragraph;
  }
}
```

```html
<!-- YourForm.vue -->
<template>
  <formkl v-model="exampleModel" :form="ExampleForm" />
</template>

<script lang="ts">
import ExampleForm from "./example.form";

export default {
  setup() {
    const exampleModel = ref({});

    return {
      ExampleForm,
      exampleModel,
    };
  },
};
</script>
```

Result:

<div>
  <formkl syntax="formkl {'Personal Information' has {'Fullname' text;'Bio' paragraph;}}"></formkl>
</div>

::: info Don't know the syntax in this example?
You'll learn about the syntax in the [Syntax guide](/syntax/form).
:::

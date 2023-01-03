# Quick start with Vite

`@formkl/plugin-vite` allows you to load `.form` files directly in your Vite project. Which also mean you can use it with your Vue, React or any other framework as long as it uses Vite as bundler.

Checkout guides for frameworks:
- [Vue 3](/adapters/vue)
- [React](/adapters/react)
- [Svelte](/adapters/svelte)

## Configuration

```js
// vite.config.js
import FormklPlugin from "@formkl/plugin-vite";
import path from "path";

export default {
  plugins: [
    FormklPlugin({
      // dts: {
      //   dir: path.resolve("./");
      // }
    }),
  ],
};
```

## Usage

```js
// In your project files app.vue, app.jsx, app.tsx, etc.
import LoginForm from "./login.form";

// Login form is only a raw Formkl instance
// You have to display it in your app by your own code
// or use the Formkl Adapters that support Vue, React, Svelte, etc.
```
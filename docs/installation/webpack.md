# Quick start with Webpack

`@formkl/plugin-webpack` allows you to load .form files directly in your Webpack project. Which also mean you can use it with your Vue, React or any other framework as long as it uses Webpack as bundler.

## Configuration

```js
// webpack.config.js
import { FormklWebpackPlugin } from "@formkl/plugin-webpack";
import path from "path";

export default {
  plugins: [
    // Custom functionality
    new FormklWebpackPlugin({
      // dts: {
      //   dir: path.resolve("./");
      // }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.form$/,
        use: ["@formkl/plugin-webpack"], // File loader
      },
    ],
  },
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
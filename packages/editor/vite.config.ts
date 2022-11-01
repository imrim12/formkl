import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name: "@formkl/editor",
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es"], // adding 'umd' requires globals set to every external module
      fileName: (format: string) => `index.${format}.js`,
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: [
        "@codemirror/autocomplete",
        "@codemirror/commands",
        "@codemirror/lint",
        "@codemirror/state",
        "@codemirror/view",
        "codemirror",
        "formkl",
      ], // not every external has a global
    },
  },
});

import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "@formkl/shared",
      formats: ["es"], // adding 'umd' requires globals set to every external module
      fileName: (format) => `index.${format}.js`,
    },
  },
});

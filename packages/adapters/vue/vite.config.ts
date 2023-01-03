import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name: "@formkl/vue",
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format: string) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue", "element-plus", "lodash", "formkl"],
      output: {
        exports: "named",
        globals: {},
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      root: ".",
      entryRoot: "./src",
      outputDir: "./dist/types",
    }),
  ],
});

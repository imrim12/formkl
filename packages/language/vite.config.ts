import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name: "formkl",
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es", "cjs"],

      fileName: (format: string) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: ["@formkl/shared"],

      output: {
        exports: "named",
        globals: {},
      },
    },
  },
  // https://github.com/vitejs/vite/issues/7843
  plugins: [
    dts({
      root: ".",
      entryRoot: "./src",
      outputDir: "./dist/types",
    }),
  ],
});

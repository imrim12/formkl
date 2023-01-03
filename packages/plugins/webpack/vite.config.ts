import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name: "@formkl/plugin-webpack",
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format: string) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: ["formkl", "fs", "path"],
      output: {
        exports: "named",
        globals: {},
      },
    },
  },
  plugins: [
    dts({
      root: ".",
      entryRoot: "./src",
      outputDir: "./dist/types",
    }),
  ],
});

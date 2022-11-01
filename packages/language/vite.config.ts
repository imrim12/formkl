import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "formkl",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["slugify", "formkl", "@formkl/shared"],
      output: {
        exports: "named",
        globals: {},
      },
    },
  },
});

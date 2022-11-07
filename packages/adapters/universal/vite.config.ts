import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    // jsxInject: "" // Can be used with unplugin-auto-import instead
  },
  build: {
    emptyOutDir: false,
    lib: {
      name: "@formkl/adapter",
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es"], // adding 'umd' requires globals set to every external module
      fileName: (format: string) => `index.${format}.js`,
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: ["lodash", "formkl"], // not every external has a global
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps (not useful if 'umd' is not in lib.formats)
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

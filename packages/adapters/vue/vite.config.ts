import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      name: '@formkl/vue',
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es'], // adding 'umd' requires globals set to every external module
      fileName: (format: string) => `index.${format}.js`,
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: ['vue', 'element-plus', 'lodash', 'formkl'], // not every external has a global
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps (not useful if 'umd' is not in lib.formats)
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: false, // to retain the types folder generated by tsc
  },
  plugins: [vue()], // to process SFC
});
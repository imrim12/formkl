import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name: '@formkl/vue',
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format: string) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
    },
    rollupOptions: {
      external: ['vue', 'element-plus', 'es-toolkit', 'formkl'],
      output: {
        exports: 'named',
        globals: {},
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      root: '.',
      entryRoot: './src',
      outDir: './dist/types',
    }),
    autoImport({
      imports: ['vue'],
    }),
  ],
})

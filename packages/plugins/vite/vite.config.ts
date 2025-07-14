import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name: '@formkl/plugin-vite',
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format: string) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
    },
    rollupOptions: {
      external: ['formkl', 'fs', 'path'],
      output: {
        exports: 'named',
        globals: {},
      },
    },
  },
  plugins: [
    dts({
      root: '.',
      entryRoot: './src',
      outDir: './dist/types',
    }),
  ],
})

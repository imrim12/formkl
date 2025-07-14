import formkl from '@formkl/plugin-vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    formkl(),
    autoImport({
      imports: ['vue'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

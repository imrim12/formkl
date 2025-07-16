import FormklPlugin from '@formkl/plugin-vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unoCSS from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    autoImport({
      imports: ['vue'],
    }),
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag => ['formkl-editor'].includes(tag),
        },
      },
    }),
    vueJsx(),
    unoCSS(),
    FormklPlugin({
      formkit: true,
    }),
  ],
})

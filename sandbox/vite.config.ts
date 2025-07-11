import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from 'unocss/vite'
import FormklPlugin from "@formkl/plugin-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vue"],
    }),
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => ["formkl-editor"].includes(tag),
        },
      },
    }),
    vueJsx(),
    UnoCSS(),
    FormklPlugin(),
  ],
});

import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import WindiCSS from "vite-plugin-windicss";
import FormklPlugin from "@formkl/plugin-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        {
          vue: [
            "ref", // import { ref } from 'vue',
            "h", // import { h } from 'vue',
            "Fragment", // import { Fragment } from 'vue',
          ],
        },
      ],
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
    WindiCSS(),
    FormklPlugin(),
  ],
});

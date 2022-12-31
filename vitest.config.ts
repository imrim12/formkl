import { defineConfig } from "vitest/config";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import formkl from "@formkl/plugin-vite";

export default defineConfig({
  plugins: [vue(), vueJsx(), formkl()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});

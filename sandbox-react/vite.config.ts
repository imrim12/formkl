import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        {
          react: [
            ["createElement", "h"], // import { createElement as h } from 'react',
            "Fragment", // import { Fragment } from 'react',
          ],
        },
      ],
    }),
    react(),
    WindiCSS(),
  ],
});

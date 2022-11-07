import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  darkMode: "class",
  safelist: "",
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [formsPlugin],
});

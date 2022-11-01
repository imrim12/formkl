/// <reference types="vite/client" />
import type { FieldDefault, FieldSelection } from "formkl";

declare module "*.tsx" {
  import { DefineComponent } from "vue-demi";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

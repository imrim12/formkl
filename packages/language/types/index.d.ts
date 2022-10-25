import { Formkl } from "@formkl/shared";

declare module "formkl" {
  export const parse: (str: string) => Formkl;
}

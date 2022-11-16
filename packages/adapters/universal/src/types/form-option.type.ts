import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";

export type FormOptions = {
  /**
   * The HTTP request instance
   */
  $http?: any;
  modelDefault?: SchemaBase | SchemaFlat;
  submitMethod?: (
    url: string,
    method: Formkl["method"],
    model: SchemaBase | SchemaFlat,
  ) => Promise<any>;
};

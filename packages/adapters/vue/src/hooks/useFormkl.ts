import { Formkl } from "formkl";
import { inject, Ref } from "vue";
import { SchemaBase, SchemaFlat } from "../core/Schema";

export const useFormkl = () => {
  const formkl = inject("formkl") as Formkl;
  const model = inject("model") as Ref<SchemaBase | SchemaFlat>;

  return {
    formkl,
    model,
  };
};

import { Formkl } from "formkl";
import { ComputedRef, inject, Ref } from "vue";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { injectionFormklKey } from "../keys/formkl";
import { injectionModelKey } from "../keys/model";

export const useFormkl = () => {
  const formkl = inject(injectionFormklKey) as ComputedRef<Formkl>;
  const model = inject(injectionModelKey) as Ref<SchemaBase | SchemaFlat>;

  return {
    formkl,
    model,
  };
};

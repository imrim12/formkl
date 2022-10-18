import { Formkl } from "formkl";
import { ComputedRef, inject, Ref } from "vue";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { formklInjectionKey } from "../keys/formkl";
import { modelInjectionKey } from "../keys/model";

export const useFormkl = () => {
  const formkl = inject(formklInjectionKey) as ComputedRef<Formkl>;
  const model = inject(modelInjectionKey) as ComputedRef<SchemaBase | SchemaFlat>;

  return {
    formkl,
    model,
  };
};

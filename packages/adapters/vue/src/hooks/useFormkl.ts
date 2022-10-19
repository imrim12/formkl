import { computed, inject, Ref, unref } from "vue-demi";
import { Form } from "../core/Form";
import { instanceInjectionKey } from "../keys/instance";

export const useFormkl = () => {
  const instance$ = inject(instanceInjectionKey) as Ref<Form>;

  const formkl = computed(() => instance$.value.formkl);
  const model = computed(() => unref(instance$.value.model));

  return {
    formkl,
    model,
  };
};

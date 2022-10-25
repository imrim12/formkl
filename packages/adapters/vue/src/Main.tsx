import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  PropType,
  provide,
  ref,
  watch,
} from "vue-demi";
import { httpInjectionKey, instanceInjectionKey, SchemaBase, SchemaFlat } from "@formkl/shared";
import { Form, FormOptions } from "./core/Form";
import { FormNode } from "./components/Form";

import FormklParser from "formkl";

import _debounce from "lodash/debounce";

export default defineComponent({
  name: "Formkl",
  props: {
    formkl: {
      type: String,
      required: true,
    },
    debounce: {
      type: Number,
      default: 100,
    },
    options: Object as PropType<FormOptions>,
  },
  emits: ["ready"],
  setup(props, { emit }) {
    const vm = getCurrentInstance()?.proxy;

    const formklRef = ref();

    provide(httpInjectionKey, props.options?.$http);

    const instance$ = ref<Form>();
    const error$ = ref<Error>();

    const _buildForm = () => {
      error$.value = undefined;
      instance$.value = undefined;

      try {
        const formkl = FormklParser.parse(props.formkl);

        instance$.value = new Form(formkl, props.options);
      } catch (err: any) {
        console.warn("[Formkl Adapter]: ", err);

        error$.value = err;
      }
    };
    _buildForm();
    watch(
      () => props.formkl,
      _debounce(function () {
        _buildForm();
      }, props.debounce),
    );

    const submit = (
      callbackSuccess?: (model: SchemaBase | SchemaFlat) => void,
      callbackError?: (error: any) => void,
      callbackFinally?: () => void,
    ) => {
      formklRef.value?.$refs.elFormRef?.validate((isValid: boolean) => {
        if (instance$.value && isValid) {
          instance$.value.submit.call(
            instance$.value,
            callbackSuccess,
            callbackError,
            callbackFinally,
          );
        }
      });
    };

    const reset = () => {
      formklRef.value?.$refs.elFormRef?.resetFields();
    };

    const fill = (fillModel: SchemaBase | SchemaFlat) => {
      instance$.value && instance$.value.fill.call(instance$.value, fillModel);
      vm?.$forceUpdate();
    };

    onMounted(() => {
      emit("ready", instance$.value);
    });

    provide(instanceInjectionKey, instance$);

    return {
      formklRef,
      instance$,
      error$,
      submit$: submit,
      reset$: reset,
      fill$: fill,
    };
  },
  render() {
    return this.instance$?.model ? (
      <FormNode ref="formklRef" />
    ) : (
      <div class="formkl-error__wrapper">
        {this.$slots?.error?.({ error: this.error$?.message }) || (
          <div class="formkl-error">{this.error$?.message}</div>
        )}
      </div>
    );
  },
});

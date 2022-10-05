import {
  computed,
  defineComponent,
  getCurrentInstance,
  onMounted,
  PropType,
  provide,
  ref,
} from "vue";
import { Form, FormOptions } from "./core/Form";
import { SchemaBase, SchemaFlat } from "./core/Schema";
import { FormNode } from "./components/Form";

import FormklParser from "formkl";

export default defineComponent({
  name: "Formkl",
  props: {
    formkl: {
      type: String,
      required: true,
    },
    debounce: {
      type: Number,
      default: 300,
    },
    options: Object as PropType<FormOptions>,
  },
  emits: ["ready"],
  setup(props, { emit }) {
    const vm = getCurrentInstance()?.proxy;

    const formklRef = ref();
    const elFormRef = ref();

    provide("$http", props.options?.$http);

    const form = computed<{
      instance: Form | null;
      error: Error | null;
    }>(() => {
      try {
        const instance: Form = new Form(FormklParser.parse(props.formkl), props.options);

        return {
          instance,
          error: null,
        };
      } catch (err: any) {
        console.warn("[Formkl Adapter]: ", err);

        return {
          instance: null,
          error: err,
        };
      }
    });

    const submit = (
      callbackSuccess?: (model: SchemaBase | SchemaFlat) => void,
      callbackError?: (error: any) => void,
      callbackFinally?: () => void,
    ) => {
      formklRef.value?.$refs.elFormRef?.validate((isValid: boolean) => {
        if (form.value && isValid) {
          form.value.instance?.submit.call(
            form.value,
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
      form.value.instance && form.value.instance.fill.call(form.value, fillModel);
      vm?.$forceUpdate();
    };

    const getForm = () => {
      return form.value.instance;
    };

    onMounted(() => {
      emit("ready", form.value.instance);
    });

    return {
      formklRef,
      elFormRef,
      form,
      submit,
      reset,
      fill,
      getForm,
    };
  },
  render() {
    return this.form.instance ? (
      <FormNode
        ref="formklRef"
        formkl={this.form.instance.formkl}
        model={this.form.instance.model}
      />
    ) : (
      <div class="formkl-error__wrapper">
        {this.$slots?.error?.({ error: this.form.error?.message }) || (
          <div class="formkl-error">{this.form.error?.message}</div>
        )}
      </div>
    );
  },
});

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  PropType,
  provide,
  ref,
} from "vue";
import { Form, FormOptions } from "./core/Form";

import FormklParser from "formkl";
import { SchemaBase, SchemaFlat } from "./core/Schema";

export default defineComponent({
  name: "Formkl",
  props: {
    formkl: {
      type: String,
      required: true,
    },
    options: Object as PropType<FormOptions>,
  },
  emits: ["ready"],
  setup(props, { emit }) {
    const vm = getCurrentInstance()?.proxy;

    const formklRef = ref();

    provide("$http", props.options?.$http);

    const form = computed(() => {
      try {
        return props.formkl ? new Form(FormklParser.parse(props.formkl), props.options) : null;
      } catch (err) {
        console.warn("[Formkl Adapter]: ", err);

        return null;
      }
    });

    const submit = (
      callbackSuccess?: (model: SchemaBase | SchemaFlat) => void,
      callbackError?: (error: any) => void,
      callbackFinally?: () => void,
    ) => {
      formklRef.value.validate((isValid: boolean) => {
        if (form.value && isValid) {
          form.value.submit.call(form.value, callbackSuccess, callbackError, callbackFinally);
        }
      });
    };

    const reset = () => {
      formklRef.value.resetFields();
    };

    const fill = (fillModel: SchemaBase | SchemaFlat) => {
      form.value && form.value.fill.call(form.value, fillModel);
      vm?.$forceUpdate();
    };

    const getForm = () => {
      return form.value;
    };

    onMounted(() => {
      emit("ready", form.value);
    });

    return {
      formklRef,
      form,
      submit,
      reset,
      fill,
      getForm,
    };
  },
  render() {
    return this.form
      ? this.form.render()
      : h(
          "div",
          {
            class: "formkl-error__wrapper",
          },
          this.$slots.error
            ? this.$slots.error()
            : h("div", { class: "formkl-error" }, "Error parsing formkl"),
        );
  },
});
</script>

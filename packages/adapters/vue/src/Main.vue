<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, PropType, provide, ref } from "vue";
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

    const formkl = FormklParser.parse(props.formkl);

    const form = new Form(formkl, props.options);

    const submit = (
      callbackSuccess?: (model: SchemaBase | SchemaFlat) => void,
      callbackError?: (error: any) => void,
      callbackFinally?: () => void,
    ) => {
      formklRef.value.validate((isValid: boolean) => {
        if (isValid) {
          form.submit.call(form, callbackSuccess, callbackError, callbackFinally);
        }
      });
    };

    const reset = () => {
      formklRef.value.resetFields();
    };

    const fill = (fillModel: SchemaBase | SchemaFlat) => {
      form.fill.call(form, fillModel);
      vm?.$forceUpdate();
    };

    const getForm = () => {
      return form;
    };

    onMounted(() => {
      emit("ready", form);
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
    return this.form.render();
  },
});
</script>

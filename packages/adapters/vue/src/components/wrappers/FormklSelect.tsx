import { defineComponent, computed, ref, onBeforeMount, inject } from "vue";
import { ElSelect, ElOption } from "element-plus";

import _get from "lodash/get";
import { httpInjectionKey } from "../../keys/http";

export default defineComponent({
  name: "FormklSelect",
  props: {
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: () => null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    fetchUrl: {
      type: String,
      default: "",
    },
    fetchDataPath: {
      type: String,
      default: "",
    },
    valueKey: {
      type: String,
      default: "id",
    },
    labelKey: {
      type: String,
      default: "name",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const $http = inject<any>(httpInjectionKey);

    const fetchedOptions = ref<Array<any>>([]);

    const computedOptions = computed<Array<{ label: string; value: any }>>(() =>
      (props.options.length ? props.options : fetchedOptions.value).map((option: any) =>
        typeof option !== "object"
          ? { label: option, value: option }
          : { label: option[props.labelKey], value: option[props.valueKey] },
      ),
    );

    const handleChange = (value: any) => {
      emit("update:modelValue", value);
    };

    onBeforeMount(async () => {
      if (props.fetchUrl) {
        let data;
        if ($http) {
          data = await $http
            .get(props.fetchUrl)
            .then((res: any) => res.data)
            .catch((error: any) => console.error("[Formkl Select] Fetch failed: ", error));
        } else {
          data = await fetch(props.fetchUrl)
            .then((res) => res.json())
            .catch((error) => console.error("[Formkl Select] Fetch failed: ", error));
        }
        if (data) {
          fetchedOptions.value = props.fetchDataPath ? _get(data, props.fetchDataPath) : data;
        }
      }
    });

    return () => (
      <ElSelect modelValue={props.modelValue} onChange={handleChange}>
        {computedOptions.value.map((option) => (
          <ElOption label={option.label} value={option.value} key={String(option.value)} />
        ))}
      </ElSelect>
    );
  },
});

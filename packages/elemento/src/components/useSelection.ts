import { computed, getCurrentInstance, onBeforeMount, ref } from "vue";
import { get, uniqBy, isNaNStrict } from "@formkl/shared";
import axios from "axios";

export const useSelection = () => {
  const vm = getCurrentInstance()?.proxy;
  const props = vm.$props as any;

  const isLoading = ref(false);

  const fetchedOptions = ref<Array<any>>([]);

  const computedOptions = computed<Array<{ label: string; value: any }>>(() => {
    if (["number", "string"].includes(typeof props.options?.[0])) {
      return props.options.map((o: string) => ({ label: o, value: o }));
    }

    const options = fetchedOptions.value;

    if (
      typeof props.options?.[0] === "object" &&
      Object.keys(props.options?.[0]).includes(props.valueKey) &&
      Object.keys(props.options?.[0]).includes(props.labelKey)
    ) {
      options.push(...props.options);
    }

    return uniqBy(options, props.valueKey).map((option: any) => {
      const label = get(option, props.labelKey);
      const value = get(option, props.valueKey);

      return {
        label,
        value: isNaNStrict(value) ? value : +value,
      };
    });
  });

  const handleSearchOption = async (keyword = "") => {
    if (props.fetchUrl && vm) {
      try {
        isLoading.value = true;
        const { data } = await axios.get(props.fetchUrl, {
          params: {
            page: 1,
            limit: 50,
            keyword,
          },
        });

        fetchedOptions.value = props.fetchDataPath ? get(data, props.fetchDataPath) : data;
      } catch (err: any) {
        console.error(err);
      } finally {
        isLoading.value = false;
      }
    }
  };

  onBeforeMount(handleSearchOption);

  return {
    handleSearchOption,
    isLoading,
    computedOptions,
  };
};

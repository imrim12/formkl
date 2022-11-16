import { FieldProps } from "../types/field-props.type";

export const useField = (props: FieldProps) => {
  const getMethod = (baseCallback: Function, flatCallback: Function) =>
    ({
      base: () => baseCallback(),
      flat: () => flatCallback(),
    }[props.formkl.model]());

  return {
    getMethod,
  };
};

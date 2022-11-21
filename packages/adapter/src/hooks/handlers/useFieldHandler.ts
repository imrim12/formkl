import type { FieldNodeProps } from "../../components/FieldNode";

import _set from "lodash/set";

export const useFieldHandler = (props: FieldNodeProps & { propPath: string | string[] }) => {
  const { formkl, model, section, field, propPath } = props;

  const onInput = (value: any) => {
    _set(model, propPath, value.target.value);

    props.onFieldChange(value);
  };

  const onChange = (value: any) => {
    _set(model, propPath, value.target.value);

    props.onFieldChange(value);
  };

  const onAddResponse = () => {
    props.onFieldChange();
  };

  const onRemoveResponse = (fieldResponseIndex: number) => {
    props.onFieldChange();
  };

  return {
    onInput,
    onChange,
    onAddResponse,
    onRemoveResponse,
  };
};

import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import type { FormNodeProps } from "../../components/FormNode";

export const useFormHandler = (
  props: FormNodeProps & { formkl: Formkl; model: SchemaBase | SchemaFlat },
) => {
  const { formkl } = props;

  const onChange = () => {
    props.onChange({ formkl, model: props.model });
  };

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    props.onSubmit({ formkl, model: props.model });
  };

  return { onChange, onSubmit };
};

import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import type { FormNodeProps } from "../../components/FormNode";

export const useFormHandler = (
  props: FormNodeProps & { formkl: Formkl; model: SchemaBase | SchemaFlat },
) => {
  const { formkl, model } = props;

  const onChange = () => {
    props.onChange({ formkl, model });
  };

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    props.onSubmit({ formkl, model });
  };

  return { onChange, onSubmit };
};

import type { FieldNodeProps } from "../../components/FieldNode";
import { DefaultValueMap } from "../../createSchema";

import _get from "lodash/get";
import _set from "lodash/set";
import _omit from "lodash/omit";

export const useFieldHandler = (props: FieldNodeProps & { propPath: string | string[] }) => {
  const { formkl, section, field, sectionResponseIndex } = props;

  const onInput = (value: any, fieldResponseIndex?: number) => {
    const propPath =
      fieldResponseIndex !== undefined
        ? props.propPath[fieldResponseIndex]
        : sectionResponseIndex !== undefined
        ? props.propPath[sectionResponseIndex]
        : props.propPath;

    const newValue = value.target.value || value;

    _set(props.model, propPath, newValue);

    props.onFieldChange();
  };

  const onChange = (value: any, fieldResponseIndex?: number) => {
    const propPath =
      fieldResponseIndex !== undefined
        ? props.propPath[fieldResponseIndex]
        : sectionResponseIndex !== undefined
        ? props.propPath[sectionResponseIndex]
        : props.propPath;

    const newValue = value.target.value || value;

    _set(props.model, propPath, newValue);

    props.onFieldChange();
  };

  const onAddResponse = (e: MouseEvent) => {
    e.preventDefault();

    const responsePropPath = props.propPath[0].split(".");
    responsePropPath.pop();

    const fieldPropPath = responsePropPath.join(".");

    _set(props.model, fieldPropPath, [
      ..._get(props.model, fieldPropPath, []),
      DefaultValueMap[field.type],
    ]);

    props.onFieldChange();
  };

  const onRemoveResponse = (fieldResponseIndex: number) => {
    const propPath =
      fieldResponseIndex !== undefined
        ? props.propPath[fieldResponseIndex]
        : sectionResponseIndex !== undefined
        ? props.propPath[sectionResponseIndex]
        : props.propPath;

    _omit(props.model, propPath);

    props.onFieldChange();
  };

  return {
    onInput,
    onChange,
    onAddResponse,
    onRemoveResponse,
  };
};

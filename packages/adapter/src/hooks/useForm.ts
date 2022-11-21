import type { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import type { FormNodeProps } from "../components/FormNode";

import { useFormHandler } from "./handlers/useFormHandler";

import FormklParser from "formkl";

export const DefaultValueMap = Object.freeze({
  number: null,
  text: null,
  paragraph: null,
  date: new Date(),
  time: new Date(),
  datetime: new Date(),
  daterange: [new Date(), new Date()],
  timerange: [new Date(), new Date()],
  datetimerange: [new Date(), new Date()],
  select: null,
  checkbox: [],
  radio: null,
  switch: false,
});

const createSchema = (
  formkl: Formkl,
  modelDefault?: SchemaBase | SchemaFlat,
): SchemaBase | SchemaFlat => {
  const schema: SchemaBase | SchemaFlat = {};
  switch (formkl.model) {
    case "flat":
      formkl.sections.forEach((section) => {
        schema[section.key] = {};
        section.fields.forEach((field) => {
          const prefilledValue = (modelDefault as SchemaFlat)?.[section.key]?.[field.key];

          const defaultValue =
            section.multiple || field.multiple
              ? [DefaultValueMap[field.type]]
              : DefaultValueMap[field.type];

          schema[section.key][field.key] =
            prefilledValue === undefined ? defaultValue : prefilledValue;
        });
      });

      break;
    case "base":
    default:
      schema.data = [];
      formkl.sections.forEach((section) => {
        section.fields.forEach((field) => {
          const prefilledValue = (modelDefault as SchemaBase)?.data?.find(
            (i) => i.section === section.key && i.field === field.key,
          )?.value;

          const defaultValue =
            section.multiple || field.multiple
              ? [DefaultValueMap[field.type]]
              : DefaultValueMap[field.type];

          schema.data.push({
            section: section.key,
            field: field.key,
            value: prefilledValue === undefined ? defaultValue : prefilledValue,
          });
        });
      });
      break;
  }

  return schema;
};

export const useForm = (props: FormNodeProps) => {
  let formkl: Formkl | null = null;

  try {
    formkl = FormklParser.parse(props.syntax);
  } catch (e) {
    console.error(e);
  }

  const model = createSchema(formkl, props.modelDefault);

  const handler = useFormHandler(Object.assign({}, props, { formkl, model }));

  return {
    formkl,
    model,
    handler,
  };
};

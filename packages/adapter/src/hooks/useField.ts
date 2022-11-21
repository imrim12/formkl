import type { FieldNodeProps } from "../components/FieldNode";
import type { RuleItem } from "async-validator";
import type { SchemaBase, SchemaFlat } from "@formkl/shared";
import { useFieldHandler } from "./handlers/useFieldHandler";
import { isValueValidated } from "@formkl/shared";

const createFieldRules = (props: FieldNodeProps) => {
  const { field } = props;

  const rules: RuleItem[] = [];

  if (field.required) {
    rules.push({
      required: true,
      message: field.label + " field is required",
    });
  }

  switch (field.type) {
    case "number":
    case "text":
    case "paragraph":
      rules.push({
        type: field.type === "number" ? "number" : "string",
        message: `${field.label} field must be a ${field.type}!`,
      });
      break;
    case "time":
    case "date":
    case "datetime":
      rules.push({
        type: "date",
        message: field.label + " field must be a valid time!",
      });
      break;

    default:
      break;
  }

  if (field.validation) {
    rules.push({
      validator: (rule, value, callback) => {
        const errors: Error[] = [];
        if (value && field.validation && !isValueValidated(value, field.validation)) {
          errors.push(new Error("Field is invalid"));
        }

        return errors;
      },
    });
  }

  return rules;
};

export const useField = (props: FieldNodeProps) => {
  const { formkl, model, section, field, sectionResponseIndex } = props;

  const computedMultiplePropPath = () => {
    switch (formkl.model) {
      case "flat":
        const modelFlat = model as SchemaFlat;

        return modelFlat[section.key][field.key].map((_: any, fieldResponseIndex: number) =>
          [section.key, field.key, fieldResponseIndex].join("."),
        );
      case "base":
        const modelBase: SchemaBase = model as SchemaBase;

        const fieldIndex = modelBase.data.findIndex(
          (f) => f.field === field.key && f.section === section.key,
        );

        return modelBase.data[fieldIndex].value.map((_: any, fieldResponseIndex: number) =>
          ["data", fieldIndex, "value", fieldResponseIndex].join("."),
        );
    }
  };

  const computedSinglePropPath = (sectionResponseIndex?: number) => {
    switch (formkl.model) {
      case "flat":
        return [section.key, field.key, sectionResponseIndex]
          .filter((i) => i !== undefined)
          .join(".");
      case "base":
        const modelBase = model as SchemaBase;

        const fieldIndex = modelBase.data.findIndex(
          (f) => f.field === field.key && f.section === section.key,
        );
        return ["data", fieldIndex, "value", sectionResponseIndex]
          .filter((i) => i !== undefined)
          .join(".");
    }
  };

  const computedFieldPropPath = () =>
    field.multiple ? computedMultiplePropPath() : computedSinglePropPath(sectionResponseIndex);

  const computedFieldAllowMoreResponse = () =>
    computedFieldPropPath()?.length < Number(field?.maxResponseAllowed || Infinity);

  const rules = createFieldRules(props);

  const handler = useFieldHandler(Object.assign({}, props, { propPath: computedFieldPropPath() }));

  return {
    formkl,
    model,
    section,
    field,
    sectionResponseIndex,
    rules,
    handler,
    computedMultiplePropPath,
    computedSinglePropPath,
    computedFieldPropPath,
    computedFieldAllowMoreResponse,
  };
};

import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import { Schema } from "./Schema";

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

export class Model {
  private _formkl: Formkl;
  private _schema: Schema;
  private _modelDefault: SchemaBase | SchemaFlat;
  private _model: SchemaBase | SchemaFlat;

  constructor(formkl: Formkl, schema: Schema, modelDefault?: SchemaBase | SchemaFlat) {
    this._formkl = formkl;
    this._schema = schema;

    this.setModel(modelDefault || {});
  }

  private _prefillFlatModel(prefilledModel: SchemaFlat): SchemaFlat {
    const { schema } = this._schema.getSchema();

    const model = schema as SchemaFlat;

    this._formkl.sections.forEach((section) => {
      section.fields.forEach((field) => {
        const prefillValue = prefilledModel?.[section.key]?.[field.key];

        const defaultValue =
          section.multiple || field.multiple
            ? [DefaultValueMap[field.type]]
            : DefaultValueMap[field.type];

        if (prefillValue && (section.multiple || field.multiple) && !Array.isArray(prefillValue)) {
          console.error(
            "[Formkl Warn]: The field or section is defined as having multiple response but the value is not an array.",
          );
        }

        model[section.key] = {
          ...model[section.key],
          [field.key]: prefillValue || defaultValue,
        };
      });
    });

    return model;
  }

  private _prefillBaseModel(prefilledModel: SchemaBase): SchemaBase {
    const { schema } = this._schema.getSchema();

    const model = schema as SchemaBase;

    this._formkl.sections.forEach((section) => {
      section.fields.forEach((field) => {
        const modelField = model.data.find(
          (i) => i.section === section.key && i.field === field.key,
        );
        if (modelField) {
          const prefillValue = prefilledModel?.data?.find(
            (i) => i.section === section.key && i.field === field.key,
          )?.value;

          const defaultValue =
            section.multiple || field.multiple
              ? [DefaultValueMap[field.type]]
              : DefaultValueMap[field.type];

          if (
            prefillValue &&
            (section.multiple || field.multiple) &&
            !Array.isArray(prefillValue)
          ) {
            console.error(
              "[Formkl Warn]: The field or section is defined as having multiple response but the value is not an array.",
            );
          }

          modelField.value = prefillValue || defaultValue;
        }
      });
    });

    return model;
  }

  public getModel(): SchemaBase | SchemaFlat {
    return this._model;
  }

  public setModel(model: SchemaBase | SchemaFlat) {
    // Create the modelSchema
    const { type, schema: modelSchema } = this._schema.getSchema();

    // Prefill the model with default value
    if (model) {
      switch (type) {
        case "flat":
          this._model = this._prefillFlatModel(model as SchemaFlat);
          break;
        case "base":
        default:
          this._model = this._prefillBaseModel(model as SchemaBase);
          break;
      }
    } else {
      this._model = modelSchema;
    }
  }
}

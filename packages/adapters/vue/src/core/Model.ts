import { Formkl } from "formkl";
import { ref, Ref } from "vue-demi";
import { Schema, SchemaBase, SchemaFlat } from "./Schema";

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
    this._modelDefault = modelDefault || {};

    // Create the modelSchema
    const { type, schema: modelSchema } = this._schema.getSchema();

    // Prefill the model with default value
    if (this._modelDefault) {
      switch (type) {
        case "flat":
          this._model = this._prefillFlatModel(
            modelSchema as SchemaFlat,
            this._modelDefault as SchemaFlat,
          );
          break;
        case "base":
        default:
          this._model = this._prefillBaseModel(
            modelSchema as SchemaBase,
            this._modelDefault as SchemaBase,
          );
          break;
      }
    } else {
      this._model = modelSchema;
    }
  }

  private _prefillFlatModel(schema: SchemaFlat, modelDefault: SchemaFlat): SchemaFlat {
    const model: SchemaFlat = schema;

    this._formkl.sections.forEach((section) => {
      section.fields.forEach((field) => {
        const prefillValue = modelDefault?.[section.key]?.[field.key];

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

  private _prefillBaseModel(schema: SchemaBase, modelDefault: SchemaBase): SchemaBase {
    const model: SchemaBase = schema;

    this._formkl.sections.forEach((section) => {
      section.fields.forEach((field) => {
        const modelField = model.data.find(
          (i) => i.section === section.key && i.field === field.key,
        );
        if (modelField) {
          const prefillValue = modelDefault?.data?.find(
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
}

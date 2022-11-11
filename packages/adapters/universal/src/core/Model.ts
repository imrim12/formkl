import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import { Schema } from "./Schema";
import { SectionEvent } from "../types/section-event.type";

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

  private _normalizeFlatPayload(model: SectionEvent | SchemaFlat): SchemaFlat {
    const sectionPayload = model as SectionEvent;
    if (sectionPayload.section !== undefined && sectionPayload.field !== undefined) {
      return {
        [sectionPayload.section.key]: {
          [sectionPayload.field.key]: sectionPayload.value,
        },
      } as SchemaFlat;
    }

    return model as SchemaFlat;
  }

  private _normalizeBasePayload(model: SectionEvent | SchemaBase): SchemaBase {
    const sectionPayload = model as SectionEvent;
    if (sectionPayload.section !== undefined && sectionPayload.field !== undefined) {
      return {
        data: [
          {
            section: sectionPayload.section.key,
            field: sectionPayload.field.key,
            value: sectionPayload.value,
          },
        ],
      } as SchemaBase;
    }

    return model as SchemaBase;
  }

  private _prefillFlatModel(prefilledModel: SchemaFlat): SchemaFlat {
    const { schema } = this._schema.getSchema();

    const model = schema as SchemaFlat;

    this._formkl.sections.forEach((section) => {
      section.fields.forEach((field) => {
        const prefillValue =
          prefilledModel?.[section.key]?.[field.key] || this._model?.[section.key]?.[field.key];

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
          const prefillValue =
            prefilledModel?.data?.find((i) => i.section === section.key && i.field === field.key)
              ?.value ||
            this._model?.data?.find((i) => i.section === section.key && i.field === field.key)
              ?.value;

          if (
            prefillValue &&
            (section.multiple || field.multiple) &&
            !Array.isArray(prefillValue)
          ) {
            console.error(
              "[Formkl Warn]: The field or section is defined as having multiple response but the value is not an array.",
            );
          }

          const defaultValue =
            section.multiple || field.multiple
              ? [DefaultValueMap[field.type]]
              : DefaultValueMap[field.type];

          modelField.value = prefillValue || defaultValue;
        }
      });
    });

    return model;
  }

  public getModel(): SchemaBase | SchemaFlat {
    return this._model;
  }

  public getFieldModelValue(sectionKey: string, fieldKey: string): any {
    const { type } = this._schema.getSchema();

    const ModelValueMap = {
      flat: () => {
        return this._model?.[sectionKey]?.[fieldKey];
      },
      base: () => {
        const modelField = this._model?.data?.find(
          (i) => i.section === sectionKey && i.field === fieldKey,
        );
        return modelField?.value;
      },
    };

    if (ModelValueMap[type]) return ModelValueMap[type]();
  }

  public setModel(model: SectionEvent | SchemaBase | SchemaFlat) {
    // Create the modelSchema
    const { type, schema: modelSchema } = this._schema.getSchema();

    // Prefill the model with default value
    if (model) {
      const PrefillMap = {
        flat: () => {
          this._model = this._prefillFlatModel(this._normalizeFlatPayload(model as SchemaFlat));
        },
        base: () => {
          this._model = this._prefillBaseModel(this._normalizeBasePayload(model as SchemaBase));
        },
      };

      if (PrefillMap[type]) PrefillMap[type]();
    } else {
      this._model = modelSchema;
    }

    return this._model;
  }
}

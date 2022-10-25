import { Formkl, SchemaFlat, SchemaBase } from "@formkl/shared";

export class Schema {
  private _formkl: Formkl;
  private _schema: SchemaBase | SchemaFlat;

  constructor(formkl: Formkl) {
    this._formkl = formkl;
    this._schema = this._buildSchema();
  }

  private _buildSchema() {
    // Build the schema
    const schema: SchemaBase | SchemaFlat = {};
    switch (this._formkl.model) {
      case "flat":
        this._formkl.sections.forEach((section) => {
          schema[section.key] = {};
          section.fields.forEach((field) => {
            schema[section.key][field.key] = null;
          });
        });

        break;
      case "base":
      default:
        schema.data = [];
        this._formkl.sections.forEach((section) => {
          section.fields.forEach((field) => {
            schema.data.push({
              section: section.key,
              field: field.key,
              value: null,
            });
          });
        });
        break;
    }

    return schema;
  }

  public getSchema() {
    return {
      type: this._formkl.model,
      schema: this._schema,
    };
  }
}

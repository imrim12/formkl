import { FormItemRule } from "element-plus";
import { FieldDefault, FieldSelection, Formkl, isValueValidated } from "@formkl/shared";

export class Rule {
  private _formkl: Formkl;
  private _field: FieldDefault | FieldSelection;
  private _rules: FormItemRule[] = [];

  constructor(formkl: Formkl, field: FieldDefault | FieldSelection) {
    this._formkl = formkl;
    this._field = field;

    this._build();
  }

  private _buildRequireRule() {
    if (this._field.require) {
      this._rules.push({
        required: true,
        message: this._field.label + " field is required",
      });
    }
  }

  private _buildTypeRule() {
    switch (this._field.type) {
      case "number":
      case "text":
      case "paragraph":
        this._rules.push({
          type: this._field.type === "number" ? "number" : "string",
          message: `${this._field.label} field must be a ${this._field.type}!`,
        });
        break;
      case "time":
      case "date":
      case "datetime":
        this._rules.push({
          type: "date",
          message: this._field.label + " field must be a valid time!",
        });
        break;

      default:
        break;
    }
  }

  private _buildCustomValidationRule() {
    if (this._field.validation) {
      this._rules.push({
        validator: (rule, value, callback) => {
          const errors: Error[] = [];
          if (value && this._field.validation && !isValueValidated(value, this._field.validation)) {
            errors.push(new Error("Field is invalid"));
          }

          return errors;
        },
      });
    }
  }

  private _build() {
    this._buildRequireRule();
    this._buildTypeRule();
    this._buildCustomValidationRule();
  }

  public getRules(): FormItemRule[] {
    return this._rules;
  }
}

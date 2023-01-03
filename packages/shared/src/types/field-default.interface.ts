import { FieldTypeDefault } from "./field-default.type";
import { Validation } from "./validation.interface";

export interface FieldDefault {
  type: FieldTypeDefault;
  label: string;
  key: string;
  required?: boolean;
  multiple?: boolean;
  maxResponseAllowed?: number;
  validation?: Validation;
}

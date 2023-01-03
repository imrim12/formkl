import { Validation } from "./validation.interface";

export interface FieldCustom {
  type: string;
  label: string;
  key: string;
  required?: boolean;
  multiple?: boolean;
  maxResponseAllowed?: number;
  validation?: Validation;
}

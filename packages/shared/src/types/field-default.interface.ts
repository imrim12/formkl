import { Validation } from "./validation.interface";

type FieldTypeDefault =
  | "text"
  | "paragraph"
  | "switch"
  | "number"
  | "date"
  | "time"
  | "datetime"
  | "daterange"
  | "timerange"
  | "datetimerange";

export interface FieldDefault {
  type: FieldTypeDefault;
  label: string;
  require: boolean;
  multiple: boolean;
  maxResponseAllowed?: number;
  key: string;
  validation?: Validation;
}

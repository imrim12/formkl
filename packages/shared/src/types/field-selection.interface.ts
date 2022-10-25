import { Validation } from "./validation.interface";

type FieldTypeSelection = "checkbox" | "radio" | "select";

export interface FieldSelection {
  type: FieldTypeSelection;
  label: string;
  require: boolean;
  multiple: boolean;
  maxResponseAllowed?: number;
  options: Array<any>;
  fetchDataPath?: string;
  fetchUrl?: string;
  valueKey?: string;
  labelKey?: string;
  key: string;
  validation?: Validation;
}

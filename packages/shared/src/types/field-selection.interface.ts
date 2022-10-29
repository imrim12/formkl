import { FieldTypeSelection } from "./field-selection.type";
import { Validation } from "./validation.interface";

export interface FieldSelection {
  type: FieldTypeSelection;
  label: string;
  key: string;
  options: Array<any>;
  require?: boolean;
  multiple?: boolean;
  maxResponseAllowed?: number;
  fetchDataPath?: string;
  fetchUrl?: string;
  valueKey?: string;
  labelKey?: string;
  validation?: Validation;
}

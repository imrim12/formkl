import { FieldCustom } from "./field-custom.interface";
import { FieldDefault } from "./field-default.interface";
import { FieldSelection } from "./field-selection.interface";

export interface Section {
  key?: string;
  title?: string;
  multiple?: boolean;
  maxResponseAllowed?: number;
  fields: Array<FieldDefault | FieldSelection | FieldCustom>;
}

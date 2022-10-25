import { FieldDefault } from "./field-default.interface";
import { FieldSelection } from "./field-selection.interface";

export interface Section {
  title: string;
  key: string;
  multiple: boolean;
  maxResponseAllowed?: number;
  fields: Array<FieldDefault | FieldSelection>;
}

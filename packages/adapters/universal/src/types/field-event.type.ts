import { FieldDefault, FieldSelection } from "@formkl/shared";

export type FieldEvent = {
  field: FieldDefault | FieldSelection;
  fieldIndex: number;
  responseIndex?: number;
  value: any;
};

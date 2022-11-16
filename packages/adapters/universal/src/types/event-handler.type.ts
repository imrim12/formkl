import {
  FieldDefault,
  FieldSelection,
  Formkl,
  Section,
  SchemaBase,
  SchemaFlat,
} from "@formkl/shared";
import { Ref } from "vue-demi";

export type EventHandler = (
  value: any,
  formkl: Formkl,
  section: Section,
  field: FieldDefault | FieldSelection,
  model: Ref<SchemaBase | SchemaFlat>,
  responseIndex?: number,
) => void;

import { FieldDefault, FieldSelection, Formkl, Section } from "formkl";
import { Ref } from "vue-demi";
import { SchemaBase, SchemaFlat } from "../core/Schema";

export type EventHandler = (
  value: any,
  formkl: Formkl,
  section: Section,
  field: FieldDefault | FieldSelection,
  model: Ref<SchemaBase | SchemaFlat>,
  responseIndex?: number,
) => void;

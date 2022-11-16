import {
  Formkl,
  SchemaBase,
  SchemaFlat,
  Section,
  FieldDefault,
  FieldSelection,
} from "@formkl/shared";

export type FieldProps = {
  key: string;
  formkl: Formkl;
  model: {
    current?: SchemaBase | SchemaFlat;
    value?: SchemaBase | SchemaFlat;
  };
  section: Section;
  field: FieldDefault | FieldSelection;
  sectionResponseIndex?: number;
};

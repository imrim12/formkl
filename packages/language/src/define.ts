import { FieldDefault, FieldSelection, Formkl, Schema, Section } from "@formkl/shared";

export function defineForm(form: Formkl) {
  return form;
}

export function defineSection(section: Section) {
  return section;
}

export function defineField(field: FieldDefault | FieldSelection) {
  return field;
}

export function defineModel(model: Schema) {
  return model;
}

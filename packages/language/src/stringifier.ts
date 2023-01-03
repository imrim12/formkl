import {
  FieldCustom,
  FieldDefault,
  FieldSelection,
  Formkl,
  Section,
  Validation,
  ValidationLogic,
} from "@formkl/shared";
import { kebabCase } from "./utils/kebabCase";

export class Stringifier {
  constructor() {}

  validateLogicAnd(andLogic: Validation["logic"]["$and"]): string {
    const results = andLogic.map((e) => this.validationLogic(e));

    return results.join(`%(s)and%(s)`);
  }

  validateLogicOr(orLogic: Validation["logic"]["$or"]): string {
    const results = orLogic.map((e) => this.validationLogic(e));

    return results.join(`%(s)or%(s)`);
  }

  validationLogic(logic: Validation["logic"]): string {
    const operators = Object.keys(logic) as Array<keyof ValidationLogic>;
    const operator = operators[0];
    const val = logic[operator] as string | number;

    return {
      $gt: () => `>%(s)${val}`,
      $lt: () => `>=%(s)${val}`,
      $gteq: () => `<%(s)${val}`,
      $lteq: () => `<=%(s)${val}`,
      $eq: () => `==%(s)${typeof val === "string" ? JSON.stringify(val) : val}`,
      $has: () => `has%(s)${typeof val === "string" ? JSON.stringify(val) : val}`,
      $and: () => logic.$and && this.validateLogicAnd(logic.$and),
      $or: () => logic.$or && this.validateLogicOr(logic.$or),
    }[operator]();
  }

  validation(validation: Validation) {
    return [
      validation.regex && `regex("${validation.regex.source}")`,
      validation.logic && `valid(${this.validationLogic(validation.logic)})`,
    ]
      .filter((i) => i)
      .join("%(s)");
  }

  fields(fields: Array<FieldDefault | FieldSelection | FieldCustom>) {
    return (
      "%(t)%(t)" +
      fields
        .map(
          (field) =>
            [
              field.required && "require",
              field.maxResponseAllowed ? field.maxResponseAllowed : field.multiple && "multiple",
              kebabCase(field.label).toLowerCase() !== field.type && `"${field.label}"`,
              field.type,
              field.validation && this.validation(field.validation),
              kebabCase(field.label).toLowerCase() !== field.key && `as%(s)"${field.key}"`,
            ]
              .filter((i) => i)
              .join("%(s)") + ";",
        )
        .join("%(n)%(t)%(t)")
    );
  }

  sections(sections: Array<Section>) {
    return sections
      .map((section) =>
        [
          "%(t)",
          section.multiple && "multiple%(s)",
          section.title && `"${section.title}"%(s)`,
          "has",
          "%(s)",
          "{",
          "%(n)",
          this.fields(section.fields),
          "%(n)",
          "%(t)",
          "}",
          (!section.title && section.key) ||
          (section.title && kebabCase(section.title).toLowerCase() !== section.key)
            ? `%(s)as%(s)"${section.key}"`
            : "",
        ].join(""),
      )
      .join("%(n)");
  }

  stringify(formkl: Formkl) {
    return `${[
      "formkl",
      formkl.model === "flat" && "flat",
      formkl.title && JSON.stringify(formkl.title),
      formkl.description && JSON.stringify(formkl.description),
    ]
      .filter((i) => i)
      .join("%(s)")}%(s){%(n)${this.sections(formkl.sections)}%(n)}`
      .replace(/\%\(s\)/g, " ")
      .replace(/\%\(t\)/g, "\t")
      .replace(/\%\(n\)/g, "\n");
  }
}

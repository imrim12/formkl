import {
  FieldDefault,
  FieldSelection,
  Formkl,
  Section,
  Validation,
  ValidationLogic,
} from "@formkl/shared";
import slugify from "slugify";

function s(count: number = 1) {
  return new Array(count).fill(" ").join("");
}

function n(count: number = 1) {
  return new Array(count).fill("\n").join("");
}

export class Stringifier {
  constructor() {}

  validateLogicAnd(andLogic: Validation["logic"]["$and"]): string {
    const results = andLogic.map((e) => this.validationLogic(e));

    return results.join(`${s()}and${s()}`);
  }

  validateLogicOr(orLogic: Validation["logic"]["$or"]): string {
    const results = orLogic.map((e) => this.validationLogic(e));

    return results.join(`${s()}or${s()}`);
  }

  validationLogic(logic: Validation["logic"]): string {
    const operators = Object.keys(logic) as Array<keyof ValidationLogic>;
    const operator = operators[0];
    const val = logic[operator] as string | number;

    return {
      $gt: () => `>${s()}${val}`,
      $lt: () => `>=${s()}${val}`,
      $gteq: () => `<${s()}${val}`,
      $lteq: () => `<=${s()}${val}`,
      $eq: () => `==${s()}${typeof val === "string" ? JSON.stringify(val) : val}`,
      $has: () => `has${s()}${typeof val === "string" ? JSON.stringify(val) : val}`,
      $and: () => logic.$and && this.validateLogicAnd(logic.$and),
      $or: () => logic.$or && this.validateLogicOr(logic.$or),
    }[operator]();
  }

  validation(validation: Validation) {
    return [
      validation.regex && `regex(${JSON.stringify(validation.regex.source)})`,
      validation.logic && `valid(${this.validationLogic(validation.logic)})`,
    ]
      .filter(Boolean)
      .join(s());
  }

  fields(fields: Array<FieldDefault | FieldSelection>) {
    return fields.map((field) =>
      [
        field.required && "require",
        field.maxResponseAllowed && field.multiple && "multiple",
        field.label && JSON.stringify(field.label),
        field.type,
        field.validation && this.validation(field.validation),
        field.key === slugify(field.label) && `${s()}as${s()}${JSON.stringify(field.key)}`,
      ]
        .filter(Boolean)
        .join(s()),
    );
  }

  sections(sections: Array<Section>) {
    return sections.map(
      (section) =>
        `${
          section.title ? `${JSON.stringify(section.title)}${s()}` : ""
        }includes${s()}{${s()}${n()}${this.fields(section.fields)}${n()}}`,
    );
  }

  stringify(formkl: Formkl) {
    return `${["formkl", formkl.title, formkl.description]
      .filter(Boolean)
      .join(s())}${s()}{${n()}${this.sections(formkl.sections)}${n()}}`;
  }
}

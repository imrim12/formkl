import { Validation } from "../types";
import { validateLogicOperator } from "./validateLogicOperator";
import { validateRegex } from "./validateRegex";

export const isValueValidated = (value: string | number, validation: Validation): boolean => {
  let isRegexValid: boolean | undefined;
  let isLogicValid: boolean | undefined;

  if (validation.regex !== undefined) {
    isRegexValid = validateRegex(value, validation.regex);
  }

  if (validation.logic !== undefined) {
    isLogicValid = validateLogicOperator(value, validation.logic);
  }

  return [isRegexValid, isLogicValid].filter((i) => i !== undefined).every((result) => result);
};

export default { isValueValidated };

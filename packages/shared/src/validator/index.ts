import { Validation } from "../types";
import { validateLogicOperator } from "./validateLogicOperator";
import { validateRegex } from "./validateRegex";

export const isValueValidated = (value: string | number, validation: Validation): boolean => {
  let isRegexValid = validation.regex !== undefined ? validateRegex(value, validation.regex) : true;
  let isLogicValid =
    validation.logic !== undefined ? validateLogicOperator(value, validation.logic) : true;

  return isRegexValid && isLogicValid;
};

export default { isValueValidated };

import { ValidationLogic } from "../types";
import { validateLogicOperator } from "./validateLogicOperator";

export const validateLogicAnd = (
  value: string | number,
  validations: Array<ValidationLogic>,
): boolean => {
  const results = validations.map((validation) => validateLogicOperator(value, validation));

  return results.every((result) => result);
};

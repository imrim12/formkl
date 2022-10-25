import { Validation } from "../types";

enum ValidationBuilder {
  AND = "$and",
  OR = "$or",
}

enum ValidationOperator {
  LESS = "$lt",
  LESS_OR_EQUAL = "$lteq",
  GREATER = "$gt",
  GREATER_OR_EQUAL = "$gteq",
  EQUAL = "$eq",
  HAS = "$has",
}

function validationOperatorBuilder(
  value: number | string,
  conditionValue: number | string,
  operator: ValidationOperator,
): boolean | undefined {
  switch (operator) {
    case ValidationOperator.LESS:
      return value < conditionValue;
    case ValidationOperator.LESS_OR_EQUAL:
      return value <= conditionValue;
    case ValidationOperator.GREATER:
      return value > conditionValue;
    case ValidationOperator.GREATER_OR_EQUAL:
      return value >= conditionValue;
    case ValidationOperator.EQUAL:
      return value === conditionValue;
    case ValidationOperator.HAS:
      /**
       * Assume that value is already a string.
       */
      return (value as string).includes(conditionValue as string);
    default:
      throw new Error("Invalid operator " + operator);
  }
}

function validationBuilder(
  value: number | string,
  subValidationBuilderArray: any[],
  resultArray: any[],
) {
  for (const subValidationBuilder of subValidationBuilderArray) {
    const operator = Object.keys(subValidationBuilder)[0] as ValidationBuilder | ValidationOperator;
    const subValidationBuilderValue = subValidationBuilder[operator];
    if (operator === ValidationBuilder.AND || operator === ValidationBuilder.OR) {
      validationBuilder(value, subValidationBuilderValue, resultArray);
      resultArray = [normalizeArray(resultArray, operator)];
    } else {
      const result = validationOperatorBuilder(value, subValidationBuilderValue, operator);
      resultArray.push(result);
    }
  }
  return resultArray;
}

/**
 * Normalize the array. After check all the validation of each operator $and or $or. The array have to be normalized and return the result of the operator.
 * For e.g: 
    input: 75
    $and: [
     {$lt: 100},
     {$gt: 50} 
    ]
 The result is the value after checking the input of the whole operator $and and it is true.
 * 
 * @param validatingArray The validating array
 * @param operator The used operator for the validating array
 * @returns The result of after normalizing validating Array
 */
function normalizeArray(validatingArray: any[], operator: ValidationBuilder): boolean {
  if (operator === ValidationBuilder.AND) {
    return validatingArray.reduce((a, b) => a && b, true);
  }

  if (operator === ValidationBuilder.OR) {
    return validatingArray.reduce((a, b) => a || b, false);
  }

  throw new Error("Invalid operator");
}

/**
 * Validating value of the input validation object.
 * @param validatingValue The input value need to be validated.
 * @param validationObject The validation object for validating the input value
 *
 * @returns whether the value is fit for the validation object or not.
 */
export function isValueValidated(validatingValue: number | string, validationObject: Validation) {
  if (Object.keys(validationObject).length > 2) {
    throw new Error(
      "Something wrong. The validation should not have $and and $or at the same level.",
    );
  }

  if (validationObject.regex) {
    const regex = new RegExp(validationObject.regex);
    const result = regex.test(validatingValue + "");

    if (!result) {
      return false;
    }
  }

  const validationIndicator = Object.keys(validationObject).find((key) => key !== "regex") as
    | ValidationBuilder
    | undefined;

  if (!validationIndicator) {
    return false;
  }

  if (![ValidationBuilder.AND, ValidationBuilder.OR].includes(validationIndicator)) {
    return false;
  }

  const resultArray = validationBuilder(
    validatingValue,
    validationObject[validationIndicator] as any,
    [],
  );

  return normalizeArray(resultArray, validationIndicator);
}

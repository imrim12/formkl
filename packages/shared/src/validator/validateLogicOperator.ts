import { ValidationLogic } from "../types";
import { validateLogicAnd } from "./validateLogicAnd";
import { validateLogicOr } from "./validateLogicOr";

export const validateLogicOperator = (value: string | number, validation: ValidationLogic) => {
  const keys = Object.keys(validation) as Array<keyof ValidationLogic>;
  const key = keys[0];
  const val = validation[key] as string | number;

  return {
    $gt: () => (typeof value === "number" ? value > +val : value.length > +val),
    $lt: () => (typeof value === "number" ? value < +val : value.length < +val),
    $gteq: () => (typeof value === "number" ? value >= +val : value.length >= +val),
    $lteq: () => (typeof value === "number" ? value <= +val : value.length <= +val),
    $eq: () => value === val,
    $has: () => String(value).includes(val.toString()),
    $and: () => validation.$and && validateLogicAnd(value, validation.$and),
    $or: () => validation.$or && validateLogicOr(value, validation.$or),
  }[key]();
};

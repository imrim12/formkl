import { ValidationOperator } from "./validation-operator.interface";

export interface Validation extends ValidationOperator {
  regex?: string;
  $and?: Array<ValidationOperator>;
  $or?: Array<ValidationOperator>;
}

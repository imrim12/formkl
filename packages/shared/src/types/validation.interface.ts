import { ValidationOperator } from "./validation-operator.interface";

export interface Validation {
  regex?: RegExp;
  logic?: ValidationOperator;
}

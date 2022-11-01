import { ValidationLogic } from "./validation-logic.interface";

export interface Validation {
  regex?: RegExp;
  logic?: ValidationLogic;
}

import type { ValidationLogic } from '../types'
import { validateLogicOperator } from './validateLogicOperator'

export function validateLogicAnd(value: string | number, validations: Array<ValidationLogic>): boolean {
  const results = validations.map(validation => validateLogicOperator(value, validation))

  return results.every(result => result)
}

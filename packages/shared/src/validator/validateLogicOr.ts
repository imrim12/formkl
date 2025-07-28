import type { ValidationLogic } from '../types'
import { validateLogicOperator } from './validateLogicOperator'

export function validateLogicOr(value: string | number, validations: Array<ValidationLogic>): boolean {
  const results = validations.map(validation => validateLogicOperator(value, validation))

  return results.some(result => result)
}

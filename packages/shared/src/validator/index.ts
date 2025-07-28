import type { Validation } from '../types'
import { validateLogicOperator } from './validateLogicOperator'
import { validateRegex } from './validateRegex'

export function isValueValidated(value: string | number, validation: Validation): boolean {
  const isRegexValid = validation.regex !== undefined ? validateRegex(value, validation.regex) : true
  const isLogicValid
    = validation.logic !== undefined ? validateLogicOperator(value, validation.logic) ?? true : true

  return isRegexValid && isLogicValid
}

export default { isValueValidated }

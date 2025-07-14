import type { FieldTypeDefault } from './field-default.type'
import type { Validation } from './validation.interface'

export interface FieldDefault {
  type: FieldTypeDefault
  label: string
  key: string
  required?: boolean
  multiple?: boolean
  maxResponseAllowed?: number
  validation?: Validation
}

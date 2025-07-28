import type { FieldCustom } from './field-custom.interface'
import type { FieldDefault } from './field-default.interface'
import type { FieldSelection } from './field-selection.interface'

export interface Section {
  key?: string
  title?: string
  multiple?: boolean
  maxResponseAllowed?: number
  fields: Array<FieldDefault | FieldSelection | FieldCustom>
}

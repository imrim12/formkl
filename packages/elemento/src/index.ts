import type { FieldTypeDefault, FieldTypeSelection } from '@formkl/shared'
import {
  checkboxInput,
  datePickerInput,
  dateTimePickerInput,
  inputNumberInput,
  radioInput,
  selectInput,
  switchInput,
  textareaInput,
  textInput,
  timePickerInput,
} from './components'

export const formkitElementoInputs: Record<FieldTypeDefault | FieldTypeSelection, any> = {
  input: textInput,
  text: textInput,
  paragraph: textareaInput,
  textarea: textareaInput,
  select: selectInput,
  number: inputNumberInput,
  checkbox: checkboxInput,
  radio: radioInput,
  switch: switchInput,
  date: datePickerInput,
  datetime: dateTimePickerInput,
  time: timePickerInput,
}

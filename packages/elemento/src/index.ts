import {
  buttonInput,
  checkboxGroupInput,
  checkboxInput,
  colorPickerInput,
  datePickerInput,
  dateTimePickerInput,
  inputNumberInput,
  radioGroupInput,
  radioInput,
  rateInput,
  selectInput,
  sliderInput,
  switchInput,
  textareaInput,
  textInput,
  timePickerInput,
} from './components'

// Export FormKit inputs configuration object
const formkitElementoInputs = {
  // Basic inputs
  text: textInput,
  textarea: textareaInput,
  paragraph: textareaInput, // alias for textarea
  select: selectInput,
  number: inputNumberInput,

  // Selection inputs
  checkbox: checkboxInput,
  checkboxGroup: checkboxGroupInput,
  radio: radioInput,
  radioGroup: radioGroupInput,

  // Interactive inputs
  switch: switchInput,
  slider: sliderInput,
  rate: rateInput,

  // Date/Time inputs
  date: datePickerInput,
  datetime: dateTimePickerInput,
  time: timePickerInput,

  // Special inputs
  color: colorPickerInput,
  button: buttonInput,
}

export default formkitElementoInputs

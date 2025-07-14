import type { Theme } from '@formkl/shared'
import {
  ElButton,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElSwitch,
  ElTimePicker,
} from 'element-plus'
import { h } from 'vue'

import CheckboxComponent from './components/checkbox.component'
import RadioComponent from './components/radio.component'
import SelectComponent from './components/select.component'

const themeConfig: Theme = {
  VNodeFormWrapper: ElForm,
  vNodeFieldWrapper: ElFormItem,
  vNodeFields: {
    text: ElInput,
    paragraph: h(ElInput, { type: 'textarea' }),
    switch: ElSwitch,
    number: ElInputNumber,
    date: h(ElDatePicker, { valueFormat: 'YYYY-MM-DD' }),
    time: h(ElTimePicker, { valueFormat: 'HH:mm:ss' }),
    datetime: h(ElDatePicker, { type: 'datetime', valueFormat: 'YYYY-MM-DD HH:mm:ss' }),
    daterange: h(ElDatePicker, { isRange: true, valueFormat: 'YYYY-MM-DD' }),
    timerange: h(ElTimePicker, { isRange: true, valueFormat: 'HH:mm:ss' }),
    datetimerange: h(ElDatePicker, {
      type: 'datetime',
      isRange: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    }),
    select: SelectComponent,
    checkbox: CheckboxComponent,
    radio: RadioComponent,
  },
  vNodeComponents: {
    addSection: h(ElButton, 'Add section'),
    removeSection: h(ElButton, { type: 'danger' }, 'Remove section'),
    addField: h(ElButton, 'Add field'),
    removeField: h(ElButton, { type: 'danger' }, 'Remove field'),
  },
}

export default themeConfig

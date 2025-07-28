import { createInput } from '@formkit/vue'
import { ElTimePicker } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

// TimePicker wrapper component
const TimePickerWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    return () => h(markRaw(ElTimePicker), {
      'modelValue': props.context._value,
      'onUpdate:modelValue': props.context.node.input,
      'onBlur': props.context.handlers.blur,
      'onFocus': props.context.handlers.focus,
      'readonly': props.context.readonly,
      'disabled': props.context.disabled,
      'editable': props.context.editable,
      'clearable': props.context.clearable,
      'size': props.context.size,
      'placeholder': props.context.placeholder,
      'startPlaceholder': props.context.startPlaceholder,
      'endPlaceholder': props.context.endPlaceholder,
      'isRange': props.context.isRange,
      'arrowControl': props.context.arrowControl,
      'popperClass': props.context.popperClass,
      'rangeSeparator': props.context.rangeSeparator,
      'format': props.context.format,
      'defaultValue': props.context.defaultValue,
      'valueFormat': props.context.valueFormat,
      'id': props.context.id,
      'name': props.context.name,
      'ariaLabel': props.context.ariaLabel,
      'prefixIcon': props.context.prefixIcon,
      'clearIcon': props.context.clearIcon,
      'disabledHours': props.context.disabledHours,
      'disabledMinutes': props.context.disabledMinutes,
      'disabledSeconds': props.context.disabledSeconds,
      'teleported': props.context.teleported,
      'tabindex': props.context.tabindex,
      'emptyValues': props.context.emptyValues,
      'valueOnClear': props.context.valueOnClear,
      'validateEvent': props.context.validateEvent,
    })
  },
})

// Export configured FormKit input
export const timePickerInput = createInput(markRaw(TimePickerWrapper), {
  props: ['readonly', 'disabled', 'editable', 'clearable', 'size', 'placeholder', 'startPlaceholder', 'endPlaceholder', 'isRange', 'arrowControl', 'popperClass', 'rangeSeparator', 'format', 'defaultValue', 'valueFormat', 'id', 'name', 'ariaLabel', 'prefixIcon', 'clearIcon', 'disabledHours', 'disabledMinutes', 'disabledSeconds', 'teleported', 'tabindex', 'emptyValues', 'valueOnClear', 'validateEvent'],
})

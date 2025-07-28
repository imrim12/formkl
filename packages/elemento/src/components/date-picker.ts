import { createInput } from '@formkit/vue'
import { ElDatePicker } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

// DatePicker wrapper component
const DatePickerWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    return () => h(markRaw(ElDatePicker), {
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
      'type': props.context.dateType || 'date',
      'format': props.context.format,
      'popperClass': props.context.popperClass,
      'rangeSeparator': props.context.rangeSeparator,
      'defaultValue': props.context.defaultValue,
      'defaultTime': props.context.defaultTime,
      'valueFormat': props.context.valueFormat,
      'id': props.context.id,
      'name': props.context.name,
      'unlinkPanels': props.context.unlinkPanels,
      'prefixIcon': props.context.prefixIcon,
      'clearIcon': props.context.clearIcon,
      'shortcuts': props.context.shortcuts,
      'disabledDate': props.context.disabledDate,
      'cellClassName': props.context.cellClassName,
      'teleported': props.context.teleported,
      'emptyValues': props.context.emptyValues,
      'valueOnClear': props.context.valueOnClear,
      'fallbackPlacements': props.context.fallbackPlacements,
      'placement': props.context.placement,
      'showWeekNumber': props.context.showWeekNumber,
      'validateEvent': props.context.validateEvent,
    })
  },
})

// Export configured FormKit input
export const datePickerInput = createInput(markRaw(DatePickerWrapper), {
  props: ['readonly', 'disabled', 'editable', 'clearable', 'size', 'placeholder', 'startPlaceholder', 'endPlaceholder', 'dateType', 'format', 'popperClass', 'rangeSeparator', 'defaultValue', 'defaultTime', 'valueFormat', 'id', 'name', 'unlinkPanels', 'prefixIcon', 'clearIcon', 'shortcuts', 'disabledDate', 'cellClassName', 'teleported', 'emptyValues', 'valueOnClear', 'fallbackPlacements', 'placement', 'showWeekNumber', 'validateEvent'],
})

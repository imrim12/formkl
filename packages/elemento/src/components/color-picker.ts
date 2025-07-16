import { createInput } from '@formkit/vue'
import { ElColorPicker } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

// ColorPicker wrapper component
const ColorPickerWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    return () => h(markRaw(ElColorPicker), {
      'modelValue': props.context._value,
      'onUpdate:modelValue': props.context.node.input,
      'onBlur': props.context.handlers.blur,
      'onFocus': props.context.handlers.focus,
      'disabled': props.context.disabled,
      'size': props.context.size,
      'showAlpha': props.context.showAlpha,
      'colorFormat': props.context.colorFormat,
      'popperClass': props.context.popperClass,
      'predefine': props.context.predefine,
      'validateEvent': props.context.validateEvent,
      'tabindex': props.context.tabindex,
      'ariaLabel': props.context.ariaLabel,
      'emptyValues': props.context.emptyValues,
      'valueOnClear': props.context.valueOnClear,
      'id': props.context.id,
      'teleported': props.context.teleported,
    })
  },
})

// Export configured FormKit input
export const colorPickerInput = createInput(markRaw(ColorPickerWrapper), {
  props: ['disabled', 'size', 'showAlpha', 'colorFormat', 'popperClass', 'predefine', 'validateEvent', 'tabindex', 'ariaLabel', 'emptyValues', 'valueOnClear', 'id', 'teleported'],
})

import { createInput } from '@formkit/vue'
import { ElInputNumber } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

// InputNumber wrapper component
const InputNumberWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    return () => h(markRaw(ElInputNumber), {
      'modelValue': props.context._value,
      'onUpdate:modelValue': props.context.node.input,
      'onBlur': props.context.handlers.blur,
      'onFocus': props.context.handlers.focus,
      'min': props.context.min,
      'max': props.context.max,
      'step': props.context.step,
      'stepStrictly': props.context.stepStrictly,
      'precision': props.context.precision,
      'size': props.context.size,
      'readonly': props.context.readonly,
      'disabled': props.context.disabled,
      'controls': props.context.controls,
      'controlsPosition': props.context.controlsPosition,
      'name': props.context.name,
      'ariaLabel': props.context.ariaLabel,
      'placeholder': props.context.placeholder,
      'id': props.context.id,
      'valueOnClear': props.context.valueOnClear,
      'validateEvent': props.context.validateEvent,
      'inputmode': props.context.inputmode,
    })
  },
})

// Export configured FormKit input
export const inputNumberInput = createInput(markRaw(InputNumberWrapper), {
  props: ['min', 'max', 'step', 'stepStrictly', 'precision', 'size', 'readonly', 'disabled', 'controls', 'controlsPosition', 'name', 'ariaLabel', 'placeholder', 'id', 'valueOnClear', 'validateEvent', 'inputmode'],
})

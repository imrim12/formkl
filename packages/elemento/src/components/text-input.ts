import { createInput } from '@formkit/vue'
import { ElInput } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

// Text input wrapper component to avoid Vue reactivity issues
const TextInputWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    return () => h(markRaw(ElInput), {
      'modelValue': props.context._value,
      'onUpdate:modelValue': props.context.node.input,
      'onBlur': props.context.handlers.blur,
      'onFocus': props.context.handlers.focus,
      'placeholder': props.context.placeholder,
      'disabled': props.context.disabled,
      'size': props.context.size,
      'clearable': props.context.clearable,
      'showPassword': props.context.showPassword,
      'type': props.context.inputType || 'text',
    })
  },
})

// Export configured FormKit text input
export const textInput = createInput(markRaw(TextInputWrapper), {
  props: ['placeholder', 'size', 'clearable', 'showPassword', 'inputType'],
})

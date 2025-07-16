import { createInput } from '@formkit/vue'
import { ElInput } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

// Textarea wrapper component to avoid Vue reactivity issues
const TextareaWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    return () => h(markRaw(ElInput), {
      'modelValue': props.context._value,
      'onUpdate:modelValue': props.context.node.input,
      'onBlur': props.context.handlers.blur,
      'onFocus': props.context.handlers.focus,
      'placeholder': props.context.placeholder,
      'disabled': props.context.disabled,
      'readonly': props.context.readonly,
      'clearable': props.context.clearable,
      'show-word-limit': props.context.showWordLimit,
      'maxlength': props.context.maxlength,
      'minlength': props.context.minlength,
      'rows': props.context.rows || 4,
      'autosize': props.context.autosize,
      'resize': props.context.resize,
      'autofocus': props.context.autofocus,
      'form': props.context.form,
      'tabindex': props.context.tabindex,
      'validate-event': props.context.validateEvent,
      'input-style': props.context.inputStyle,
      'type': 'textarea',
      'name': props.context.name,
      'id': props.context.id,
      'aria-label': props.context.ariaLabel,
    })
  },
})

// Export configured FormKit textarea input
export const textareaInput = createInput(markRaw(TextareaWrapper), {
  props: [
    'placeholder',
    'disabled',
    'readonly',
    'clearable',
    'showWordLimit',
    'maxlength',
    'minlength',
    'rows',
    'autosize',
    'resize',
    'autofocus',
    'form',
    'tabindex',
    'validateEvent',
    'inputStyle',
    'name',
    'id',
    'ariaLabel',
  ],
})

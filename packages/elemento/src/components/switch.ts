import { createInput } from '@formkit/vue'
import { ElSwitch } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

// Switch wrapper component
const SwitchWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    return () => h(markRaw(ElSwitch), {
      'modelValue': props.context._value,
      'onUpdate:modelValue': props.context.node.input,
      'onBlur': props.context.handlers.blur,
      'onFocus': props.context.handlers.focus,
      'disabled': props.context.disabled,
      'loading': props.context.loading,
      'size': props.context.size,
      'width': props.context.width,
      'inlinePrompt': props.context.inlinePrompt,
      'activeIcon': props.context.activeIcon,
      'inactiveIcon': props.context.inactiveIcon,
      'activeText': props.context.activeText,
      'inactiveText': props.context.inactiveText,
      'activeValue': props.context.activeValue,
      'inactiveValue': props.context.inactiveValue,
      'activeColor': props.context.activeColor,
      'inactiveColor': props.context.inactiveColor,
      'borderColor': props.context.borderColor,
      'beforeChange': props.context.beforeChange,
      'name': props.context.name,
      'validateEvent': props.context.validateEvent,
      'tabindex': props.context.tabindex,
      'id': props.context.id,
      'ariaLabel': props.context.ariaLabel,
    })
  },
})

// Export configured FormKit input
export const switchInput = createInput(markRaw(SwitchWrapper), {
  props: ['disabled', 'loading', 'size', 'width', 'inlinePrompt', 'activeIcon', 'inactiveIcon', 'activeText', 'inactiveText', 'activeValue', 'inactiveValue', 'activeColor', 'inactiveColor', 'borderColor', 'beforeChange', 'name', 'validateEvent', 'tabindex', 'id', 'ariaLabel'],
})

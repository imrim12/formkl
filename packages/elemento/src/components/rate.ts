import { createInput } from '@formkit/vue'
import { ElRate } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

// Rate wrapper component
const RateWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    return () => h(markRaw(ElRate), {
      'modelValue': props.context._value,
      'onUpdate:modelValue': props.context.node.input,
      'onBlur': props.context.handlers.blur,
      'onFocus': props.context.handlers.focus,
      'max': props.context.max || 5,
      'size': props.context.size,
      'disabled': props.context.disabled,
      'allowHalf': props.context.allowHalf,
      'lowThreshold': props.context.lowThreshold,
      'highThreshold': props.context.highThreshold,
      'colors': props.context.colors,
      'voidColor': props.context.voidColor,
      'disabledVoidColor': props.context.disabledVoidColor,
      'icons': props.context.icons,
      'voidIcon': props.context.voidIcon,
      'disabledVoidIcon': props.context.disabledVoidIcon,
      'showText': props.context.showText,
      'showScore': props.context.showScore,
      'textColor': props.context.textColor,
      'texts': props.context.texts,
      'scoreTemplate': props.context.scoreTemplate,
      'clearable': props.context.clearable,
      'id': props.context.id,
      'ariaLabel': props.context.ariaLabel,
    })
  },
})

// Export configured FormKit input
export const rateInput = createInput(markRaw(RateWrapper), {
  props: ['max', 'size', 'disabled', 'allowHalf', 'lowThreshold', 'highThreshold', 'colors', 'voidColor', 'disabledVoidColor', 'icons', 'voidIcon', 'disabledVoidIcon', 'showText', 'showScore', 'textColor', 'texts', 'scoreTemplate', 'clearable', 'id', 'ariaLabel'],
})

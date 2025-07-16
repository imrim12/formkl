import { createInput } from '@formkit/vue'
import { ElSlider } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

// Slider wrapper component
const SliderWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    return () => h(markRaw(ElSlider), {
      'modelValue': props.context._value,
      'onUpdate:modelValue': props.context.node.input,
      'onBlur': props.context.handlers.blur,
      'onFocus': props.context.handlers.focus,
      'min': props.context.min || 0,
      'max': props.context.max || 100,
      'disabled': props.context.disabled,
      'step': props.context.step || 1,
      'showInput': props.context.showInput,
      'showInputControls': props.context.showInputControls,
      'size': props.context.size,
      'inputSize': props.context.inputSize,
      'showStops': props.context.showStops,
      'showTooltip': props.context.showTooltip,
      'formatTooltip': props.context.formatTooltip,
      'range': props.context.range,
      'vertical': props.context.vertical,
      'height': props.context.height,
      'ariaLabel': props.context.ariaLabel,
      'rangeStartLabel': props.context.rangeStartLabel,
      'rangeEndLabel': props.context.rangeEndLabel,
      'formatValueText': props.context.formatValueText,
      'debounce': props.context.debounce,
      'tooltipClass': props.context.tooltipClass,
      'placement': props.context.placement,
      'marks': props.context.marks,
      'validateEvent': props.context.validateEvent,
    })
  },
})

// Export configured FormKit input
export const sliderInput = createInput(markRaw(SliderWrapper), {
  props: ['min', 'max', 'disabled', 'step', 'showInput', 'showInputControls', 'size', 'inputSize', 'showStops', 'showTooltip', 'formatTooltip', 'range', 'vertical', 'height', 'ariaLabel', 'rangeStartLabel', 'rangeEndLabel', 'formatValueText', 'debounce', 'tooltipClass', 'placement', 'marks', 'validateEvent'],
})

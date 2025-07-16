import { createInput } from '@formkit/vue'
import { ElRadio, ElRadioGroup } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

import { useSelection } from './useSelection'

// FormKit Radio wrapper component
const RadioWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    const { computedOptions } = useSelection()

    return () => {
      // Single radio
      if (!props.context.options) {
        return h(markRaw(ElRadio), {
          'modelValue': props.context._value,
          'onUpdate:modelValue': props.context.node.input,
          'onBlur': props.context.handlers.blur,
          'onFocus': props.context.handlers.focus,
          'disabled': props.context.disabled,
          'size': props.context.size,
          'label': props.context.radioLabel,
          'name': props.context.name,
          'validateEvent': props.context.validateEvent,
          'tabindex': props.context.tabindex,
          'id': props.context.id,
          'ariaLabel': props.context.ariaLabel,
        }, () => props.context.children || props.context.label || '')
      }

      // Radio group
      return h(markRaw(ElRadioGroup), {
        'modelValue': props.context._value,
        'onUpdate:modelValue': props.context.node.input,
        'onBlur': props.context.handlers.blur,
        'onFocus': props.context.handlers.focus,
        'disabled': props.context.disabled,
        'size': props.context.size,
        'textColor': props.context.textColor,
        'fill': props.context.fill,
        'tag': props.context.tag,
        'validateEvent': props.context.validateEvent,
        'ariaLabel': props.context.ariaLabel,
        'name': props.context.name,
        'id': props.context.id,
      }, () => computedOptions.value.map(option =>
        h(markRaw(ElRadio), {
          label: option.value,
          key: option.value,
        }, () => option.label),
      ))
    }
  },
})

// Export both single radio and radio group
export const radioInput = createInput(markRaw(RadioWrapper), {
  props: [
    'options',
    'fetchUrl',
    'fetchDataPath',
    'labelKey',
    'valueKey',
    'disabled',
    'size',
    'radioLabel',
    'name',
    'validateEvent',
    'tabindex',
    'id',
    'ariaLabel',
    'textColor',
    'fill',
    'tag',
    'children',
    'label',
  ],
})

export const radioGroupInput = radioInput

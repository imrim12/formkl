import { createInput } from '@formkit/vue'
import { ElCheckbox, ElCheckboxGroup } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

import { useSelection } from './useSelection'

// FormKit Checkbox wrapper component
const CheckboxWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    const { computedOptions } = useSelection()

    return () => {
      // Single checkbox
      if (!props.context.options) {
        return h(markRaw(ElCheckbox), {
          'modelValue': props.context._value,
          'onUpdate:modelValue': props.context.node.input,
          'onBlur': props.context.handlers.blur,
          'onFocus': props.context.handlers.focus,
          'disabled': props.context.disabled,
          'size': props.context.size,
          'label': props.context.checkboxLabel,
          'true-label': props.context.trueLabel,
          'false-label': props.context.falseLabel,
          'checked': props.context.checked,
          'name': props.context.name,
          'indeterminate': props.context.indeterminate,
          'validateEvent': props.context.validateEvent,
          'tabindex': props.context.tabindex,
          'id': props.context.id,
          'ariaLabel': props.context.ariaLabel,
        }, () => props.context.children || props.context.label || '')
      }

      // Checkbox group
      return h(markRaw(ElCheckboxGroup), {
        'modelValue': props.context._value,
        'onUpdate:modelValue': props.context.node.input,
        'onBlur': props.context.handlers.blur,
        'onFocus': props.context.handlers.focus,
        'disabled': props.context.disabled,
        'size': props.context.size,
        'min': props.context.min,
        'max': props.context.max,
        'textColor': props.context.textColor,
        'fill': props.context.fill,
        'tag': props.context.tag,
        'validateEvent': props.context.validateEvent,
        'ariaLabel': props.context.ariaLabel,
      }, () => computedOptions.value.map(option =>
        h(markRaw(ElCheckbox), {
          label: option.value,
          key: option.value,
        }, () => option.label),
      ))
    }
  },
})

// Export both single checkbox and checkbox group
export const checkboxInput = createInput(markRaw(CheckboxWrapper), {
  props: [
    'options',
    'fetchUrl',
    'fetchDataPath',
    'labelKey',
    'valueKey',
    'disabled',
    'size',
    'checkboxLabel',
    'trueLabel',
    'falseLabel',
    'checked',
    'name',
    'indeterminate',
    'validateEvent',
    'tabindex',
    'id',
    'ariaLabel',
    'min',
    'max',
    'textColor',
    'fill',
    'tag',
    'children',
    'label',
  ],
})

export const checkboxGroupInput = checkboxInput

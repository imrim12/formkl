import { createInput } from '@formkit/vue'
import { isNaNStrict } from '@formkl/shared'
import { ElSelectV2 } from 'element-plus'
import { defineComponent, getCurrentInstance, h, markRaw } from 'vue'

import { useSelection } from './useSelection'

// FormKit Select wrapper component
const SelectWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    const vm = getCurrentInstance()?.proxy
    const { computedOptions, isLoading, handleSearchOption } = useSelection()

    const handleSelectionChange = (event: any) => {
      props.context.node.input(event)
      if (vm?.$refs.selectV2Ref) {
        (vm.$refs.selectV2Ref as any).handleClickOutside()
      }
    }

    const handleClear = () => {
      props.context.node.input(null)
      if (vm?.$refs.selectV2Ref) {
        (vm.$refs.selectV2Ref as any).handleClickOutside()
      }
    }

    return () => h(markRaw(ElSelectV2), {
      'ref': 'selectV2Ref',
      'modelValue': isNaNStrict(props.context._value) ? Number(props.context._value) : props.context._value,
      'onUpdate:modelValue': props.context.node.input,
      'onBlur': props.context.handlers.blur,
      'onFocus': props.context.handlers.focus,
      'valueKey': 'value',
      'filterable': props.context.filterable !== false,
      'clearable': props.context.clearable !== false,
      'multiple': props.context.multiple || false,
      'defaultFirstOption': props.context.defaultFirstOption !== false,
      'remote': Boolean(props.context.fetchUrl),
      'remoteMethod': handleSearchOption,
      'loading': isLoading.value,
      'options': computedOptions.value,
      'onChange': handleSelectionChange,
      'onClear': handleClear,
      'disabled': props.context.disabled,
      'size': props.context.size,
      'placeholder': props.context.placeholder,
      'multipleLimit': props.context.multipleLimit,
      'name': props.context.name,
      'autocomplete': props.context.autocomplete,
      'automaticDropdown': props.context.automaticDropdown,
      'fitInputWidth': props.context.fitInputWidth,
      'suffixIcon': props.context.suffixIcon,
      'tagType': props.context.tagType,
      'validateEvent': props.context.validateEvent,
      'reserveKeyword': props.context.reserveKeyword,
      'defaultValue': props.context.defaultValue,
      'effect': props.context.effect,
      'maxCollapseTags': props.context.maxCollapseTags,
      'collapseTagsTooltip': props.context.collapseTagsTooltip,
      'popperClass': props.context.popperClass,
      'teleported': props.context.teleported,
      'persistent': props.context.persistent,
      'popperOptions': props.context.popperOptions,
      'ariaLabel': props.context.ariaLabel,
      'emptyValues': props.context.emptyValues,
      'valueOnClear': props.context.valueOnClear,
      'id': props.context.id,
    }, {
      default: ({ item }: { item: any }) => h('span', { class: 'text-sm' }, item.label),
    })
  },
})

// Export configured FormKit select input
export const selectInput = createInput(markRaw(SelectWrapper), {
  props: [
    'options',
    'fetchUrl',
    'fetchDataPath',
    'labelKey',
    'valueKey',
    'filterable',
    'clearable',
    'multiple',
    'defaultFirstOption',
    'disabled',
    'size',
    'placeholder',
    'multipleLimit',
    'name',
    'autocomplete',
    'automaticDropdown',
    'fitInputWidth',
    'suffixIcon',
    'tagType',
    'validateEvent',
    'reserveKeyword',
    'defaultValue',
    'effect',
    'maxCollapseTags',
    'collapseTagsTooltip',
    'popperClass',
    'teleported',
    'persistent',
    'popperOptions',
    'ariaLabel',
    'emptyValues',
    'valueOnClear',
    'id',
  ],
})

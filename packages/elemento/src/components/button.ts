import { createInput } from '@formkit/vue'
import { ElButton } from 'element-plus'
import { defineComponent, h, markRaw } from 'vue'

// Button wrapper component
const ButtonWrapper = defineComponent({
  props: ['context'],
  setup(props) {
    return () => h(markRaw(ElButton), {
      type: props.context.buttonType || 'primary',
      size: props.context.size,
      disabled: props.context.disabled,
      loading: props.context.loading,
      plain: props.context.plain,
      round: props.context.round,
      circle: props.context.circle,
      color: props.context.color,
      dark: props.context.dark,
      autoInsertSpace: props.context.autoInsertSpace,
      onClick: props.context.onClick || (() => {}),
    }, () => props.context.children || props.context.label || 'Button')
  },
})

// Export configured FormKit button
export const buttonInput = createInput(markRaw(ButtonWrapper), {
  props: ['buttonType', 'size', 'disabled', 'loading', 'plain', 'round', 'circle', 'color', 'dark', 'autoInsertSpace', 'onClick', 'children', 'label'],
})

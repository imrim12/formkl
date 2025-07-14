import type { Formkl as FormklType } from '@formkl/shared'

import formklTheme from '@formkl/elemento'

import { mount } from '@vue/test-utils'
import FormklPlugin, { Formkl } from '..'

// @ts-ignore
import formSyntax from './syntax.form'

const form: FormklType = formSyntax

const mountOptions = {
  global: {
    plugins: [[FormklPlugin, { theme: formklTheme }]],
  },
  propsData: {
    form,
  },
} as any

describe('basic rendering usage including vite plugin.', () => {
  it('should mount the Formkl component correctly', () => {
    const wrapper = mount(Formkl, mountOptions)

    expect(wrapper).toBeTruthy()
  })

  it('should render the Formkl title correctly', () => {
    const wrapper = mount(Formkl, mountOptions)

    expect(wrapper.element.innerHTML).toContain(form.title)
  })

  it('should render the Formkl description correctly', () => {
    const wrapper = mount(Formkl, mountOptions)

    expect(wrapper.element.innerHTML).toContain(form.description)
  })

  it('should render the sections\' titles correctly', () => {
    const wrapper = mount(Formkl, mountOptions)

    form.sections.forEach((section) => {
      expect(wrapper.element.innerHTML).toContain(section.title)
    })
  })

  it('should render the fields\' labels correctly', () => {
    const wrapper = mount(Formkl, mountOptions)

    form.sections.forEach((section) => {
      section.fields.forEach((field) => {
        expect(wrapper.element.innerHTML).toContain(field.label)
      })
    })
  })
})

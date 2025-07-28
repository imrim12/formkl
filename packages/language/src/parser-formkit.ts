import type { FormKitSchemaDefinition, FormKitSchemaNode } from '@formkit/core'
import type { FieldCustom, FieldDefault, FieldSelection, Formkl } from '@formkl/shared'
import { Parser } from './parser'

/**
 * Parser that converts FormKL syntax to FormKit schema definition
 */
export class FormKitParser extends Parser {
  /**
   * Parse FormKL syntax and convert to FormKit schema
   */
  parseToFormKit(syntax: string): FormKitSchemaDefinition {
    const formkl = this.parse(syntax)
    return this.convertToFormKit(formkl)
  }

  /**
   * Convert FormKL object to FormKit schema definition
   */
  private convertToFormKit(formkl: Formkl): FormKitSchemaDefinition {
    const children: FormKitSchemaNode[] = []

    // Add title if present
    if (formkl.title) {
      children.push({
        $el: 'h1',
        children: formkl.title,
      })
    }

    // Add description if present
    if (formkl.description) {
      children.push({
        $el: 'p',
        children: formkl.description,
      })
    }

    // Process sections
    for (const section of formkl.sections) {
      if (section.multiple) {
        // Multiple section - wrap in list container
        const sectionContent: FormKitSchemaNode = {
          $formkit: 'group',
          name: '$item',
          children: [] as FormKitSchemaNode[],
        }

        // Add section title as heading if present
        if (section.title) {
          (sectionContent.children as FormKitSchemaNode[]).push({
            $el: 'h3',
            children: section.title,
          })
        }

        // Add section fields
        for (const field of section.fields) {
          (sectionContent.children as FormKitSchemaNode[]).push(this.convertField(field))
        }

        const listContainer: FormKitSchemaNode = {
          $formkit: 'list',
          name: section.key || `section_${Date.now()}`,
          label: section.title,
          min: 1,
          children: [sectionContent],
        }

        // Add max constraint if specified
        if (section.maxResponseAllowed) {
          listContainer.max = section.maxResponseAllowed
        }

        children.push(listContainer)
      }
      else if (section.title) {
        // Section with title - wrap in section container
        const sectionChildren: FormKitSchemaNode[] = [
          {
            $el: 'h2',
            children: section.title,
          },
        ]

        // Add section fields
        for (const field of section.fields) {
          sectionChildren.push(this.convertField(field))
        }

        const sectionContainer: FormKitSchemaNode = {
          $el: 'div',
          attrs: {
            class: 'formkl-section',
          },
          children: sectionChildren,
        }

        // Add section key as data attribute if present
        if (section.key) {
          if (!sectionContainer.attrs)
            sectionContainer.attrs = {}
          sectionContainer.attrs['data-section-key'] = section.key
        }

        children.push(sectionContainer)
      }
      else {
        // Section without title - add fields directly
        for (const field of section.fields) {
          children.push(this.convertField(field))
        }
      }
    }

    // Create the form schema
    const formSchema: FormKitSchemaDefinition = {
      $formkit: 'form',
      children,
    }

    // Add form-level attributes if present
    if (formkl.method && formkl.endpoint) {
      formSchema.method = formkl.method.toLowerCase()
      formSchema.action = formkl.endpoint
    }

    return formSchema
  }

  /**
   * Convert a FormKL field to FormKit field node
   */
  private convertField(field: FieldDefault | FieldSelection | FieldCustom): FormKitSchemaNode {
    const fieldNode: FormKitSchemaNode = {
      $formkit: this.mapFieldType(field.type),
      name: field.key,
      label: field.label,
    }

    // Add validation if present
    const validation = this.convertValidation(field)
    if (validation) {
      fieldNode.validation = validation
    }

    // Handle selection fields with options
    if ('options' in field && field.options) {
      fieldNode.options = field.options.map(option => ({
        label: option,
        value: option,
      }))
    }

    // Handle multiple responses
    if (field.multiple) {
      fieldNode.multiple = true
      if (field.maxResponseAllowed) {
        if (field.type === 'select') {
          fieldNode.attrs = { 'max-selections': field.maxResponseAllowed }
        }
        else {
          fieldNode.max = field.maxResponseAllowed
        }
      }
    }

    return fieldNode
  }

  /**
   * Map FormKL field type to FormKit field type
   */
  private mapFieldType(type: string): string {
    const typeMapping: Record<string, string> = {
      input: 'text',
      text: 'text',
      paragraph: 'textarea',
      textarea: 'textarea',
      email: 'email',
      tel: 'tel',
      number: 'number',
      password: 'password',
      url: 'url',
      switch: 'checkbox',
      date: 'date',
      time: 'time',
      datetime: 'datetime',
      daterange: 'date',
      timerange: 'time',
      datetimerange: 'datetime',
      select: 'select',
      radio: 'radio',
      checkbox: 'checkbox',
    }

    return typeMapping[type] || 'text'
  }

  /**
   * Convert FormKL validation to FormKit validation string
   */
  private convertValidation(field: FieldDefault | FieldSelection | FieldCustom): string | undefined {
    const validationRules: string[] = []

    // Add required validation
    if (field.required) {
      validationRules.push('required')
    }

    if (field.validation) {
      // Handle regex validation
      if (field.validation.regex) {
        const regexPattern = field.validation.regex.source
        validationRules.push(`matches:/${regexPattern}/`)
      }

      // Handle logic validation
      if (field.validation.logic) {
        const logicValidation = this.convertLogicValidation(field.validation.logic)
        if (logicValidation) {
          validationRules.push(logicValidation)
        }
      }
    }

    return validationRules.length > 0 ? validationRules.join('|') : undefined
  }

  /**
   * Convert FormKL logic validation to FormKit validation
   */
  private convertLogicValidation(logic: any): string | undefined {
    if (logic.$gt !== undefined) {
      return `min:${logic.$gt + 1}`
    }
    if (logic.$gte !== undefined) {
      return `min:${logic.$gte}`
    }
    if (logic.$lt !== undefined) {
      return `max:${logic.$lt - 1}`
    }
    if (logic.$lte !== undefined) {
      return `max:${logic.$lte}`
    }
    if (logic.$eq !== undefined) {
      return `is:${logic.$eq}`
    }
    if (logic.$neq !== undefined) {
      return `not:${logic.$neq}`
    }
    if (logic.$has !== undefined) {
      return `contains:${logic.$has}`
    }

    // For length validation on strings (like paragraph with character count)
    if (logic.$gt !== undefined && typeof logic.$gt === 'number') {
      return `length:${logic.$gt + 1}`
    }

    return undefined
  }
}

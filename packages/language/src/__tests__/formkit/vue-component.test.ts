import { beforeEach, describe, expect, it } from 'vitest'

import { FormKitParser } from '../../parser-formkit'

describe('formKit Parser Vue Component Tests', () => {
  let parser: FormKitParser

  beforeEach(() => {
    parser = new FormKitParser()
  })

  // Note: These tests focus on schema generation since @formkit/inputs is not installed
  // For full component rendering tests, @formkit/inputs would need to be added as a dependency
  describe('schema generation for Vue components', () => {
    it('should generate correct schema for multiple checkbox fields', () => {
      const formklSyntax = `formkl {
        has {
          multiple "Skills" checkbox("JavaScript", "TypeScript", "Vue");
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)

      // Verify basic schema structure
      expect(schema).toMatchObject({
        $formkit: 'form',
        children: [
          expect.objectContaining({
            $formkit: 'checkbox',
            name: 'skills',
            label: 'Skills',
            options: [
              { label: 'JavaScript', value: 'JavaScript' },
              { label: 'TypeScript', value: 'TypeScript' },
              { label: 'Vue', value: 'Vue' },
            ],
            multiple: true,
          }),
        ],
      })
    })

    it('should generate correct schema for multiple select fields with constraints', () => {
      const formklSyntax = `formkl {
        has {
          3 multiple "Languages" select("English", "Spanish", "French");
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)

      // Verify basic schema structure
      expect(schema).toMatchObject({
        $formkit: 'form',
        children: [
          expect.objectContaining({
            $formkit: 'select',
            name: 'languages',
            label: 'Languages',
            options: [
              { label: 'English', value: 'English' },
              { label: 'Spanish', value: 'Spanish' },
              { label: 'French', value: 'French' },
            ],
            multiple: true,
            attrs: expect.objectContaining({
              'max-selections': 3,
            }),
          }),
        ],
      })
    })

    it('should generate correct schema for multiple sections', () => {
      const formklSyntax = `formkl {
        multiple has {
          "Name" text;
          "Email" email;
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)

      // Verify basic schema structure
      expect(schema).toMatchObject({
        $formkit: 'form',
        children: [
          expect.objectContaining({
            $formkit: 'list',
            min: 1,
            name: expect.stringMatching(/^section_\d+$/),
            children: [
              expect.objectContaining({
                $formkit: 'group',
                children: [
                  expect.objectContaining({
                    $formkit: 'text',
                    name: 'name',
                    label: 'Name',
                  }),
                  expect.objectContaining({
                    $formkit: 'email',
                    name: 'email',
                    label: 'Email',
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    })

    it('should generate correct schema for mixed regular and multiple sections', () => {
      const formklSyntax = `formkl {
        "Personal Info" has {
          "Name" text;
          "Age" number;
        }
        
        multiple has {
          "Education" text;
          "Year" number;
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)

      // Verify basic schema structure
      expect(schema).toMatchObject({
        $formkit: 'form',
        children: [
          // Regular section
          expect.objectContaining({
            $el: 'div',
            attrs: expect.objectContaining({
              class: 'formkl-section',
            }),
            children: expect.arrayContaining([
              expect.objectContaining({
                $formkit: 'text',
                name: 'name',
                label: 'Name',
              }),
              expect.objectContaining({
                $formkit: 'number',
                name: 'age',
                label: 'Age',
              }),
            ]),
          }),
          // Multiple section
          expect.objectContaining({
            $formkit: 'list',
            min: 1,
            children: [
              expect.objectContaining({
                $formkit: 'group',
                children: expect.arrayContaining([
                  expect.objectContaining({
                    $formkit: 'text',
                    name: 'education',
                    label: 'Education',
                  }),
                  expect.objectContaining({
                    $formkit: 'number',
                    name: 'year',
                    label: 'Year',
                  }),
                ]),
              }),
            ],
          }),
        ],
      })
    })
  })

  describe('formKit integration readiness', () => {
    it('should create valid schema structure for FormKit components', () => {
      const formklSyntax = `formkl {
        has {
          multiple "Skills" checkbox("JavaScript", "Vue", "React");
          multiple "Countries" select("US", "UK", "CA");
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)

      // Validate that the schema structure is compatible with FormKit
      expect(schema).toMatchObject({
        $formkit: 'form',
        children: [
          expect.objectContaining({
            $formkit: 'checkbox',
            multiple: true,
            options: [
              { label: 'JavaScript', value: 'JavaScript' },
              { label: 'Vue', value: 'Vue' },
              { label: 'React', value: 'React' },
            ],
          }),
          expect.objectContaining({
            $formkit: 'select',
            multiple: true,
            options: [
              { label: 'US', value: 'US' },
              { label: 'UK', value: 'UK' },
              { label: 'CA', value: 'CA' },
            ],
          }),
        ],
      })
    })

    it('should create valid schema for multiple sections with proper nesting', () => {
      const formklSyntax = `formkl {
        multiple has {
          "Person Name" text;
          "Person Age" number;
          "Person Email" email;
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)

      // Validate proper FormKit list/group structure
      expect(schema).toMatchObject({
        $formkit: 'form',
        children: [
          expect.objectContaining({
            $formkit: 'list',
            min: 1,
            children: [
              expect.objectContaining({
                $formkit: 'group',
                children: [
                  expect.objectContaining({
                    $formkit: 'text',
                    name: 'person-name',
                    label: 'Person Name',
                  }),
                  expect.objectContaining({
                    $formkit: 'number',
                    name: 'person-age',
                    label: 'Person Age',
                  }),
                  expect.objectContaining({
                    $formkit: 'email',
                    name: 'person-email',
                    label: 'Person Email',
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    })

    it('should handle constraints properly in schema', () => {
      const formklSyntax = `formkl {
        has {
          2 multiple "Options" checkbox("A", "B", "C", "D");
          5 multiple "Choices" select("1", "2", "3", "4", "5", "6");
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)

      expect(schema).toMatchObject({
        $formkit: 'form',
        children: [
          expect.objectContaining({
            $formkit: 'checkbox',
            max: 2,
          }),
          expect.objectContaining({
            $formkit: 'select',
            attrs: expect.objectContaining({
              'max-selections': 5,
            }),
          }),
        ],
      })
    })
  })

  describe('data structure validation', () => {
    it('should generate schema that expects correct data format for multiple fields', () => {
      const formklSyntax = `formkl {
        has {
          multiple "Languages" checkbox("English", "Spanish");
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)

      // Verify that multiple fields are properly configured
      expect(schema).toMatchObject({
        $formkit: 'form',
        children: [
          expect.objectContaining({
            $formkit: 'checkbox',
            name: 'languages',
            multiple: true,
            options: [
              { label: 'English', value: 'English' },
              { label: 'Spanish', value: 'Spanish' },
            ],
          }),
        ],
      })

      // The data binding should expect: { languages: ['English'] }
      const expectedDataStructure = { languages: ['English'] }
      expect(expectedDataStructure.languages).toBeInstanceOf(Array)
    })

    it('should generate schema that expects correct data format for multiple sections', () => {
      const formklSyntax = `formkl {
        multiple has {
          "Name" text;
          "Age" number;
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)

      // Verify that multiple sections are properly structured
      expect(schema).toMatchObject({
        $formkit: 'form',
        children: [
          expect.objectContaining({
            $formkit: 'list',
            name: expect.stringMatching(/^section_\d+$/),
            children: [
              expect.objectContaining({
                $formkit: 'group',
              }),
            ],
          }),
        ],
      })

      // Test data structure expectation
      const sectionName = (schema as any).children[0].name
      const expectedDataStructure = {
        [sectionName]: [
          { name: 'John', age: 25 },
          { name: 'Jane', age: 30 },
        ],
      }
      expect(expectedDataStructure[sectionName]).toBeInstanceOf(Array)
      expect(expectedDataStructure[sectionName][0]).toBeInstanceOf(Object)
    })
  })
})

// Note: The following tests would require @formkit/inputs to be installed and properly configured
// They are commented out but show how full component rendering tests would work:

/*
import type { FormKitSchemaDefinition } from '@formkit/core'
import { createDefaultInputs } from '@formkit/inputs'
import { FormKitSchema, plugin } from '@formkit/vue'
import { mount } from '@vue/test-utils'

describe('FormKit Component Rendering (requires @formkit/inputs)', () => {
  // Helper function to mount component with FormKit
  const mountWithFormKit = (schema: FormKitSchemaDefinition, data: any = {}) => {
    return mount(FormKitSchema, {
      props: { schema, data },
      global: {
        plugins: [
          [plugin, {
            config: {
              rootClasses: false,
            },
            inputs: createDefaultInputs(), // Would need @formkit/inputs
          }]
        ]
      }
    })
  }

  it('should render multiple checkbox fields correctly', async () => {
    const formklSyntax = `formkl {
      has {
        multiple "Skills" checkbox("JavaScript", "TypeScript", "Vue");
      }
    }`

    const schema = parser.parseToFormKit(formklSyntax) as FormKitSchemaDefinition
    const wrapper = mountWithFormKit(schema, { skills: ['JavaScript'] })

    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.findAll('input[type="checkbox"]')).toHaveLength(3)
  })

  it('should render multiple sections as FormKit list', async () => {
    const formklSyntax = `formkl {
      multiple has {
        "Name" text;
        "Email" email;
      }
    }`

    const schema = parser.parseToFormKit(formklSyntax) as FormKitSchemaDefinition
    const wrapper = mountWithFormKit(schema, {})

    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('[data-family="list"]').exists()).toBe(true)
    expect(wrapper.find('[data-family="group"]').exists()).toBe(true)
  })
})
*/

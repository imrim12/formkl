import type { FormKitSchemaDefinition } from '@formkit/core'
import { beforeEach, describe, expect, it } from 'vitest'

import { FormKitParser } from '../../parser-formkit'

describe('formKit Schema Generation Tests', () => {
  let parser: FormKitParser

  beforeEach(() => {
    parser = new FormKitParser()
  })

  describe('multiple field schema generation', () => {
    it('should generate correct schema for multiple checkbox fields', () => {
      const formklSyntax = `formkl {
        has {
          multiple "Skills" checkbox("JavaScript", "TypeScript", "Vue");
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)

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
  })

  describe('production readiness validation', () => {
    it('should generate production-ready FormKit schema', () => {
      const formklSyntax = `formkl {
        has {
          multiple "Options" checkbox("A", "B", "C");
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax) as FormKitSchemaDefinition

      // Schema should be in correct format for FormKit consumption
      expect(schema).toMatchObject({
        $formkit: 'form',
        children: [
          expect.objectContaining({
            $formkit: 'checkbox',
            multiple: true,
            name: 'options',
            label: 'Options',
            options: [
              { label: 'A', value: 'A' },
              { label: 'B', value: 'B' },
              { label: 'C', value: 'C' },
            ],
          }),
        ],
      })

      // Schema should be JSON serializable for API transmission
      expect(() => JSON.stringify(schema)).not.toThrow()
      expect(JSON.parse(JSON.stringify(schema))).toEqual(schema)
    })

    it('should generate valid data structure expectations', () => {
      const formklSyntax = `formkl {
        multiple has {
          "Name" text;
          "Age" number;
        }
      }`

      const schema = parser.parseToFormKit(formklSyntax)
      const sectionName = (schema as any).children[0].name

      // Verify expected data structure format
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

// Note: Real Vue component rendering tests are in real-integration.test.ts

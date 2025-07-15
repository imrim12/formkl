import { beforeEach, describe, expect, it } from 'vitest'
import { FormKitParser } from '../../parser-formkit'

describe('formKit Parser - Multiple Features', () => {
  let parser: FormKitParser

  beforeEach(() => {
    parser = new FormKitParser()
  })

  describe('multiple Fields', () => {
    it('should handle multiple checkbox fields', () => {
      const formklSyntax = `formkl {
        has {
          multiple "Skills" checkbox("JavaScript", "TypeScript", "Vue", "React");
        }
      }`

      const result = parser.parseToFormKit(formklSyntax)

      expect(result).toStrictEqual({
        $formkit: 'form',
        children: [
          {
            $formkit: 'checkbox',
            name: 'skills',
            label: 'Skills',
            multiple: true,
            options: [
              { label: 'JavaScript', value: 'JavaScript' },
              { label: 'TypeScript', value: 'TypeScript' },
              { label: 'Vue', value: 'Vue' },
              { label: 'React', value: 'React' },
            ],
          },
        ],
      })
    })

    it('should handle multiple select fields with max constraint', () => {
      const formklSyntax = `formkl {
        has {
          3 multiple "Languages" select("English", "Spanish", "French", "German");
        }
      }`

      const result = parser.parseToFormKit(formklSyntax)

      expect(result).toStrictEqual({
        $formkit: 'form',
        children: [
          {
            $formkit: 'select',
            name: 'languages',
            label: 'Languages',
            multiple: true,
            attrs: {
              'max-selections': 3,
            },
            options: [
              { label: 'English', value: 'English' },
              { label: 'Spanish', value: 'Spanish' },
              { label: 'French', value: 'French' },
              { label: 'German', value: 'German' },
            ],
          },
        ],
      })
    })

    it('should handle multiple radio fields with max constraint', () => {
      const formklSyntax = `formkl {
        has {
          2 multiple "Preferences" radio("Option A", "Option B", "Option C");
        }
      }`

      const result = parser.parseToFormKit(formklSyntax)

      expect(result).toStrictEqual({
        $formkit: 'form',
        children: [
          {
            $formkit: 'radio',
            name: 'preferences',
            label: 'Preferences',
            multiple: true,
            max: 2,
            options: [
              { label: 'Option A', value: 'Option A' },
              { label: 'Option B', value: 'Option B' },
              { label: 'Option C', value: 'Option C' },
            ],
          },
        ],
      })
    })

    it('should handle mixed multiple and single fields', () => {
      const formklSyntax = `formkl {
        has {
          "Name" text;
          multiple "Skills" checkbox("JavaScript", "Vue");
          "Email" email;
          3 multiple "Languages" select("English", "Spanish");
        }
      }`

      const result = parser.parseToFormKit(formklSyntax)

      expect(result).toStrictEqual({
        $formkit: 'form',
        children: [
          {
            $formkit: 'text',
            name: 'name',
            label: 'Name',
          },
          {
            $formkit: 'checkbox',
            name: 'skills',
            label: 'Skills',
            multiple: true,
            options: [
              { label: 'JavaScript', value: 'JavaScript' },
              { label: 'Vue', value: 'Vue' },
            ],
          },
          {
            $formkit: 'email',
            name: 'email',
            label: 'Email',
          },
          {
            $formkit: 'select',
            name: 'languages',
            label: 'Languages',
            multiple: true,
            attrs: {
              'max-selections': 3,
            },
            options: [
              { label: 'English', value: 'English' },
              { label: 'Spanish', value: 'Spanish' },
            ],
          },
        ],
      })
    })
  })

  describe('multiple Sections', () => {
    it('should handle multiple sections with list container', () => {
      const formklSyntax = `formkl {
        multiple has {
          "Name" text;
          "Email" email;
        }
      }`

      const result = parser.parseToFormKit(formklSyntax)

      expect(result).toEqual({
        $formkit: 'form',
        children: [
          {
            $formkit: 'list',
            name: expect.stringMatching(/^section_\d+$/),
            label: undefined,
            min: 1,
            children: [
              {
                $formkit: 'group',
                name: '$item',
                children: [
                  {
                    $formkit: 'text',
                    name: 'name',
                    label: 'Name',
                  },
                  {
                    $formkit: 'email',
                    name: 'email',
                    label: 'Email',
                  },
                ],
              },
            ],
          },
        ],
      })
    })

    it('should handle multiple sections with max constraint', () => {
      const formklSyntax = `formkl {
        multiple has {
          "Company" text;
          "Position" text;
          "Years" number;
        }
      }`

      const result = parser.parseToFormKit(formklSyntax)

      expect(result).toEqual({
        $formkit: 'form',
        children: [
          {
            $formkit: 'list',
            name: expect.stringMatching(/^section_\d+$/),
            label: undefined,
            min: 1,
            children: [
              {
                $formkit: 'group',
                name: '$item',
                children: [
                  {
                    $formkit: 'text',
                    name: 'company',
                    label: 'Company',
                  },
                  {
                    $formkit: 'text',
                    name: 'position',
                    label: 'Position',
                  },
                  {
                    $formkit: 'number',
                    name: 'years',
                    label: 'Years',
                  },
                ],
              },
            ],
          },
        ],
      })
    })

    it('should handle mixed regular and multiple sections', () => {
      const formklSyntax = `formkl {
        "Personal Info" has {
          "Name" text;
          "Age" number;
        }
        
        multiple has {
          "School" text;
          "Degree" text;
          "Year" number;
        }
      }`

      const result = parser.parseToFormKit(formklSyntax)

      expect(result).toEqual({
        $formkit: 'form',
        children: [
          {
            $el: 'div',
            attrs: {
              'class': 'formkl-section',
              'data-section-key': 'personal-info',
            },
            children: [
              {
                $el: 'h2',
                children: 'Personal Info',
              },
              {
                $formkit: 'text',
                name: 'name',
                label: 'Name',
              },
              {
                $formkit: 'number',
                name: 'age',
                label: 'Age',
              },
            ],
          },
          {
            $formkit: 'list',
            name: expect.stringMatching(/^section_\d+$/),
            label: undefined,
            min: 1,
            children: [
              {
                $formkit: 'group',
                name: '$item',
                children: [
                  {
                    $formkit: 'text',
                    name: 'school',
                    label: 'School',
                  },
                  {
                    $formkit: 'text',
                    name: 'degree',
                    label: 'Degree',
                  },
                  {
                    $formkit: 'number',
                    name: 'year',
                    label: 'Year',
                  },
                ],
              },
            ],
          },
        ],
      })
    })
  })

  describe('edge Cases', () => {
    it('should handle empty multiple sections', () => {
      const formklSyntax = `formkl {
        multiple has {
          text;
        }
      }`

      const result = parser.parseToFormKit(formklSyntax)

      expect(result).toEqual({
        $formkit: 'form',
        children: [
          {
            $formkit: 'list',
            name: expect.stringMatching(/^section_\d+$/),
            label: undefined,
            min: 1,
            children: [
              {
                $formkit: 'group',
                name: '$item',
                children: [
                  {
                    $formkit: 'text',
                    name: 'text',
                    label: 'Text',
                  },
                ],
              },
            ],
          },
        ],
      })
    })

    it('should handle multiple constraints edge cases', () => {
      const formklSyntax = `formkl {
        has {
          1 multiple "One Max" select("X", "Y");
        }
      }`

      const result = parser.parseToFormKit(formklSyntax)

      expect(result).toStrictEqual({
        $formkit: 'form',
        children: [
          {
            $formkit: 'select',
            name: 'one-max',
            label: 'One Max',
            multiple: true,
            attrs: {
              'max-selections': 1,
            },
            options: [
              { label: 'X', value: 'X' },
              { label: 'Y', value: 'Y' },
            ],
          },
        ],
      })
    })
  })
})

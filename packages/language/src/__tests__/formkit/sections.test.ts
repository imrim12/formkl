import { FormKitParser } from '../../parser-formkit'

describe('formKit parser - sections', () => {
  let parser: FormKitParser

  beforeEach(() => {
    parser = new FormKitParser()
  })

  it('should handle sections with titles', () => {
    const formklSyntax = `formkl {
      "Contact Information" has {
        "Full Name" text;
        "Email" email;
      }
      "Additional Info" has {
        "Phone" text;
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $el: 'div',
          attrs: {
            'class': 'formkl-section',
            'data-section-key': 'contact-information',
          },
          children: [
            {
              $el: 'h2',
              children: 'Contact Information',
            },
            {
              $formkit: 'text',
              name: 'full-name',
              label: 'Full Name',
            },
            {
              $formkit: 'email',
              name: 'email',
              label: 'Email',
            },
          ],
        },
        {
          $el: 'div',
          attrs: {
            'class': 'formkl-section',
            'data-section-key': 'additional-info',
          },
          children: [
            {
              $el: 'h2',
              children: 'Additional Info',
            },
            {
              $formkit: 'text',
              name: 'phone',
              label: 'Phone',
            },
          ],
        },
      ],
    })
  })

  it('should handle sections with aliases', () => {
    const formklSyntax = `formkl {
      "Contact Information" has {
        text;
      } as "contact"
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $el: 'div',
          attrs: {
            'class': 'formkl-section',
            'data-section-key': 'contact',
          },
          children: [
            {
              $el: 'h2',
              children: 'Contact Information',
            },
            {
              $formkit: 'text',
              name: 'text',
              label: 'Text',
            },
          ],
        },
      ],
    })
  })

  it('should handle multiple sections without titles', () => {
    const formklSyntax = `formkl {
      has {
        "Name" text;
      } as "personal"
      has {
        "Email" email;
      } as "contact"
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
          $formkit: 'email',
          name: 'email',
          label: 'Email',
        },
      ],
    })
  })
})

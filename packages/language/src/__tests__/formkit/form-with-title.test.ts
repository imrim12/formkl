import { FormKitParser } from '../../parser-formkit'

describe('formKit parser - form with title and description', () => {
  let parser: FormKitParser

  beforeEach(() => {
    parser = new FormKitParser()
  })

  it('should parse form with title to FormKit schema', () => {
    const formklSyntax = `formkl "Contact Form" {
      has {
        $text;
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $el: 'h1',
          children: 'Contact Form',
        },
        {
          $formkit: 'text',
          name: 'text',
          label: 'Text',
        },
      ],
    })
  })

  it('should parse form with title and description to FormKit schema', () => {
    const formklSyntax = `formkl "Contact Form" "Please fill out this form" {
      has {
        $text;
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $el: 'h1',
          children: 'Contact Form',
        },
        {
          $el: 'p',
          children: 'Please fill out this form',
        },
        {
          $formkit: 'text',
          name: 'text',
          label: 'Text',
        },
      ],
    })
  })

  it('should parse form with HTTP method and endpoint', () => {
    const formklSyntax = `formkl post("https://api.example.com/submit") "Contact Form" {
      has {
        $text;
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      method: 'post',
      action: 'https://api.example.com/submit',
      children: [
        {
          $el: 'h1',
          children: 'Contact Form',
        },
        {
          $formkit: 'text',
          name: 'text',
          label: 'Text',
        },
      ],
    })
  })
})

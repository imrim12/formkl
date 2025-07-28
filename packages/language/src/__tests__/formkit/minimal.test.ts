import { FormKitParser } from '../../parser-formkit'

describe('formKit parser - minimal test', () => {
  let parser: FormKitParser

  beforeEach(() => {
    parser = new FormKitParser()
  })

  it('should parse minimal form syntax to FormKit schema', () => {
    const formklSyntax = `formkl {
      has {
        $text;
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'text',
          name: 'text',
          label: 'Text',
        },
      ],
    })
  })

  it('should handle required fields', () => {
    const formklSyntax = `formkl {
      has {
        require $text;
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'text',
          name: 'text',
          label: 'Text',
          validation: 'required',
        },
      ],
    })
  })

  it('should handle field labels', () => {
    const formklSyntax = `formkl {
      has {
        "Full Name" $text;
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'text',
          name: 'full-name',
          label: 'Full Name',
        },
      ],
    })
  })

  it('should handle field aliases', () => {
    const formklSyntax = `formkl {
      has {
        "Full Name" $text as "name";
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'text',
          name: 'name',
          label: 'Full Name',
        },
      ],
    })
  })
})

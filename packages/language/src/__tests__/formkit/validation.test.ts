import { FormKitParser } from '../../parser-formkit'

describe('formKit parser - validation', () => {
  let parser: FormKitParser

  beforeEach(() => {
    parser = new FormKitParser()
  })

  it('should handle regex validation', () => {
    const formklSyntax = `formkl {
      has {
        "Email" email regex("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'email',
          name: 'email',
          label: 'Email',
          validation: 'matches:/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/',
        },
      ],
    })
  })

  it('should handle logic validation with greater than', () => {
    const formklSyntax = `formkl {
      has {
        "Age" number valid(> 18);
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'number',
          name: 'age',
          label: 'Age',
          validation: 'min:19',
        },
      ],
    })
  })

  it('should handle logic validation with less than', () => {
    const formklSyntax = `formkl {
      has {
        "Score" number valid(< 100);
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'number',
          name: 'score',
          label: 'Score',
          validation: 'max:99',
        },
      ],
    })
  })

  it('should handle logic validation with equality', () => {
    const formklSyntax = `formkl {
      has {
        "Status" text valid(== "active");
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'text',
          name: 'status',
          label: 'Status',
          validation: 'is:active',
        },
      ],
    })
  })

  it('should handle complex validation with required and regex', () => {
    const formklSyntax = `formkl {
      has {
        require "Phone" text regex("^\\+?[1-9]\\d{1,14}$");
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'text',
          name: 'phone',
          label: 'Phone',
          validation: 'required|matches:/^\\+?[1-9]\\d{1,14}$/',
        },
      ],
    })
  })

  it('should handle multiple validation rules', () => {
    const formklSyntax = `formkl {
      has {
        require "Password" text valid(> 8) regex("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$");
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'text',
          name: 'password',
          label: 'Password',
          validation: 'required|matches:/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/|min:9',
        },
      ],
    })
  })
})

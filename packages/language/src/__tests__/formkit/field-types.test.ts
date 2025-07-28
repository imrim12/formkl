import { FormKitParser } from '../../parser-formkit'

describe('formKit parser - field types', () => {
  let parser: FormKitParser

  beforeEach(() => {
    parser = new FormKitParser()
  })

  it('should handle different field types', () => {
    const formklSyntax = `formkl {
      has {
        text;
        paragraph;
        switch;
        number;
        date;
        time;
        datetime;
        daterange;
        timerange;
        datetimerange;
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
        {
          $formkit: 'textarea',
          name: 'paragraph',
          label: 'Paragraph',
        },
        {
          $formkit: 'checkbox',
          name: 'switch',
          label: 'Switch',
        },
        {
          $formkit: 'number',
          name: 'number',
          label: 'Number',
        },
        {
          $formkit: 'date',
          name: 'date',
          label: 'Date',
        },
        {
          $formkit: 'time',
          name: 'time',
          label: 'Time',
        },
        {
          $formkit: 'datetime',
          name: 'datetime',
          label: 'Datetime',
        },
        {
          $formkit: 'date',
          name: 'daterange',
          label: 'Daterange',
        },
        {
          $formkit: 'time',
          name: 'timerange',
          label: 'Timerange',
        },
        {
          $formkit: 'datetime',
          name: 'datetimerange',
          label: 'Datetimerange',
        },
      ],
    })
  })

  it('should handle selection fields with options', () => {
    const formklSyntax = `formkl {
      has {
        "Priority" select("Low", "Medium", "High");
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'select',
          name: 'priority',
          label: 'Priority',
          options: [
            { label: 'Low', value: 'Low' },
            { label: 'Medium', value: 'Medium' },
            { label: 'High', value: 'High' },
          ],
        },
      ],
    })
  })

  it('should handle radio fields with options', () => {
    const formklSyntax = `formkl {
      has {
        "Gender" radio("Male", "Female", "Other");
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'radio',
          name: 'gender',
          label: 'Gender',
          options: [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Other', value: 'Other' },
          ],
        },
      ],
    })
  })

  it('should handle checkbox fields with options', () => {
    const formklSyntax = `formkl {
      has {
        "Interests" checkbox("Sports", "Music", "Art");
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'checkbox',
          name: 'interests',
          label: 'Interests',
          options: [
            { label: 'Sports', value: 'Sports' },
            { label: 'Music', value: 'Music' },
            { label: 'Art', value: 'Art' },
          ],
        },
      ],
    })
  })
})

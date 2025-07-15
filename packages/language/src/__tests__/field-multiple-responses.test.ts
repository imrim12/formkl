/* eslint-disable style/no-tabs */
import parser, { defineForm } from '../'

describe('field with multiple responses support', () => {
  it('should parse the form syntax correctly', () => {
    const result = parser.parse(`formkl {
      has {
        multiple text;
      }
    }`)

    expect(result).toStrictEqual(
      defineForm({
        model: 'base',
        sections: [
          {
            fields: [
              {
                type: 'text',
                label: 'Text',
                key: 'text',
                multiple: true,
              },
            ],
          },
        ],
      }),
    )
  })

  it('should parse the form syntax correctly with multiple required fields', () => {
    const result = parser.parse(`formkl {
      has {
        require multiple text;
      }
    }`)

    expect(result).toStrictEqual(
      defineForm({
        model: 'base',
        sections: [
          {
            fields: [
              {
                type: 'text',
                label: 'Text',
                key: 'text',
                required: true,
                multiple: true,
              },
            ],
          },
        ],
      }),
    )
  })

  it('should parse the form syntax correctly with multiple required number fields', () => {
    const result = parser.parse(`formkl {
      has {
        require multiple number;
      }
    }`)

    expect(result).toStrictEqual(
      defineForm({
        model: 'base',
        sections: [
          {
            fields: [
              {
                type: 'number',
                label: 'Number',
                key: 'number',
                required: true,
                multiple: true,
              },
            ],
          },
        ],
      }),
    )
  })

  it('should stringify the formkl object correctly', () => {
    const result = parser.stringify(
      defineForm({
        model: 'base',
        sections: [
          {
            fields: [
              {
                type: 'text',
                label: 'Text',
                key: 'text',
                required: true,
                multiple: true,
              },
            ],
          },
        ],
      }),
    )

    expect(result).toBe(
      `formkl {
	has {
		require multiple text;
	}
}`,
    )
  })
})

import { isValueValidated } from '@formkl/shared'

describe('test recursive validator', () => {
  it('should return true', () => {
    const result = isValueValidated('test something with or', {
      logic: {
        $or: [
          {
            $gt: 10,
          },
          {
            $has: 'something',
          },
        ],
      },
    })

    expect(result).toBe(true)
  })
})

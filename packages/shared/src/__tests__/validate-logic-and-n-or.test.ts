import { isValueValidated } from '@formkl/shared'

describe('test recursive validator', () => {
  it('should return true', () => {
    const result = isValueValidated('test something with and', {
      logic: {
        $or: [
          {
            $has: 'something',
          },
          {
            $and: [
              {
                $gt: 10,
              },
              {
                $lt: 15,
              },
            ],
          },
        ],
      },
    })

    expect(result).toBe(true)
  })
})

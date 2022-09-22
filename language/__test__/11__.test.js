const fs = require('fs');
const path = require('path');
const parser = require(path.resolve(__dirname, '../dist/index.js'));

const testCase = 'formkl {"Personal Information" includes {require "Date of birth" birthday;}}';

describe('test', () => {
  it('should parse the form syntax correctly', () => {
    const result = parser.parse(testCase);

    fs.writeFileSync(
      path.resolve(__dirname, '../logs/11__.result.json'),
      JSON.stringify(result, null, 2),
    );

    expect(result).toStrictEqual({
      model: 'base',
      method: '',
      endpoint: '',
      title: '',
      description: '',
      sections: [
        {
          title: 'Personal Information',
          key: 'personal-information',
          multiple: false,
          fields: [
            {
              type: 'birthday',
              label: 'Date of birth',
              require: true,
              key: 'date-of-birth',
              multiple: false,
            },
          ],
        },
      ],
    });
  });
});

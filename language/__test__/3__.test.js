const fs = require('fs');
const path = require('path');
const parser = require(path.resolve(__dirname, '../dist/index.js'));

const testCase = ' formkl base{"Personal Information"  includes   {require email;}}';

describe('test', () => {
  it('should parse the form syntax correctly', () => {
    const result = parser.parse(testCase);

    fs.writeFileSync(
      path.resolve(__dirname, '../logs/3__.result.json'),
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
              type: 'email',
              label: 'Email',
              require: true,
              key: 'email',
              multiple: false,
            },
          ],
        },
      ],
    });
  });
});
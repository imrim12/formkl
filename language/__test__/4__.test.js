const fs = require('fs');
const path = require('path');
const parser = require(path.resolve(__dirname, '../dist/index.js'));

const testCase = 'formkl { "Personal Information"    includes {require "Fullname" text;}}';

describe('test', () => {
  it('should parse the form syntax correctly', () => {
    const result = parser.parse(testCase);

    fs.writeFileSync(
      path.resolve(__dirname, '../logs/4__.result.json'),
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
              type: 'text',
              label: 'Fullname',
              require: true,
              key: 'fullname',
              multiple: false,
            },
          ],
        },
      ],
    });
  });
});

const fs = require('fs');
const path = require('path');
const parser = require(path.resolve(__dirname, '../dist/index.js'));

const testCase = ' formkl flat {"Personal Information" includes  {require time;}}';

describe('test', () => {
  it('should parse the form syntax correctly', () => {
    const result = parser.parse(testCase);

    fs.writeFileSync(
      path.resolve(__dirname, '../logs/10__.result.json'),
      JSON.stringify(result, null, 2),
    );

    expect(result).toStrictEqual({
      model: 'flat',
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
              type: 'time',
              label: 'Time',
              require: true,
              key: 'time',
              multiple: false,
            },
          ],
        },
      ],
    });
  });
});

const fs = require('fs');
const path = require('path');
const parser = require(path.resolve(__dirname, '../dist/index.js'));

const testCase = ` Formkl flat {
  // Your info
"Personal Information"includes {
 "Fullname" text;
 VN phone;
}
"Personal Information"includes {
  "Fullname" text;
  require zip;
  require zip;
  "Bio" paragraph;
  "Datetime Range" datetimerange;
  "Datetime" datetime;
  "Date Range" daterange;
  "Time Range" timerange;
  "Time" time;
  "Date" date;
  "Future Date" future date;
  "Past Date" past date;
  "Birthday" birthday;

}
"Personal Information"includes {
  "Fullname" text;
  require zip;
  require zip;
  "Bio" paragraph;
}
}`;

describe('test', () => {
  it('should parse the form syntax correctly', () => {
    const result = parser.parse(testCase);

    fs.writeFileSync(
      path.resolve(__dirname, '../logs/1__.result.json'),
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
              type: 'text',
              label: 'Fullname',
              require: false,
              key: 'fullname',
              multiple: false,
            },
            {
              type: 'VN phone',
              label: 'VN Phone',
              require: false,
              key: 'vn-phone',
              multiple: false,
            },
          ],
        },
        {
          title: 'Personal Information',
          key: 'personal-information1',
          multiple: false,
          fields: [
            {
              type: 'text',
              label: 'Fullname',
              require: false,
              key: 'fullname1',
              multiple: false,
            },
            {
              type: 'zip',
              label: 'Zip',
              require: true,
              key: 'zip',
              multiple: false,
            },
            {
              type: 'zip',
              label: 'Zip',
              require: true,
              key: 'zip1',
              multiple: false,
            },
            {
              type: 'paragraph',
              label: 'Bio',
              require: false,
              key: 'bio',
              multiple: false,
            },
            {
              type: 'datetimerange',
              label: 'Datetime Range',
              require: false,
              key: 'datetime-range',
              multiple: false,
            },
            {
              type: 'datetime',
              label: 'Datetime',
              require: false,
              key: 'datetime',
              multiple: false,
            },
            {
              type: 'daterange',
              label: 'Date Range',
              require: false,
              key: 'date-range',
              multiple: false,
            },
            {
              type: 'timerange',
              label: 'Time Range',
              require: false,
              key: 'time-range',
              multiple: false,
            },
            {
              type: 'time',
              label: 'Time',
              require: false,
              key: 'time',
              multiple: false,
            },
            {
              type: 'date',
              label: 'Date',
              require: false,
              key: 'date',
              multiple: false,
            },
            {
              type: 'future date',
              label: 'Future Date',
              require: false,
              key: 'future-date',
              multiple: false,
            },
            {
              type: 'past date',
              label: 'Past Date',
              require: false,
              key: 'past-date',
              multiple: false,
            },
            {
              type: 'birthday',
              label: 'Birthday',
              require: false,
              key: 'birthday',
              multiple: false,
            },
          ],
        },
        {
          title: 'Personal Information',
          key: 'personal-information2',
          multiple: false,
          fields: [
            {
              type: 'text',
              label: 'Fullname',
              require: false,
              key: 'fullname2',
              multiple: false,
            },
            {
              type: 'zip',
              label: 'Zip',
              require: true,
              key: 'zip2',
              multiple: false,
            },
            {
              type: 'zip',
              label: 'Zip',
              require: true,
              key: 'zip3',
              multiple: false,
            },
            {
              type: 'paragraph',
              label: 'Bio',
              require: false,
              key: 'bio1',
              multiple: false,
            },
          ],
        },
      ],
    });
  });
});

const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = `
formkl {
  "Personal Information"includes {
    text valid( > 10 and (< 123) or (< 512 or < 2000 or == 678) );
   }
}
`;

test(testCase, () => {
  const result = parser.parse(testCase);

  console.log(JSON.stringify(result, null, 2));

  expect(result).toStrictEqual({
    model: "base",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        fields: [
          {
            type: "text",
            label: "Text",
            require: false,
            key: "text",
            validation: {
              $or: [
                {
                  $and: [
                    {
                      $gt: 10,
                    },
                    {
                      $lt: 123,
                    },
                  ],
                },
                {
                  $or: [
                    {
                      $lt: 512,
                    },
                    {
                      $lt: 2000,
                    },
                    {
                      $eq: 678,
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  });
});

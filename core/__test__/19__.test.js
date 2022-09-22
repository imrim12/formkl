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

  fs.writeFileSync(
    path.resolve(__dirname, "../logs/19__.result.json"),
    JSON.stringify(result, null, 2),
  );

  expect(result).toStrictEqual({
    model: "base",
    method: "",
    endpoint: "",
    title: "",
    description: "",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        multiple: false,
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
            multiple: false,
          },
        ],
      },
    ],
  });
});

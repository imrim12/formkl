const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = `
formkl {
  "Personal Information"includes {
    text valid( > 10 and < 512 );
   }
}
`;

test(testCase, () => {
  const result = parser.parse(testCase);

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
            validation: { $and: [{ $gt: 10 }, { $lt: 512 }] },
          },
        ],
      },
    ],
  });
});

const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = 'Formkl {   "Personal Information" includes  {require US phone;   }}';

test(testCase, () => {
  const result = parser.parse(testCase);

  expect(result).toStrictEqual({
    model: "base",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        fields: [{ type: "US phone", label: "US Phone", require: true, key: "us-phone" }],
      },
    ],
  });
});

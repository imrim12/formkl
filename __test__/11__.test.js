const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = 'formkl {"Personal Information" includes {require "Date of birth" birthday;}}';

test(testCase, () => {
  const result = parser.parse(testCase);

  expect(result).toStrictEqual({
    model: "base",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        fields: [{ type: "birthday", label: "Date of birth", require: true, key: "date-of-birth" }],
      },
    ],
  });
});

const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = 'formkl { "Personal Information"    includes {require "Fullname" text;}}';

test(testCase, () => {
  const result = parser.parse(testCase);

  expect(result).toStrictEqual({
    model: "base",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        fields: [{ type: "text", label: "Fullname", require: true, key: "fullname" }],
      },
    ],
  });
});

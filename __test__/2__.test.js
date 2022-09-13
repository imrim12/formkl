const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = 'formkl "A random survey" { "Personal Information" includes {email as "email";}}';

test(testCase, () => {
  const result = parser.parse(testCase);

  expect(result).toStrictEqual({
    title: "A random survey",
    model: "base",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        fields: [{ type: "email", label: "Email", require: false, key: "email" }],
      },
    ],
  });
});

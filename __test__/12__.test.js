const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = `formkl {
  "Re-Index User" includes {
    require "User email" email;
  }
}
`;

test(testCase, () => {
  const result = parser.parse(testCase);

  expect(result).toStrictEqual({
    model: "base",
    sections: [
      {
        title: "Re-Index User",
        key: "re-index-user",
        fields: [{ type: "email", label: "User email", require: true, key: "user-email" }],
      },
    ],
  });
});

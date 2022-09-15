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

  fs.writeFileSync(
    path.resolve(__dirname, "../logs/12__.result.json"),
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
        title: "Re-Index User",
        key: "re-index-user",
        multiple: false,
        fields: [
          {
            type: "email",
            label: "User email",
            require: true,
            key: "user-email",
            multiple: false,
          },
        ],
      },
    ],
  });
});

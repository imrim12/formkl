const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = 'formkl "A random survey" { "Personal Information" includes {email as "email";}}';

test(testCase, () => {
  const result = parser.parse(testCase);

  fs.writeFileSync(
    path.resolve(__dirname, "../logs/2__.result.json"),
    JSON.stringify(result, null, 2),
  );

  expect(result).toStrictEqual({
    model: "base",
    method: "",
    endpoint: "",
    title: "A random survey",
    description: "",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        multiple: false,
        fields: [
          {
            type: "email",
            label: "Email",
            require: false,
            key: "email",
            multiple: false,
          },
        ],
      },
    ],
  });
});

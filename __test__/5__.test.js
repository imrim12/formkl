const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = `formkl {
  "Personal Information" includes{
    /* Some
     comment */
"Fullname" text;
US phone;
}
}`;

test(testCase, () => {
  const result = parser.parse(testCase);

  fs.writeFileSync(
    path.resolve(__dirname, "../logs/5__.result.json"),
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
            label: "Fullname",
            require: false,
            key: "fullname",
            multiple: false,
          },
          {
            type: "US phone",
            label: "US Phone",
            require: false,
            key: "us-phone",
            multiple: false,
          },
        ],
      },
    ],
  });
});

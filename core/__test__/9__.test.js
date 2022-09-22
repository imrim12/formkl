const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase =
  'Formkl post("/api/v1/personal-info") {   "Personal Information" includes  {require US phone;   }}';

test(testCase, () => {
  const result = parser.parse(testCase);

  fs.writeFileSync(
    path.resolve(__dirname, "../logs/9__.result.json"),
    JSON.stringify(result, null, 2),
  );

  expect(result).toStrictEqual({
    model: "base",
    method: "post",
    endpoint: "/api/v1/personal-info",
    title: "",
    description: "",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        multiple: false,
        fields: [
          {
            type: "US phone",
            label: "US Phone",
            require: true,
            key: "us-phone",
            multiple: false,
          },
        ],
      },
    ],
  });
});

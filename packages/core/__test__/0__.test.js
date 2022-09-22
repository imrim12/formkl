const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = `
formkl post("/api/v1/personal-info") {
  "Personal Information"includes {
    text valid( > 10 );
   }
}
`;

test(testCase, () => {
  const result = parser.parse(testCase);

  fs.writeFileSync(
    path.resolve(__dirname, "../logs/0__.result.json"),
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
            type: "text",
            label: "Text",
            require: false,
            key: "text",
            validation: {
              $gt: 10,
            },
            multiple: false,
          },
        ],
      },
    ],
  });
});

const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = `formkl "Some random survey" "This form is to survey and stuff " {
  "Personal Information" includes{
    "Fullname" text;
    require "Bio" paragraph regex("^[a-zA-Z]$") valid((> 100 or == 100) and < 300);
    require "Bio" paragraph regex("^[a-zA-Z]$") valid(== 500 or > 100 and < 300);
    multiple "Custom regex" text regex("^[a-zA-Z]$");
  }
}`;

test(testCase, () => {
  const result = parser.parse(testCase);

  fs.writeFileSync(
    path.resolve(__dirname, "../logs/6__.result.json"),
    JSON.stringify(result, null, 2),
  );

  expect(result).toStrictEqual({
    model: "base",
    method: "",
    endpoint: "",
    title: "Some random survey",
    description: "This form is to survey and stuff ",
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
            type: "paragraph",
            label: "Bio",
            require: true,
            key: "bio",
            validation: {
              regex: "^[a-zA-Z]$",
              $and: [
                {
                  $or: [
                    {
                      $gt: 100,
                    },
                    {
                      $eq: 100,
                    },
                  ],
                },
                {
                  $lt: 300,
                },
              ],
            },
            multiple: false,
          },
          {
            type: "paragraph",
            label: "Bio",
            require: true,
            key: "bio1",
            validation: {
              regex: "^[a-zA-Z]$",
              $or: [
                {
                  $eq: 500,
                },
                {
                  $and: [
                    {
                      $gt: 100,
                    },
                    {
                      $lt: 300,
                    },
                  ],
                },
              ],
            },
            multiple: false,
          },
          {
            type: "text",
            label: "Custom regex",
            require: false,
            key: "custom-regex",
            validation: {
              regex: "^[a-zA-Z]$",
            },
            multiple: true,
          },
        ],
      },
    ],
  });
});

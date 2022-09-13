const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = `formkl {
  multiple "Personal Information"includes {
   "Fullname" text;
    "Gender" radio ("Male","Female","Other");
    require "Current Company" select url("/api/company");

   US phone;

  }
  "Other Information"includes {
    multiple require zip;
    
    
    "Some field" text valid(< 512);

  }
}`;

test(testCase, () => {
  const result = parser.parse(testCase);

  expect(result).toStrictEqual({
    model: "base",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        multiple: true,
        fields: [
          { type: "text", label: "Fullname", require: false, key: "fullname" },
          {
            type: "radio",
            fetchDataPath: "",
            options: ["Male", "Female", "Other"],
            label: "Gender",
            require: false,
            key: "gender",
          },
          {
            type: "select",
            fetchDataPath: "",
            options: [],
            fetchUrl: "/api/company",
            valueKey: "id",
            labelKey: "name",
            label: "Current Company",
            require: true,
            key: "current-company",
          },
          { type: "US phone", label: "US Phone", require: false, key: "us-phone" },
        ],
      },
      {
        title: "Other Information",
        key: "other-information",
        fields: [
          { type: "zip", label: "Zip", require: true, key: "zip", multiple: true },
          {
            type: "text",
            label: "Some field",
            require: false,
            key: "some-field",
            validation: { $lt: 512 },
          },
        ],
      },
    ],
  });
});

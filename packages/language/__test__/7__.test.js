import fs from "fs";
import path from "path";
import parser from "../dist/index.js";

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

describe("test", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(testCase);

    fs.writeFileSync(
      path.resolve(__dirname, "../logs/7__.result.json"),
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
          multiple: true,
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
              key: "fullname",
              multiple: false,
            },
            {
              type: "radio",
              fetchDataPath: "",
              options: ["Male", "Female", "Other"],
              label: "Gender",
              require: false,
              key: "gender",
              multiple: false,
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
        {
          title: "Other Information",
          key: "other-information",
          multiple: false,
          fields: [
            {
              type: "zip",
              label: "Zip",
              require: true,
              key: "zip",
              multiple: true,
            },
            {
              type: "text",
              label: "Some field",
              require: false,
              key: "some-field",
              validation: {
                $lt: 512,
              },
              multiple: false,
            },
          ],
        },
      ],
    });
  });
});

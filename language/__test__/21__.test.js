import fs from "fs";
import path from "path";
import parser from "../dist/index.js";

const testCase = `formkl "Some random survey" "This form is to survey and stuff " {
  3 "Personal Information" includes{
    "Custom regex" text regex("^[a-zA-Z]$");
  }
}`;

describe("test", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(testCase);

    fs.writeFileSync(
      path.resolve(__dirname, "../logs/21__.result.json"),
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
          multiple: true,
          maxResponseAllowed: 3,
          fields: [
            {
              type: "text",
              label: "Custom regex",
              require: false,
              key: "custom-regex",
              validation: {
                regex: "^[a-zA-Z]$",
              },
              multiple: false,
            },
          ],
        },
      ],
    });
  });
});

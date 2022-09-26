import fs from "fs";
import path from "path";
import parser from "../dist/index.js";

const testCase = 'formkl {"Personal Information" includes {   US phone;}}';

describe("test", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(testCase);

    fs.writeFileSync(
      path.resolve(__dirname, "../logs/8__.result.json"),
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
});

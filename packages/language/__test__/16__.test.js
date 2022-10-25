import fs from "fs";
import path from "path";
import parser from "../dist/index.js";

const testCase = `
formkl post("/api/v1/update-personal-info")   {
  "Personal Information"includes {
    text valid( > 10 or < 512 );
   }
}
`;

describe("test", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(testCase);

    fs.writeFileSync(
      path.resolve(__dirname, "../logs/16__.result.json"),
      JSON.stringify(result, null, 2),
    );

    expect(result).toStrictEqual({
      model: "base",
      method: "post",
      endpoint: "/api/v1/update-personal-info",
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
                $or: [
                  {
                    $gt: 10,
                  },
                  {
                    $lt: 512,
                  },
                ],
              },
              multiple: false,
            },
          ],
        },
      ],
    });
  });
});

import parser, { defineForm } from "../";

describe("Field with alias (Custom key)", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      includes {
        text as "custom-key";
      }
    }`);

    expect(result).toStrictEqual(defineForm({
      model: "base",
      sections: [
        {
          fields: [
            {
              type: "text",
              label: "Text",
              key: "custom-key",
            },
          ],
        },
      ],
    }));
  });
});

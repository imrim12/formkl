import parser, { defineForm } from "../";

describe("Minimal test", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      includes {
        text;
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
              key: "text",
            },
          ],
        },
      ],
    }));
  });
});

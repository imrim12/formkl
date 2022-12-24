import parser, { defineForm } from "../";

describe("Field with label", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      includes {
        "Some field" text;
      }
    }`);

    expect(result).toStrictEqual(defineForm({
      model: "base",
      sections: [
        {
          fields: [
            {
              type: "text",
              label: "Some field",
              key: "some-field",
            },
          ],
        },
      ],
    }));
  });
});

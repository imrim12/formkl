import parser from "formkl";

describe("Field with use of validation", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      includes {
        "Test with regex" text regex("^[0-9]+$");
      }
    }`);

    expect(result).toStrictEqual({
      model: "base",
      sections: [
        {
          fields: [
            {
              type: "text",
              label: "Test with regex",
              key: "test-with-regex",
              validation: {
                regex: /^[0-9]+$/,
              },
            },
          ],
        },
      ],
    });
  });
});

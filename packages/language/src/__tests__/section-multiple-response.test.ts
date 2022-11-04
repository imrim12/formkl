import parser from "..";

describe("Section with multiple responses support", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      multiple includes {
        text;
      }
    }`);

    expect(result).toStrictEqual({
      model: "base",
      sections: [
        {
          multiple: true,
          fields: [
            {
              type: "text",
              label: "Text",
              key: "text",
            },
          ],
        },
      ],
    });
  });

  it("should emit syntax error for multiple response field in multiple response section.", () => {
    expect(() =>
      parser.parse(`formkl {
        multiple includes {
          multiple text;
          "Test" text;
        }
      }`),
    ).toThrowError(
      "A section with multiple responses cannot have fields that also have multiple responses!",
    );
  });
});

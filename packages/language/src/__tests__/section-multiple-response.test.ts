import parser, { defineForm } from "../";

describe("Section with multiple responses support", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      multiple has {
        text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
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
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
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
      }),
    );

    expect(result).toBe(`formkl {
	multiple has {
		text;
	}
}`);
  });

  it("should emit syntax error for multiple response field in multiple response section.", () => {
    expect(() =>
      parser.parse(`formkl {
        multiple has {
          multiple text;
          "Test" text;
        }
      }`),
    ).toThrowError(
      "A section with multiple responses cannot have fields that also have multiple responses!",
    );
  });
});

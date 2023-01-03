import parser, { defineForm } from "../";

describe("Multiple fields in a section", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        text;
        "Another text" text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
              {
                type: "text",
                label: "Another text",
                key: "another-text",
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
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
              {
                type: "text",
                label: "Another text",
                key: "another-text",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		text;
		"Another text" text;
	}
}`);
  });

  it("should emit syntax error for duplicated field key", () => {
    expect(() =>
      parser.parse(`formkl {
        has {
          text;
          text;
        }
      }`),
    ).toThrowError(/Duplicate field key "text"/);
  });
});

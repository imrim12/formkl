import parser, { defineForm } from "../";

describe("Field with use of validation", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        "Test with regex" text regex("^[0-9]+$");
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
                label: "Test with regex",
                key: "test-with-regex",
                validation: {
                  regex: /^[0-9]+$/,
                },
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
                label: "Test with regex",
                key: "test-with-regex",
                validation: {
                  regex: /^[0-9]+$/,
                },
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		"Test with regex" text regex("^[0-9]+$");
	}
}`);
  });
});

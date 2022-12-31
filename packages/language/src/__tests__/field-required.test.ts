import parser, { defineForm } from "../";

describe("Required field", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      includes {
        require paragraph;
        "Not required" text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "paragraph",
                label: "Paragraph",
                key: "paragraph",
                required: true,
              },
              {
                type: "text",
                label: "Not required",
                key: "not-required",
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
                required: true,
              },
              {
                type: "text",
                label: "Not required",
                key: "not-required",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	includes {
		require text;
		"Not required" text;
	}
}`);
  });
});

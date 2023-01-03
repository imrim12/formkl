import parser, { defineForm } from "../";

describe("Form with title", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl "Form title" {
      has {
        text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        title: "Form title",
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
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        title: "Form title",
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
      }),
    );

    expect(result).toBe(`formkl "Form title" {
	has {
		text;
	}
}`);
  });
});

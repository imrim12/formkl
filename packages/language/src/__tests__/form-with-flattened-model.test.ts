import parser, { defineForm } from "../";

describe("Form with flatten model", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl flat {
      has {
        text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "flat",
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
        model: "flat",
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

    expect(result).toBe(`formkl flat {
	has {
		text;
	}
}`);
  });
});

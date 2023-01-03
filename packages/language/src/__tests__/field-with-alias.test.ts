import parser, { defineForm } from "../";

describe("Field with alias (Custom key)", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        text as "custom-key";
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
                key: "custom-key",
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
                key: "custom-key",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		text as "custom-key";
	}
}`);
  });
});

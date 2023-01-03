import parser, { defineForm } from "../";

describe("Section with alias", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      "Personal information" has {
        text;
      }
      has {
        text;
      } as "different-section"
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            title: "Personal information",
            key: "personal-information",
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
          {
            key: "different-section",
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
            title: "Personal information",
            key: "personal-information",
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
          {
            key: "different-section",
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
	"Personal information" has {
		text;
	}
	has {
		text;
	} as "different-section"
}`);
  });

  it("should emit syntax error for duplicated section key", () => {
    expect(() =>
      parser.parse(`formkl {
				has {
					text;
				} as "duplicated-section"
				has {
					text;
				} as "duplicated-section"
			}`),
    ).toThrowError(/Duplicate section key "duplicated-section"/);
  });
});

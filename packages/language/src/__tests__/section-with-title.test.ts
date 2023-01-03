import parser, { defineForm } from "../";

describe("Section with title", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      "Personal Information" has {
        "Fullname" text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            title: "Personal Information",
            key: "personal-information",
            fields: [
              {
                type: "text",
                label: "Fullname",
                key: "fullname",
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
            title: "Personal Information",
            key: "personal-information",
            fields: [
              {
                type: "text",
                label: "Fullname",
                key: "fullname",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	"Personal Information" has {
		"Fullname" text;
	}
}`);
  });
});

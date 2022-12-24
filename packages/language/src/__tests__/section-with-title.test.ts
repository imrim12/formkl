import parser from "../";

describe("Section with title", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      "Personal Information" includes {
        "Fullname" text;
      }
    }`);

    expect(result).toStrictEqual({
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
    });
  });
});

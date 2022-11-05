import parser from "formkl";

describe("Used with UPPERCASE syntax", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`FORMKL {
      INCLUDES {
        TEXT;
        "Another" TEXT;
      }
    }`);

    expect(result).toStrictEqual({
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
              label: "Another",
              key: "another",
            },
          ],
        },
      ],
    });
  });
});

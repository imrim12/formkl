import parser from "../";

describe("Used with Capitalized syntax", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`Formkl {
      Includes {
        Text;
        "Another" Text;
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

import parser, { defineForm } from "../";

describe("Used with Capitalized syntax", () => {
  it("should parse the form syntax correctly", () => {
    const syntax = `Formkl {
      Includes {
        Text;
        "Another" Text;
      }
    }`

    const expected = defineForm({
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
    })

    console.log(parser.stringfify(expected))

    const result = parser.parse(syntax);

    expect(result).toStrictEqual(expected);
  });
});

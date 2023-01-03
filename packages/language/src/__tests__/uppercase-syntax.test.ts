import parser, { defineForm } from "../";

describe("Used with UPPERCASE syntax", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`FORMKL {
      HAS {
        TEXT;
        "Another" TEXT;
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
      }),
    );
  });
});

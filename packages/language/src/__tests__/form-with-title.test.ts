import parser from "formkl";

describe("Form with title", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl "Form title" {
      includes {
        text;
      }
    }`);

    expect(result).toStrictEqual({
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
    });
  });
});

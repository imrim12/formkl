import parser from "../";

describe("Form with description", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`
    formkl
      "Form title (Must has)"
      "Form description"
    {
      includes {
        text;
      }
    }`);

    expect(result).toStrictEqual({
      model: "base",
      title: "Form title (Must has)",
      description: "Form description",
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

import parser from "..";

describe("Required field", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      includes {
        require text;
        "Not required" text;
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
              required: true,
            },
            {
              type: "text",
              label: "Not required",
              key: "not-required",
            },
          ],
        },
      ],
    });
  });
});

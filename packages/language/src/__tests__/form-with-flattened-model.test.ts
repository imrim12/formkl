import { describe, it, expect } from "vitest";
import parser from "../../dist/index";

describe("Form with flatten model", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl flat {
      includes {
        text;
      }
    }`);

    expect(result).toStrictEqual({
      model: "flat",
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

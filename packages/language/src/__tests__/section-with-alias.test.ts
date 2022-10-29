import { describe, it, expect } from "vitest";
import parser from "../../dist/index.es";

describe("Section with alias", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      "Personal information" includes {
        text;
      }
      includes {
        text;
      } as "different-section"
    }`);

    expect(result).toStrictEqual({
      model: "base",
      sections: [
        {
          title: "Personal information",
          key: "personal-information",
          fields: [
            {
              type: "text",
              label: "Text",
              key: "text",
            },
          ],
        },
        {
          key: "different-section",
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

  it("should emit syntax error for duplicated section key", () => {
    expect(() =>
      parser.parse(`formkl {
        includes {
          text;
        } as "duplicated-section"
        includes {
          text;
        } as "duplicated-section"
      }`),
    ).toThrowError(/Duplicate section key "duplicated-section"/);
  });
});

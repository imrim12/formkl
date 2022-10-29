import { describe, it, expect } from "vitest";
import parser from "../../dist/index.es";

describe("Multiple section in one form", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      "Personal information" includes {
        text;
      }
      includes {
        text;
      }
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
        }
        includes {
          text;
        }
      }`),
    ).toThrowError(/Duplicate section key "undefined"/);
  });
});

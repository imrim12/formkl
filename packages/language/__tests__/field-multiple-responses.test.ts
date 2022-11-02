import { describe, it, expect } from "vitest";
import parser from "../dist/index";

describe("Field with multiple responses support", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      includes {
        multiple text;
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
              multiple: true,
            },
          ],
        },
      ],
    });
  });

  it("should parse the form syntax correctly with multiple required fields", () => {
    const result = parser.parse(`formkl {
      includes {
        multiple require text;
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
              multiple: true,
            },
          ],
        },
      ],
    });
  });

  it("should parse the form syntax correctly with multiple required fields", () => {
    const result = parser.parse(`formkl {
      includes {
        require multiple text;
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
              multiple: true,
            },
          ],
        },
      ],
    });
  });
});

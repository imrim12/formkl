import { describe, it, expect } from "vitest";
import parser from "../../dist/index.es";

describe("Field with use of validation", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      includes {
        text valid(> 5);
        "Test with OR" text valid(> 5 or == "Some value" or has "Keyword");
        "Test with AND" text valid(> 5 and == "Some value" and has "Keyword");
        "Test with Both" text valid(> 5 or == "Some value" and has "Keyword");
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
              validation: {
                logic: {
                  $gt: 5,
                },
              },
            },
            {
              type: "text",
              label: "Test with OR",
              key: "test-with-or",
              validation: {
                logic: {
                  $or: [
                    {
                      $gt: 5,
                    },
                    {
                      $eq: "Some value",
                    },
                    {
                      $has: "Keyword",
                    },
                  ],
                },
              },
            },
            {
              type: "text",
              label: "Test with AND",
              key: "test-with-and",
              validation: {
                logic: {
                  $and: [
                    {
                      $gt: 5,
                    },
                    {
                      $eq: "Some value",
                    },
                    {
                      $has: "Keyword",
                    },
                  ],
                },
              },
            },
            {
              type: "text",
              label: "Test with Both",
              key: "test-with-both",
              validation: {
                logic: {
                  $or: [
                    {
                      $gt: 5,
                    },
                    {
                      $and: [
                        {
                          $eq: "Some value",
                        },
                        {
                          $has: "Keyword",
                        },
                      ],
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    });
  });
});

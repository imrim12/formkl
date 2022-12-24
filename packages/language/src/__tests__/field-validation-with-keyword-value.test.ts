import parser, { defineForm } from "../";

describe("Field validation using keyword value like null, undefined, NaN", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
			includes {
				text valid(== null);
				"Test with OR" text valid(> 5 or == NaN or has "Keyword");
				"Test with AND" text valid(> 5 and == undefined and has "Keyword");
				"Test with Both" text valid(> 5 or == null and has "Keyword");
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
                validation: {
                  logic: {
                    $eq: null,
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
                        $eq: NaN,
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
                        $eq: undefined,
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
                            $eq: null,
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
      }),
    );
  });

  it("should stringify the formkl object correctly", () => {
    const result = parser.stringify(
      defineForm({
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
                    $eq: null,
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
                        $eq: NaN,
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
                        $eq: undefined,
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
                            $eq: null,
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
      }),
    );

    expect(result).toBe(`formkl {
	includes {
		text valid(== null);
		"Test with OR" text valid(> 5 or == NaN or has "Keyword");
		"Test with AND" text valid(> 5 and == undefined and has "Keyword");
		"Test with Both" text valid(> 5 or == null and has "Keyword");
	}
}`);
  });
});

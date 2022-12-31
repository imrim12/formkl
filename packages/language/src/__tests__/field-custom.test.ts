import parser, { defineForm } from "..";

describe("Required field", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      includes {
        require $something;
        require multiple $other;
        "Not required" $another;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "$something",
                label: "Something",
                key: "something",
                required: true,
              },
              {
                type: "$other",
                label: "Other",
                key: "other",
                required: true,
                multiple: true,
              },
              {
                type: "$another",
                label: "Not required",
                key: "not-required",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should throw syntax error for unsupported field", () => {
    expect(() => {
      parser.parse(`formkl {
				includes {
					require something;
				}
			}`);
    }).toThrowError(/Unexpected token/g);
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "$something",
                label: "Something",
                key: "something",
                required: true,
              },
              {
                type: "$other",
                label: "Other",
                key: "other",
                required: true,
                multiple: true,
              },
              {
                type: "$another",
                label: "Not required",
                key: "not-required",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	includes {
		require "Something" $something;
		require multiple "Other" $other;
		"Not required" $another;
	}
}`);
  });
});

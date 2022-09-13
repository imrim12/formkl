const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = `formkl {
  "Reverting location keywords" includes {
    require "Target Company" select url("/api/company");
    require "From keyword" text;
    require "To keyword" text;
    "Force update" switch;
  }
}
`;

test(testCase, () => {
  const result = parser.parse(testCase);

  expect(result).toStrictEqual({
    model: "base",
    sections: [
      {
        title: "Reverting location keywords",
        key: "reverting-location-keywords",
        fields: [
          {
            type: "select",
            fetchDataPath: "",
            options: [],
            fetchUrl: "/api/company",
            valueKey: "id",
            labelKey: "name",
            label: "Target Company",
            require: true,
            key: "target-company",
          },
          { type: "text", label: "From keyword", require: true, key: "from-keyword" },
          { type: "text", label: "To keyword", require: true, key: "to-keyword" },
          { type: "switch", label: "Force update", require: false, key: "force-update" },
        ],
      },
    ],
  });
});

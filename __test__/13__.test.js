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

  fs.writeFileSync(
    path.resolve(__dirname, "../logs/13__.result.json"),
    JSON.stringify(result, null, 2),
  );

  expect(result).toStrictEqual({
    model: "base",
    method: "",
    endpoint: "",
    title: "",
    description: "",
    sections: [
      {
        title: "Reverting location keywords",
        key: "reverting-location-keywords",
        multiple: false,
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
            multiple: false,
          },
          {
            type: "text",
            label: "From keyword",
            require: true,
            key: "from-keyword",
            multiple: false,
          },
          {
            type: "text",
            label: "To keyword",
            require: true,
            key: "to-keyword",
            multiple: false,
          },
          {
            type: "switch",
            label: "Force update",
            require: false,
            key: "force-update",
            multiple: false,
          },
        ],
      },
    ],
  });
});

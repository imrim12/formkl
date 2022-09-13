const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = `formkl {
  multiple "Target" includes {
    require "Target Company" select url("/api/company");
    require "Country By ISO3" select "data" url("https://countriesnow.space/api/v0.1/countries/iso", "Iso3");
    "From unassign location" switch;
  }
  "Date" includes {
    require "From date" date;
    require "To date" date;
  }
}
`;

test(testCase, () => {
  const result = parser.parse(testCase);

  expect(result).toStrictEqual({
    model: "base",
    sections: [
      {
        title: "Target",
        key: "target",
        multiple: true,
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
          {
            type: "select",
            fetchDataPath: "data",
            options: [],
            fetchUrl: "https://countriesnow.space/api/v0.1/countries/iso",
            valueKey: "Iso3",
            labelKey: "name",
            label: "Country By ISO3",
            require: true,
            key: "country-by-iso3",
          },
          {
            type: "switch",
            label: "From unassign location",
            require: false,
            key: "from-unassign-location",
          },
        ],
      },
      {
        title: "Date",
        key: "date",
        fields: [
          { type: "date", label: "From date", require: true, key: "from-date" },
          { type: "date", label: "To date", require: true, key: "to-date" },
        ],
      },
    ],
  });
});

import fs from "fs";
import path from "path";
import parser from "../dist/index.js";

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

describe("test", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(testCase);

    fs.writeFileSync(
      path.resolve(__dirname, "../logs/14__.result.json"),
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
              multiple: false,
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
              multiple: false,
            },
            {
              type: "switch",
              label: "From unassign location",
              require: false,
              key: "from-unassign-location",
              multiple: false,
            },
          ],
        },
        {
          title: "Date",
          key: "date",
          multiple: false,
          fields: [
            {
              type: "date",
              label: "From date",
              require: true,
              key: "from-date",
              multiple: false,
            },
            {
              type: "date",
              label: "To date",
              require: true,
              key: "to-date",
              multiple: false,
            },
          ],
        },
      ],
    });
  });
});

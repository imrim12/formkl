const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = ` Formkl flat {
  // Your info
"Personal Information"includes {
 "Fullname" text;
 VN phone;
}
"Personal Information"includes {
  "Fullname" text;
  require zip;
  require zip;
  "Bio" paragraph;
  "Datetime Range" datetimerange;
  "Datetime" datetime;
  "Date Range" daterange;
  "Time Range" timerange;
  "Time" time;
  "Date" date;
  "Future Date" future date;
  "Past Date" past date;
  "Birthday" birthday;

}
"Personal Information"includes {
  "Fullname" text;
  require zip;
  require zip;
  "Bio" paragraph;
}
}`;

test(testCase, () => {
  const result = parser.parse(testCase);

  expect(result).toStrictEqual({
    model: "flat",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        fields: [
          { type: "text", label: "Fullname", require: false, key: "fullname" },
          { type: "VN phone", label: "VN Phone", require: false, key: "vn-phone" },
        ],
      },
      {
        title: "Personal Information",
        key: "personal-information1",
        fields: [
          { type: "text", label: "Fullname", require: false, key: "fullname1" },
          { type: "zip", label: "Zip", require: true, key: "zip" },
          { type: "zip", label: "Zip", require: true, key: "zip1" },
          { type: "paragraph", label: "Bio", require: false, key: "bio" },
          { type: "datetimerange", label: "Datetime Range", require: false, key: "datetime-range" },
          { type: "datetime", label: "Datetime", require: false, key: "datetime" },
          { type: "daterange", label: "Date Range", require: false, key: "date-range" },
          { type: "timerange", label: "Time Range", require: false, key: "time-range" },
          { type: "time", label: "Time", require: false, key: "time" },
          { type: "date", label: "Date", require: false, key: "date" },
          { type: "future date", label: "Future Date", require: false, key: "future-date" },
          { type: "past date", label: "Past Date", require: false, key: "past-date" },
          { type: "birthday", label: "Birthday", require: false, key: "birthday" },
        ],
      },
      {
        title: "Personal Information",
        key: "personal-information2",
        fields: [
          { type: "text", label: "Fullname", require: false, key: "fullname2" },
          { type: "zip", label: "Zip", require: true, key: "zip2" },
          { type: "zip", label: "Zip", require: true, key: "zip3" },
          { type: "paragraph", label: "Bio", require: false, key: "bio1" },
        ],
      },
    ],
  });
});
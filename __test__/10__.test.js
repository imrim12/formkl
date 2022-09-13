const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.js"));

const testCase = ' formkl flat {"Personal Information" includes  {require time;}}';

test(testCase, () => {
  const result = parser.parse(testCase);

  expect(result).toStrictEqual({
    model: "flat",
    sections: [
      {
        title: "Personal Information",
        key: "personal-information",
        fields: [{ type: "time", label: "Time", require: true, key: "time" }],
      },
    ],
  });
});

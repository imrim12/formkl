// Create a Parser object from our grammar.
const parser = require("../dist");

const testCases = [
  "email",
  "require emailx",
  "require email",
  "require require email",
  "US phone",
  "require US phone",
  `require "Email" email`,
  "text",
  "require text",
];

testCases.forEach((testCase) => {
  try {
    console.log("Testing: ", testCase);
    const parsed = parser.feed(testCase);

    console.log("Result: ", JSON.stringify(parsed.results));
  } catch (e) {
    console.error(e);
  }
});

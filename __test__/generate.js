const fs = require("fs");

const testCases = require("./test-cases");

try {
  testCases.forEach((testCase, index) => {
    fs.writeFileSync(
      `./__test__/${index + 1}_case.test.js`,
      `let parser = require("../dist");

test(${JSON.stringify(testCase)}, () => {
  const result = parser.parse(${JSON.stringify(testCase)});
  console.log(result);
  expect(!!result.length).toBe(true);
});
`,
    );
  });
  // file written successfully
} catch (err) {
  console.error(err);
}

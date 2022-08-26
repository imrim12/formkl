const fs = require("fs");

const testCases = require("./test-cases");

try {
  testCases.forEach((testCase, index) => {
    fs.writeFileSync(
      `./__test__/${index + 1}_case.test.js`,
      `let parser = require("../dist");

test(${JSON.stringify(testCase)}, () => {
  expect(!!parser.parse(${JSON.stringify(testCase)}).length).toBe(true);
});
`,
    );
  });
  // file written successfully
} catch (err) {
  console.error(err);
}

const fs = require("fs");
const path = require("path");

const testCases = require("./test-cases");

try {
  testCases.forEach((testCase, index) => {
    fs.writeFileSync(
      path.resolve(__dirname, `./case__${index + 1}.test.js`),
      `const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist"));

test(${JSON.stringify(testCase)}, () => {
  const result = parser.parse(${JSON.stringify(testCase)});
  fs.writeFileSync(
    path.resolve(__dirname, "./result/case__${index + 1}.result.json"),
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});
`,
    );
  });
  // file written successfully
} catch (err) {
  console.error(err);
}

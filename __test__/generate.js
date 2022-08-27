const fs = require("fs");

const testCases = require("./test-cases");

try {
  testCases.forEach((testCase, index) => {
    fs.writeFileSync(
      `./__test__/case__${index + 1}.test.js`,
      `const fs = require("fs");
const parser = require("../dist");

test(${JSON.stringify(testCase)}, () => {
  const result = parser.parse(${JSON.stringify(testCase)});
  fs.writeFileSync(
    "./__test__/result/case__${index + 1}.result.json",
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

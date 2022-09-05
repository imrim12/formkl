const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist/index.min.js"));

test("<--TEST_CASE-->", () => {
  const result = parser.parse("<--TEST_CASE-->");
  fs.writeFileSync(
    path.resolve(__dirname, "../logs/case__<--TEST_CASE_INDEX-->.result.json"),
    JSON.stringify(result, null, 2),
  );
  expect(!!Object.keys(result).length).toBe(true);
});

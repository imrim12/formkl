const fs = require("fs");
const path = require("path");

const testCases = require("./test-cases");

try {
  fs.readFile(path.resolve(__dirname, `../templates/test.js`), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    testCases.forEach((testCase, index) => {
      fs.writeFileSync(
        path.resolve(__dirname, `./${index}__.test.js`),
        data
          .replace(/"<--TEST_CASE-->"/g, JSON.stringify(testCase[0]))
          .replace(/"<--TEST_CASE_EXPECTED_RESULT-->"/g, JSON.stringify(testCase[1]))
          .replace(/<--TEST_CASE_INDEX-->/g, index),
      );
    });
  });

  // file written successfully
} catch (err) {
  console.error(err);
}

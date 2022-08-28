const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist"));

test("formkl {\"Personal Information\" includes {require \"Date of birth\" birthday;}}", () => {
  const result = parser.parse("formkl {\"Personal Information\" includes {require \"Date of birth\" birthday;}}");
  fs.writeFileSync(
    path.resolve(__dirname, "./result/case__10.result.json"),
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

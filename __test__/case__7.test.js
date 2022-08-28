const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist"));

test("formkl {\"Personal Information\" includes {   US phone;}}", () => {
  const result = parser.parse("formkl {\"Personal Information\" includes {   US phone;}}");
  fs.writeFileSync(
    path.resolve(__dirname, "./result/case__7.result.json"),
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

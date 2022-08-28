const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist"));

test("Formkl {   \"Personal Information\" includes  {require US phone;   }}", () => {
  const result = parser.parse("Formkl {   \"Personal Information\" includes  {require US phone;   }}");
  fs.writeFileSync(
    path.resolve(__dirname, "./result/case__8.result.json"),
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

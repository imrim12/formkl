const fs = require("fs");
const parser = require("../dist");

test("Formkl {   \"Personal Information\" includes  {require US phone;   }}", () => {
  const result = parser.parse("Formkl {   \"Personal Information\" includes  {require US phone;   }}");
  fs.writeFileSync(
    "./__test__/result/case__8.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

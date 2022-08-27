const fs = require("fs");
const parser = require("../dist");

test("formkl {\"Personal Information\" includes {require \"Date of birth\" birthday;}}", () => {
  const result = parser.parse("formkl {\"Personal Information\" includes {require \"Date of birth\" birthday;}}");
  fs.writeFileSync(
    "./__test__/result/case__10.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

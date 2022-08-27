const fs = require("fs");
const parser = require("../dist");

test("formkl {\"Personal Information\" includes {   US phone;}}", () => {
  const result = parser.parse("formkl {\"Personal Information\" includes {   US phone;}}");
  fs.writeFileSync(
    "./__test__/result/case__7.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

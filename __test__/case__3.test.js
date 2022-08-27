const fs = require("fs");
const parser = require("../dist");

test("formkl {\"Personal Information\"  includes   {require email;}}", () => {
  const result = parser.parse("formkl {\"Personal Information\"  includes   {require email;}}");
  fs.writeFileSync(
    "./__test__/result/case__3.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

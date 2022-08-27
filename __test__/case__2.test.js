const fs = require("fs");
const parser = require("../dist");

test("formkl { \"Personal Information\" includes {email;}}", () => {
  const result = parser.parse("formkl { \"Personal Information\" includes {email;}}");
  fs.writeFileSync(
    "./__test__/result/case__2.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

const fs = require("fs");
const parser = require("../dist");

test("formkl { \"Personal Information\"    includes {require \"Fullname\" text;}}", () => {
  const result = parser.parse("formkl { \"Personal Information\"    includes {require \"Fullname\" text;}}");
  fs.writeFileSync(
    "./__test__/result/case__4.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

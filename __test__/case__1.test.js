const fs = require("fs");
const parser = require("../dist");

test("{email;}", () => {
  const result = parser.parse("{email;}");
  fs.writeFileSync(
    "./__test__/result/case__1.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

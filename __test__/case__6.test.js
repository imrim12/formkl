const fs = require("fs");
const parser = require("../dist");

test("{   US phone;}", () => {
  const result = parser.parse("{   US phone;}");
  fs.writeFileSync(
    "./__test__/result/case__6.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

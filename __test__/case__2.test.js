const fs = require("fs");
const parser = require("../dist");

test("{require email;}", () => {
  const result = parser.parse("{require email;}");
  fs.writeFileSync(
    "./__test__/result/case__2.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

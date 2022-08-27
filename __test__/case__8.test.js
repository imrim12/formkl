const fs = require("fs");
const parser = require("../dist");

test("{require time;}", () => {
  const result = parser.parse("{require time;}");
  fs.writeFileSync(
    "./__test__/result/case__8.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

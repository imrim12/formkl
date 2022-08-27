const fs = require("fs");
const parser = require("../dist");

test("{require \"Date of birth\" birthday;}", () => {
  const result = parser.parse("{require \"Date of birth\" birthday;}");
  fs.writeFileSync(
    "./__test__/result/case__9.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

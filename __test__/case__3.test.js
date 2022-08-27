const fs = require("fs");
const parser = require("../dist");

test("{require \"Fullname\" text;}", () => {
  const result = parser.parse("{require \"Fullname\" text;}");
  fs.writeFileSync(
    "./__test__/result/case__3.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

const fs = require("fs");
const parser = require("../dist");

test("{\n  \"Fullname\" text;\n  US phone;\n  }", () => {
  const result = parser.parse("{\n  \"Fullname\" text;\n  US phone;\n  }");
  fs.writeFileSync(
    "./__test__/result/case__4.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

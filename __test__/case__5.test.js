const fs = require("fs");
const parser = require("../dist");

test("{\n     \"Fullname\" text;\n\n     US phone;\n\n  }", () => {
  const result = parser.parse("{\n     \"Fullname\" text;\n\n     US phone;\n\n  }");
  fs.writeFileSync(
    "./__test__/result/case__5.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

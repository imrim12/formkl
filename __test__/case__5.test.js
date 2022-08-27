const fs = require("fs");
const parser = require("../dist");

test("formkl {\n    \"Personal Information\" includes{\n  \"Fullname\" text;\n  US phone;\n  }\n}", () => {
  const result = parser.parse("formkl {\n    \"Personal Information\" includes{\n  \"Fullname\" text;\n  US phone;\n  }\n}");
  fs.writeFileSync(
    "./__test__/result/case__5.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

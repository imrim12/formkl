const fs = require("fs");
const parser = require("../dist");

test("Formkl {\n    \"Personal Information\"includes {\n     \"Fullname\" text;\n\n\n     US phone;\n\n    }\n    \"Other Information\"includes {\n      require zip;\n      \n      \n      \"Some field\" text;\n\n    }\n  }", () => {
  const result = parser.parse("Formkl {\n    \"Personal Information\"includes {\n     \"Fullname\" text;\n\n\n     US phone;\n\n    }\n    \"Other Information\"includes {\n      require zip;\n      \n      \n      \"Some field\" text;\n\n    }\n  }");
  fs.writeFileSync(
    "./__test__/result/case__6.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

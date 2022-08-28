const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist"));

test("formkl {\n    \"Personal Information\"includes {\n     \"Fullname\" text;\n\n\n     US phone;\n\n    }\n    \"Other Information\"includes {\n      require zip;\n      \n      \n      \"Some field\" text;\n\n    }\n  }", () => {
  const result = parser.parse("formkl {\n    \"Personal Information\"includes {\n     \"Fullname\" text;\n\n\n     US phone;\n\n    }\n    \"Other Information\"includes {\n      require zip;\n      \n      \n      \"Some field\" text;\n\n    }\n  }");
  fs.writeFileSync(
    path.resolve(__dirname, "./result/case__6.result.json"),
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

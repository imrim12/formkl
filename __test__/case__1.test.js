const fs = require("fs");
const path = require("path");
const parser = require(path.resolve(__dirname, "../dist"));

test("Formkl {\n    \"Personal Information\"includes {\n     \"Fullname\" text;\n     VN phone;\n    }\n    \"Other Information\"includes {\n      require zip;\n      \"Bio\" paragraph;\n    }\n  }", () => {
  const result = parser.parse("Formkl {\n    \"Personal Information\"includes {\n     \"Fullname\" text;\n     VN phone;\n    }\n    \"Other Information\"includes {\n      require zip;\n      \"Bio\" paragraph;\n    }\n  }");
  fs.writeFileSync(
    path.resolve(__dirname, "./result/case__1.result.json"),
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

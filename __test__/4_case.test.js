let parser = require("../dist");

test("\"Fullname\" text;\nUS phone;", () => {
  const result = parser.parse("\"Fullname\" text;\nUS phone;");
  console.log(result);
  expect(!!result.length).toBe(true);
});

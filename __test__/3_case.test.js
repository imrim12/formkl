let parser = require("../dist");

test("require \"Fullname\" text;", () => {
  const result = parser.parse("require \"Fullname\" text;");
  console.log(result);
  expect(!!result.length).toBe(true);
});

let parser = require("../dist");

test("require US phone;", () => {
  const result = parser.parse("require US phone;");
  console.log(result);
  expect(!!result.length).toBe(true);
});

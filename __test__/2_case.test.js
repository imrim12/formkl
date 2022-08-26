let parser = require("../dist");

test("require email;", () => {
  const result = parser.parse("require email;");
  console.log(result);
  expect(!!result.length).toBe(true);
});

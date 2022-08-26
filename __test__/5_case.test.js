let parser = require("../dist");

test("US phone;", () => {
  const result = parser.parse("US phone;");
  console.log(result);
  expect(!!result.length).toBe(true);
});

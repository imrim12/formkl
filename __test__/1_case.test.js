let parser = require("../dist");

test("email;", () => {
  const result = parser.parse("email;");
  console.log(result);
  expect(!!result.length).toBe(true);
});

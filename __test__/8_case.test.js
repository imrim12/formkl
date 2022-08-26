let parser = require("../dist");

test("require \"Date of birth\" birthday;", () => {
  const result = parser.parse("require \"Date of birth\" birthday;");
  console.log(result);
  expect(!!result.length).toBe(true);
});

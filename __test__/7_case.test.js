let parser = require("../dist");

test("require time;", () => {
  const result = parser.parse("require time;");
  console.log(result);
  expect(!!result.length).toBe(true);
});

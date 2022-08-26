let parser = require("../dist");

test("require time;", () => {
  expect(!!parser.parse("require time;").length).toBe(true);
});

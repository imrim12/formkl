let parser = require("../dist");

test("require email;", () => {
  expect(!!parser.parse("require email;").length).toBe(true);
});

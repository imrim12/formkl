let parser = require("../dist");

test("require US phone;", () => {
  expect(!!parser.parse("require US phone;").length).toBe(true);
});

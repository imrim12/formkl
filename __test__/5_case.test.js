let parser = require("../dist");

test("US phone;", () => {
  expect(!!parser.parse("US phone;").length).toBe(true);
});

const fs = require("fs");
const parser = require("../dist");

test("formkl {\"Personal Information\" includes  {require time;}}", () => {
  const result = parser.parse("formkl {\"Personal Information\" includes  {require time;}}");
  fs.writeFileSync(
    "./__test__/result/case__9.result.json",
    JSON.stringify(result, null, 2)
  );
  expect(!!result.length).toBe(true);
});

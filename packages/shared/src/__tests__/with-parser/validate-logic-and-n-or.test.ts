import { isValueValidated } from "@formkl/shared";

import parser from "formkl";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const form = parser.parse(`formkl {
      includes {
        text valid(has "something" or > 10 and < 15);
      }
    }`);

    const result = isValueValidated(
      "test something with and & or",
      form.sections[0].fields[0].validation,
    );

    expect(result).toBe(true);
  });
});

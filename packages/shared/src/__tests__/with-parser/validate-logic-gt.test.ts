import { isValueValidated } from "@formkl/shared";

import parser from "formkl";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const form = parser.parse(`formkl {
      includes {
        text valid(> 5);
      }
    }`);

    const result = isValueValidated("test something long", form.sections[0].fields[0].validation);

    expect(result).toBe(true);
  });
});

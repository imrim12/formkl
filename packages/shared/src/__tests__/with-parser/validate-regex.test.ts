import { isValueValidated } from "@formkl/shared";

import parser from "../../../../language";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const form = parser.parse(`formkl {
      includes {
        text regex("test");
      }
    }`);

    const result = isValueValidated("test", form.sections[0].fields[0].validation);

    expect(result).toBe(true);
  });

  it("should return false", () => {
    const form = parser.parse(`formkl {
      includes {
        text regex("different");
      }
    }`);

    const result = isValueValidated("test", form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });
});

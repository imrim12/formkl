import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const result = isValueValidated("test", {
      regex: /test/,
    });

    expect(result).toBe(true);
  });

  it("should return false", () => {
    const result = isValueValidated("test", {
      regex: /different/,
    });

    expect(result).toBe(false);
  });
});

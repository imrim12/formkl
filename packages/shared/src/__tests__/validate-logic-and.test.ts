import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const result = isValueValidated(11, {
      logic: {
        $and: [
          {
            $gt: 10,
          },
          {
            $lt: 15,
          },
        ],
      },
    });

    expect(result).toBe(true);
  });

  it("should return false", () => {
    const result = isValueValidated(25, {
      logic: {
        $and: [
          {
            $gt: 10,
          },
          {
            $lt: 15,
          },
        ],
      },
    });

    expect(result).toBe(false);
  });

  it("should return true", () => {
    const result = isValueValidated(12, {
      logic: {
        $and: [
          {
            $gt: 10,
          },
          {
            $lt: 15,
          },
        ],
      },
    });

    expect(result).toBe(true);
  });
});

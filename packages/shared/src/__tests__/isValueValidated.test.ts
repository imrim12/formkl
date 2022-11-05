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

  it("should return true", () => {
    const result = isValueValidated("test something longer", {
      regex: /test/,
      logic: {
        $gt: 5,
      },
    });

    expect(result).toBe(true);
  });

  it("should return false", () => {
    const result = isValueValidated("test something longer", {
      regex: /test/,
      logic: {
        $lt: 5,
      },
    });

    expect(result).toBe(false);
  });

  it("should return true", () => {
    const result = isValueValidated("test something with or", {
      logic: {
        $or: [
          {
            $gt: 10,
          },
          {
            $has: "something",
          },
        ],
      },
    });

    expect(result).toBe(true);
  });

  it("should return true", () => {
    const result = isValueValidated("test something with and", {
      logic: {
        $or: [
          {
            $has: "something",
          },
          {
            $and: [
              {
                $gt: 10,
              },
              {
                $lt: 15,
              },
            ],
          },
        ],
      },
    });

    expect(result).toBe(true);
  });

  it("should return false", () => {
    const result = isValueValidated("test something with and", {
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
});

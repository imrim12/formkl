export const isNaNStrict = (value: string | number) =>
  typeof value === "number" || (typeof value === "string" && /^\d+$/g.test(value));

export const validateRegex = (value: string | number, regex: RegExp | string) => {
  if (typeof regex === "string") {
    regex = new RegExp(regex);
  }

  return regex.test(value.toString());
};

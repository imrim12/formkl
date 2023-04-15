export const uniqBy = <T = any>(options: Array<T>, key: string) => {
  const uniqueMap = {};
  const result = [];

  for (const option of options) {
    const existedKey = option[key];

    if (uniqueMap[existedKey]) {
      continue;
    } else {
      uniqueMap[existedKey] = true;

      result.push(option);
    }
  }

  return result;
};

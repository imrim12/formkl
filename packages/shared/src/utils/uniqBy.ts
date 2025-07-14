export const uniqBy = <T extends Record<string, any> = any>(options: Array<T>, key: string) => {
  const uniqueMap: Record<string, boolean> = {};
  const result: Array<T> = [];

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

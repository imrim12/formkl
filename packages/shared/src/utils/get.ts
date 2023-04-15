// Lodash implementation of get function to get the value in an object by path
export const get = (obj: any, path: string) => {
  const paths = path.split(".");
  let result = obj;

  for (const p of paths) {
    result = result[p];

    if (!result) {
      break;
    }
  }

  return result;
};

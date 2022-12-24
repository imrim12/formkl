export const createKeywordRegex = (keyword: string) => {
  return new RegExp(
    `^\\b(${[
      keyword,
      keyword.toLowerCase(),
      keyword.toUpperCase(),
      keyword.toLowerCase().charAt(0).toUpperCase() + keyword.toLowerCase().slice(1),
    ].join("|")})\\b`,
  );
};

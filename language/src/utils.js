export function returnToken(token = "") {
  return `return '${token}';`;
}

export function allowMatchToken(token = "", esc = false, allowCapital = false) {
  return [
    esc
      ? "\\" + token
      : allowCapital
      ? `${token}|${token.charAt(0).toUpperCase() + token.slice(1)}`
      : token,
    returnToken(token),
  ];
}

export default {
  returnToken,
  allowMatchToken,
};

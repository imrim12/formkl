function ifMatch(token = "") {
  return token;
}

function returnToken(token = "") {
  return `return '${token}';`;
}

function allowMatchToken(token = "", esc = false, allowCapital = false) {
  return [
    esc
      ? "\\" + token
      : allowCapital
      ? `${token}|${token.charAt(0).toUpperCase() + token.slice(1)}`
      : token,
    returnToken(token),
  ];
}

module.exports = {
  ifMatch,
  returnToken,
  allowMatchToken,
};

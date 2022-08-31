function ifMatch(token = "") {
  return token;
}

function returnToken(token = "") {
  return `return '${token}';`;
}

function allowMatchToken(token = "", esc = false) {
  return [esc ? "\\" + token : token, returnToken(token)];
}

module.exports = {
  ifMatch,
  returnToken,
  allowMatchToken,
};

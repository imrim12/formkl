function tokenStart(token) {
  return {
    line: token.line,
    col: token.col - 1,
  };
}

function tokenEnd(token) {
  const lastNewLine = token.text.lastIndexOf("\n");
  if (lastNewLine !== -1) {
    throw new Error("Unsupported case: token with line breaks");
  }
  return {
    line: token.line,
    col: token.col + token.text.length - 1,
  };
}

function convertToken(token) {
  return {
    type: token.type,
    value: token.value,
    start: tokenStart(token),
    end: tokenEnd(token),
  };
}

function convertTokenId(data) {
  return convertToken(data[0]);
}

module.exports = {
  tokenStart,
  tokenEnd,
  convertToken,
  convertTokenId,
};

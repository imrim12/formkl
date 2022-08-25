const moo = require("moo");

module.exports = moo.compile({
  WHITESPACE: /[ \t]+/,
  LITERALSTRING: /"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/,
  LITERALNUMBER: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,
  SUPPORTCONSTRAINT: /(?:require)/,
  FIELDVALIDATEDPHONE: {
    match: /(?:US|VN)\sphone/,
  },
  FIELDVALIDATED: {
    match: /(?:email|zip|age)/,
  },
  FIELDDEFAULT: {
    match: /(?:text|paragraph|number|checkbox|radio|dropdown)/,
  },
});

const moo = require("moo");

const DEFAULT_FIELDS = ["text", "paragraph", "number", "checkbox", "radio", "dropdown"];

const VALIDATED_FIELDS = ["email", "zip", "age"];

const SUPPORT_COUNTRIES = ["US", "VN"];

const SUPPORT_CONSTRAINTS = ["require"];

module.exports = moo.compile({
  TkWhitespace: {
    match: /[\s\t]+/,
    lineBreaks: true,
  },
  TkLitteralString: {
    match: /"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/,
  },
  TkLitteralNumber: {
    match: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,
  },
  TkSupportConstraint: {
    match: new RegExp(`(?:${SUPPORT_CONSTRAINTS.join("|")})`),
  },
  TkFieldValidatedPhone: {
    match: new RegExp(`(?:${SUPPORT_COUNTRIES.join("|")})\\sphone`),
  },
  TkFieldValidated: {
    match: new RegExp(`(?:${VALIDATED_FIELDS.join("|")})`),
  },
  TkFieldDefault: {
    match: new RegExp(`(?:${DEFAULT_FIELDS.join("|")})`),
  },
});

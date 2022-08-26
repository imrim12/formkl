const moo = require("moo");

const DEFAULT_FIELDS = ["text", "paragraph", "number", "checkbox", "radio", "dropdown"];

const VALIDATED_FIELDS = ["email", "zip", "age"];

const DATETIME_FIELDS = [
  "date",
  "future date",
  "past date",
  "birthday",
  "time",
  "datetime",
  "date range",
  "datetime range",
  "time range",
];

const SUPPORT_COUNTRIES = ["US", "VN"];

module.exports = moo.compile({
  TkComment: {
    match: /#[^\n]*/,
    value: (s) => s.substring(1),
  },
  TkWhitespace: {
    match: /[\s\t]+/,
    lineBreaks: true,
  },
  TkLineBreak: {
    match: /[\n]+/,
    lineBreaks: true,
  },
  TkSemi: {
    match: /;/,
  },
  TkLitteralString: {
    match: /"(?:[^\n\\"]|\\["\\ntbfr])*"/,
    value: (s) => JSON.parse(s),
  },
  TkLitteralNumber: {
    match: /[0-9]+(?:\.[0-9]+)?/,
    value: (s) => Number(s),
  },
  TkRequire: "require",
  TkField: [
    ...DEFAULT_FIELDS,
    ...VALIDATED_FIELDS,
    ...DATETIME_FIELDS,
    ...SUPPORT_COUNTRIES.map((c) => c + " phone"),
  ],
});

module.exports = {
  Field: Object.freeze({
    DEFAULT: ["text", "paragraph", "number", "switch"],
    SELECTION: ["checkbox", "radio", "select"],
    VALIDATED: ["email", "zip", "age"],
    DATETIME: [
      "datetimerange",
      "datetime",
      "daterange",
      "timerange",
      "future date",
      "past date",
      "birthday",
      "date",
      "time",
    ],
    PHONE: ["US", "VN"].map((c) => c + " phone"),
  }),
};

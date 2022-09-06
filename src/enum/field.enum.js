module.exports = {
  Field: Object.freeze({
    DEFAULT: ["text", "paragraph", "number", "switch"],
    SELECTION: ["checkbox", "radio", "select"],
    VALIDATED: ["email", "zip", "age"],
    DATETIME: [
      "date",
      "future date",
      "past date",
      "birthday",
      "time",
      "datetime",
      "daterange",
      "datetimerange",
      "timerange",
    ],
    PHONE: ["US", "VN"].map((c) => c + " phone"),
  }),
};

module.exports = {
  Field: Object.freeze({
    DEFAULT: ["text", "paragraph", "number", "checkbox", "radio", "dropdown"],
    VALIDATED: ["email", "zip", "age"],
    DATETIME: [
      "date",
      "future date",
      "past date",
      "birthday",
      "time",
      "datetime",
      "date range",
      "datetime range",
      "time range",
    ],
    PHONE: ["US", "VN"].map((c) => c + " phone"),
  }),
};

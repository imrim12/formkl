export const Field = Object.freeze({
  DEFAULT: ["text", "paragraph", "number", "switch"],
  SELECTION: ["checkbox", "radio", "select"],
  VALIDATED: ["email", "zip", "age"],
  DATETIME: [
    "datetimerange",
    "datetime",
    "daterange",
    "timerange",
    "time",
    "date",
    "future date",
    "past date",
    "birthday",
  ],
  PHONE: ["US", "VN"].map((c) => c + " phone"),
});

export default { Field };

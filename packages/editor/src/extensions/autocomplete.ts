import { autocompletion, CompletionContext, Completion } from "@codemirror/autocomplete";

// Our list of completions (can be static, since the editor
/// will do filtering based on context).
export const completions: Array<Completion> = [
  { label: "formkl", type: "class", detail: "Formkl block", info: "Start declaring a Form" },
  {
    label: "base",
    type: "type",
    detail: "Model type",
    info: `Default structure form data, for ex: [ { key: "fullname", value: "Michael Jackson" } ]`,
  },
  {
    label: "flat",
    type: "type",
    detail: "Model type",
    info: `Flatten structure form data, for ex: { fullname: "Michael Jackson" }`,
  },
  {
    label: "multiple",
    type: "keyword",
    detail: "Multiple responses",
    info: "Declare whether a field of a section has multiple responses",
  },
  {
    label: "includes",
    type: "keyword",
    detail: "Section block",
    info: "Declare a group of fields",
  },
  {
    label: "or",
    type: "keyword",
    detail: "OR condition operator",
    info: "Use as: valid(>500 or ==300)",
  },
  {
    label: "and",
    type: "keyword",
    detail: "AND condition operator",
    info: "Use as: valid(>500 and <1000)",
  },
  {
    label: "has",
    type: "keyword",
    detail: "HAS condition operator",
    info: "Use as: valid(has 'some keyword')",
  },
  {
    label: "as",
    type: "keyword",
    detail: "Field alias",
    info: "Declare custom key for field in form data",
  },
  { label: "require", type: "keyword", detail: "Require field" },
  { label: "valid", type: "function", detail: "Validation", info: "Declare simple validation" },
  {
    label: "regex",
    type: "function",
    detail: "RegExp",
    info: "Declare a validation with Regular Expression",
  },
  {
    label: "url",
    type: "function",
    detail: "Selection",
    info: "Declare data source url for select field's options",
  },
  { label: "get", type: "function", detail: "Submit method" },
  { label: "post", type: "function", detail: "Submit method" },
  { label: "put", type: "function", detail: "Submit method" },
  { label: "patch", type: "function", detail: "Submit method" },
  { label: "delete", type: "function", detail: "Submit method" },
  { label: "text", type: "constant", detail: "Field" },
  { label: "paragraph", type: "constant", detail: "Field" },
  { label: "number", type: "constant", detail: "Field" },
  { label: "switch", type: "constant", detail: "Field" },
  { label: "checkbox", type: "constant", detail: "Field" },
  { label: "radio", type: "constant", detail: "Field" },
  { label: "select", type: "constant", detail: "Field" },
  { label: "datetimerange", type: "constant", detail: "Field" },
  { label: "datetime", type: "constant", detail: "Field" },
  { label: "daterange", type: "constant", detail: "Field" },
  { label: "timerange", type: "constant", detail: "Field" },
  { label: "time", type: "constant", detail: "Field" },
  { label: "date", type: "constant", detail: "Field" },
  { label: "future date", type: "constant", detail: "Field" },
  { label: "past date", type: "constant", detail: "Field" },
  { label: "birthday", type: "constant", detail: "Field" },
  { label: "US phone", type: "constant", detail: "Field" },
  { label: "VN phone", type: "constant", detail: "Field" },
];

const keywordSuggestion = (context: CompletionContext) => {
  let before = context.matchBefore(/\w+/);
  // If completion wasn't explicitly started and there
  // is no word before the cursor, don't open completions.
  if (!context.explicit && !before) return null;

  return {
    from: before ? before.from : context.pos,
    options: completions,
    validFor: /^\w*$/,
  };
};

export const AutoCompleteExtension = autocompletion({ override: [keywordSuggestion] });

import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  externals: [
    "formkl",
    "codemirror",
    "@codemirror/autocomplete",
    "@codemirror/commands",
    "@codemirror/lint",
    "@codemirror/state",
    "@codemirror/view",
  ],
});

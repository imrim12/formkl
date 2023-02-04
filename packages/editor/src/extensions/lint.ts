import type { Extension } from "@codemirror/state";
import type { EditorView } from "@codemirror/view";
import type { Diagnostic } from "@codemirror/lint";

import { linter } from "@codemirror/lint";

import FormklParser from "formkl";

function lintSyntax(view: EditorView): readonly Diagnostic[] {
  const diagnostics: Diagnostic[] = [];

  const content = view.state.doc.toString();

  try {
    FormklParser.parse(content);
  } catch (err: any) {
    const errorIndex: Array<number> | undefined = /at \d+\:\d+/
      .exec(err.message)[0] // Get "at lineNumber:columnNumber"
      .replace(/at /g, "") // Remove "at "
      .split(":") // Get ["lineNumber", "columnNumber"]
      .map(Number);

    diagnostics.push({
      from: errorIndex ? view.state.doc.line(errorIndex[0]).from : view.state.doc.length,
      to: errorIndex ? view.state.doc.line(errorIndex[0]).to : view.state.doc.length,
      severity: "error",
      message: err.message,
    });
  }

  return diagnostics;
}

export const LintExtension: Extension = linter(lintSyntax);

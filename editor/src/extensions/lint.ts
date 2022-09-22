import { EditorView } from "@codemirror/view";
import { linter, Diagnostic } from "@codemirror/lint";

import FormklParser from "formkl";

function lintSyntax(view: EditorView): readonly Diagnostic[] {
  const diagnostics: Diagnostic[] = [];

  const content = view.state.doc.toString();

  try {
    FormklParser.parse(content);
  } catch (err: any) {
    const errorIndex: Array<number> | undefined = err.message
      .match(/at\s.*\./g)?.[0]
      .replace(/at\s|\./g, "")
      .split(":")
      .map((n: string) => +n);

    diagnostics.push({
      from: errorIndex ? view.state.doc.line(errorIndex[0]).from : view.state.doc.length,
      to: errorIndex ? view.state.doc.line(errorIndex[0]).to : view.state.doc.length,
      severity: "error",
      message: err.message,
    });
  }

  return diagnostics;
}

export const LintExtension = linter(lintSyntax);

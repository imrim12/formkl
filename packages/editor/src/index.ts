import { indentWithTab } from "@codemirror/commands";
import { EditorViewConfig, keymap } from "@codemirror/view";
import { EditorView, basicSetup } from "codemirror";
import { AutoCompleteExtension, LintExtension } from "./extensions";

type EditorOptions = EditorViewConfig & {
  dark?: boolean;
  theme?: {
    [selector: string]: {
      [propOrSelector: string]: string | number | null;
    };
  };
};

export const createEditor = (options?: EditorOptions): CustomElementConstructor => {
  return class FormklEditor extends HTMLElement {
    static get observedAttributes() {
      return ["value"];
    }

    editor: EditorView | null = null;

    get value() {
      return this.editor?.state.doc.toString() || "";
    }

    set value(newValue: string) {
      this.setContent(newValue);
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    setContent(value: string) {
      this.editor?.dispatch({
        changes: {
          from: 0,
          to: this.editor.state.doc.length,
          insert: value,
        },
      });
    }

    // Like mounted
    connectedCallback() {
      EditorView.theme(options?.theme || {}, { dark: Boolean(options?.dark) });

      this.editor = new EditorView({
        ...options,
        parent: this.shadowRoot as DocumentFragment,
        doc: this.value,
        extensions: [
          basicSetup,
          keymap.of([indentWithTab]),
          AutoCompleteExtension,
          LintExtension,
          EditorView.updateListener.of((e) => {
            const event = new CustomEvent("input", { detail: e.state.doc.toString() });
            this.dispatchEvent(event);
          }),
        ].concat(options?.extensions || []),
      });
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
      if (name === "value") {
        this.setContent(newValue);
      }
    }
  };
};

export default { createEditor };

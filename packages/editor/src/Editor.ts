import { indentWithTab } from "@codemirror/commands";
import { keymap } from "@codemirror/view";
import { EditorView, basicSetup } from "codemirror";
import { AutoCompleteExtension } from "./extensions/autocomplete";
import { LintExtension } from "./extensions/lint";

export class FormklEditor extends HTMLElement {
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
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.innerHTML = '<div id="formkl__editor"></div>';

    const attributes: { [key: string]: any } = {};

    for (let i = 0; i < this.attributes.length; i++) {
      if (this.attributes[i].nodeValue) {
        attributes[this.attributes[i].nodeName] = this.attributes[i].nodeValue;
      }
    }

    this.editor = new EditorView({
      ...attributes,
      parent: this.shadowRoot?.getElementById("formkl__editor") as HTMLElement,
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
      ],
    });
  }

  private setContent(value: string) {
    this.editor?.dispatch({
      changes: {
        from: 0,
        to: this.editor.state.doc.length,
        insert: value,
      },
    });
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (name === "value") {
      this.setContent(newValue);
    }
  }
}

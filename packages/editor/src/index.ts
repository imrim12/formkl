import { indentWithTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";
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
  // Vue call order:
  // 1. get value
  // 3. connectedCallback
  // 2. set value
  // 4. get value (on every update)

  // React call order:
  // 1. get value
  // 2. attributeChangedCallback
  // 3. get value
  // 4. connectedCallback
  // 5. get value (on every update)
  // 6. attributeChangedCallback (on every update)

  return class FormklEditor extends HTMLElement {
    static get observedAttributes() {
      return ["value"];
    }

    private modified = false;

    public editor: EditorView | null = null;

    public get value() {
      return this.getContent();
    }

    public set value(newValue: string) {
      this.setContent(newValue);
    }

    public connectedCallback() {}

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
      if (name === "value") {
        this.setContent(newValue);
      }
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      EditorView.theme(options?.theme || {}, { dark: Boolean(options?.dark) });

      const wrapper = document.createElement("div");
      wrapper.id = "formkl__editor";

      this.shadowRoot.appendChild(wrapper);

      this.editor = new EditorView({
        ...options,
        parent: this.shadowRoot.getElementById("formkl__editor"),
        state: EditorState.create({
          doc: this.value,
          extensions: [
            basicSetup,
            keymap.of([indentWithTab]),
            AutoCompleteExtension,
            LintExtension,
            EditorView.updateListener.of((viewUpdate) => {
              const eventInput = new CustomEvent("input", { detail: this.value });
              const eventFocus = new CustomEvent("focus");
              const eventBlur = new CustomEvent("blur");
              const eventChange = new CustomEvent("change");
              // https://discuss.codemirror.net/t/codemirror-6-proper-way-to-listen-for-changes/2395/11
              if (viewUpdate.docChanged) {
                this.dispatchEvent(eventInput);

                this.modified = true;
              }
              // focus state change
              if (viewUpdate.focusChanged) {
                viewUpdate.view.hasFocus
                  ? this.dispatchEvent(eventFocus)
                  : this.dispatchEvent(eventBlur);

                if (this.modified && !viewUpdate.view.hasFocus) {
                  this.dispatchEvent(eventChange);

                  this.modified = false;
                }
              }
            }),
          ].concat(options?.extensions || []),
        }),
      });
    }

    public getContent() {
      return this.editor?.state.doc.toString() || "";
    }

    public setContent(content: string) {
      if (content !== this.getContent()) {
        this.editor.dispatch({
          changes: {
            from: 0,
            to: this.editor.state.doc.length,
            insert: content,
          },
        });
      }
    }
  };
};

export default { createEditor };

if (window && window.customElements) {
  window.customElements.define("formkl-editor", createEditor());
}

<template>
  <div class="formkl__editor" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, PropType, ref, Ref, watch } from "vue";
import { basicSetup, EditorView } from "codemirror";

import { EditorViewConfig, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";

import { AutoCompleteExtension } from "./extensions/autocomplete";
import { LintExtension } from "./extensions/lint";
import { Extension } from "@codemirror/state";

export default defineComponent({
  name: "FormklEditor",
  props: {
    modelValue: {
      type: String,
      default: `// Start writing your formkl
formkl "Form title" {
  "Personal Information" includes {
    "Fullname" text;
    "Gender" radio ("Male","Female","Other");
  }
}`,
    },
    options: {
      type: Object as PropType<EditorViewConfig>,
      default: () => ({}),
    },
    extensions: {
      type: Array as PropType<Array<Extension>>,
      default: () => [],
    },
  },
  emits: ["update:modelValue", "ready"],
  setup(props, { emit }) {
    const editor: Ref<EditorView | null> = ref(null);
    const vm = getCurrentInstance()?.proxy;

    onMounted(() => {
      editor.value = new EditorView({
        parent: vm?.$el,
        ...props.options,
        doc: props.modelValue,
        extensions: [
          basicSetup,
          keymap.of([indentWithTab]),
          AutoCompleteExtension,
          LintExtension,
          EditorView.updateListener.of(function (e) {
            emit("update:modelValue", e.state.doc.toString());
          }),
          ...props.extensions,
        ],
      });

      emit("ready");
    });

    const _setContent = (value: string) => {
      if (editor.value) {
        editor.value.dispatch({
          changes: {
            from: 0,
            to: editor.value.state.doc.length,
            insert: value,
          },
        });

        emit("update:modelValue", value);
      }
    };

    watch(
      () => props.modelValue,
      (newValue) => {
        const currentDoc = editor.value?.state.doc.toString();
        if (newValue !== currentDoc) {
          _setContent(newValue);
        }
      },
    );

    return {
      editor,
    };
  },
});
</script>

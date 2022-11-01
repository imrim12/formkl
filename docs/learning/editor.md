# Editor

Any language that is code would need a beautiful editor to be written on. And the editor should be able to:
- ✨ Highlight the syntax
- ✅ Auto complete the syntax
- ❌ Show the syntax error at lines and columns

We use [Codemirror 6](https://codemirror.net/6/) to build the editor. It is a very powerful editor that can be extended to support any language. It is also very easy to use.

But in our case, this is a brand new language and we need to build the syntax highlighter, auto complete and syntax error checker ourselves.

## Syntax Highlighter

**coming soon**

## Auto Complete

We use [`@codemirror/autocomplete`](https://codemirror.net/6/docs/ref/#autocomplete) to define a set of keyword and definitions for auto complete.

The code is located at [`packages/editor/src/extensions/autocomplete.ts`](https://github.com/formkl/formkl/blob/9b5537cd326534208e2154b50664d9d098fb7113/packages/editor/src/extensions/autocomplete.ts)

## Syntax Error Checker

Error Checker or as known as Linter is a very important part of the editor. It helps the user to find the syntax error and fix it, [`@codemirror/lint`](https://codemirror.net/6/docs/ref/#lint) is used for this.

We use our own [FORMKL Parser](/introduction#basic-example) to parse the syntax, it would be the correct syntax if it's parsed successfully. Otherwise, the parser will throw a syntax error.

The code is located at [`packages/editor/src/extensions/lint.ts`](https://github.com/formkl/formkl/blob/9b5537cd326534208e2154b50664d9d098fb7113/packages/editor/src/extensions/lint.ts).

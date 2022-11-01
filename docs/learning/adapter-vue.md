# Adapter (Vue)

## Rendering

We prefer [JSX](https://vuejs.org/guide/extras/render-function.html#jsx-tsx) over template due to its flexibility and readability.

Plus, we want to make it easier for contributors. [JSX](https://vuejs.org/guide/extras/render-function.html#jsx-tsx) is a very familiar syntax to Front-end developers (Including Vue or React developers). And if possible in the future refactoring work, we can build common JSX files.

A Form component tree is as follows:

```bash
├─ Main.tsx
├──── Form.tsx
├─────── Section.tsx (loop)
├────────── Field.tsx (loop)
├─(can be)─ FormklCheckbox.tsx
├─(can be)─ FormklSelect.tsx
├─(can be)─ FormklRadio.tsx
```

## Reactivity
We believe that the form model value can be modified from:
- Form event
- Section event
- Field event

## Event handling

## Validation

## Extensibility
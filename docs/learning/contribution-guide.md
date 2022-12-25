# Contribution guide

## Technologies

- ✅ **[Typescript](https://www.typescriptlang.org/)** ✨

- ✅ **[pnpm](https://pnpm.io)** ✨
- ✅ **[nx](https://nx.dev)** ✨
- ✅ **[Vite](https://vitejs.dev)** ⚡️
- ✅ **[Unbuild](https://github.com/unjs/unbuild)** ⚡️

- ✅ **[Vitest](https://vitest.dev)** 🧪

## Supported Frameworks by Adapter

- ✅ **[Vue 3](https://vuejs.org)**
- 🚧 **[React](https://reactjs.org)** -- *coming soon*
- 🚧 **Universal (Web component)** -- *coming soon*

## Setup the project

The project is built as a pnpm workspaces, please install pnpm to start contributing.

More about pnpm, please refer to [pnpm.io](https://pnpm.io), if you don't have it, you can install it using npm from your terminal.

```bash
npm i -g pnpm
```

Then clone the [repository](https://github.com/imrim12/formkl) and open the cloned directory with your code editor or IDE.
```bash
git clone git@github.com:imrim12/formkl.git
```

Install the workspace dependencies

```bash
pnpm -r i
```

Build all packages

```bash
pnpm build
```

Checkout the sandbox to experiment with the packages locally

```bash
pnpm -F ./sandbox dev
```


## Project structure

These are the main packages in this project, include our core language parser, adapters, editor and utils

```bash
|-- docs
|-- packages
    |-- adapters
        |-- vue
        |-- ...coming soon...
    |-- editor
    |-- language
    |-- plugins
        |-- vue
        |-- ...coming soon...
    |-- shared
|-- sandbox
```

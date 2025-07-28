Directory structure:
└── imrim12-formkl/
    ├── README.md
    ├── CHANGELOG.md
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md
    ├── LICENSE
    ├── nx.json
    ├── package.json
    ├── tsconfig.json
    ├── vitest.config.ts
    ├── .all-contributorsrc
    ├── .commitlintrc.json
    ├── .eslintrc.js
    ├── .gitpod.yml
    ├── .npmignore
    ├── .npmrc
    ├── .nvmrc
    ├── .prettierignore
    ├── .prettierrc
    ├── .release-it.json
    ├── docs/
    │   ├── index.md
    │   ├── introduction.md
    │   ├── roadmap.md
    │   ├── why.md
    │   ├── adapters/
    │   │   ├── react.md
    │   │   ├── svelte.md
    │   │   └── vue.md
    │   ├── components/
    │   │   ├── ButtonCard.vue
    │   │   └── icons/
    │   │       ├── Angular.vue
    │   │       ├── React.vue
    │   │       └── Vue.vue
    │   ├── installation/
    │   │   ├── vite.md
    │   │   └── webpack.md
    │   ├── learning/
    │   │   ├── adapter-react.md
    │   │   ├── adapter-svelte.md
    │   │   ├── adapter-vue.md
    │   │   ├── contribution-guide.md
    │   │   ├── core-language.md
    │   │   ├── editor.md
    │   │   └── grammar.md
    │   ├── public/
    │   │   ├── sitemap.xml
    │   │   └── assets/
    │   │       ├── Formkl final.ai
    │   │       ├── mmrtext.zip
    │   │       └── EPS/
    │   │           └── Formkl final.eps
    │   ├── syntax/
    │   │   ├── field.md
    │   │   ├── form.md
    │   │   ├── model.md
    │   │   ├── multiple.md
    │   │   ├── submission.md
    │   │   └── validation.md
    │   └── .vitepress/
    │       ├── config.js
    │       └── theme/
    │           ├── custom.css
    │           └── index.js
    ├── extensions/
    │   └── vscode/
    │       ├── README.md
    │       ├── CHANGELOG.md
    │       ├── language-configuration.json
    │       ├── LICENSE
    │       ├── package.json
    │       ├── vsc-extension-quickstart.md
    │       ├── lsp/
    │       │   ├── README.md
    │       │   ├── tsconfig.json
    │       │   ├── client/
    │       │   │   ├── package.json
    │       │   │   ├── tsconfig.json
    │       │   │   └── src/
    │       │   │       └── extension.ts
    │       │   └── server/
    │       │       ├── package.json
    │       │       ├── tsconfig.json
    │       │       └── src/
    │       │           └── server.ts
    │       └── syntaxes/
    │           └── formkl.tmLanguage.json
    ├── packages/
    │   ├── adapters/
    │   │   ├── react/
    │   │   │   ├── package.json
    │   │   │   └── .npmignore
    │   │   ├── svelte/
    │   │   │   ├── package.json
    │   │   │   └── .npmignore
    │   │   └── vue/
    │   │       ├── README.md
    │   │       ├── form-shim.d.ts
    │   │       ├── package.json
    │   │       ├── tsconfig.json
    │   │       ├── vite.config.ts
    │   │       ├── .npmignore
    │   │       └── src/
    │   │           ├── index.ts
    │   │           ├── main.vue
    │   │           ├── __test__/
    │   │           │   ├── basic-rendering.test.ts
    │   │           │   └── syntax.form
    │   │           ├── components/
    │   │           │   ├── field-node.vue
    │   │           │   ├── form-node.vue
    │   │           │   └── section-node.vue
    │   │           ├── keys/
    │   │           │   └── theme.ts
    │   │           └── layouts/
    │   │               └── default.vue
    │   ├── editor/
    │   │   ├── README.md
    │   │   ├── build.config.ts
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── .npmignore
    │   │   └── src/
    │   │       ├── env.d.ts
    │   │       ├── index.ts
    │   │       └── extensions/
    │   │           ├── autocomplete.ts
    │   │           ├── index.ts
    │   │           └── lint.ts
    │   ├── elemento/
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── vite.config.ts
    │   │   └── src/
    │   │       ├── index.ts
    │   │       ├── style.css
    │   │       └── components/
    │   │           ├── checkbox.component.ts
    │   │           ├── radio.component.ts
    │   │           ├── select.component.ts
    │   │           └── useSelection.ts
    │   ├── language/
    │   │   ├── README.md
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── vite.config.ts
    │   │   ├── .npmignore
    │   │   └── src/
    │   │       ├── define.ts
    │   │       ├── index.ts
    │   │       ├── parser.ts
    │   │       ├── stringifier.ts
    │   │       ├── tokenizer.ts
    │   │       ├── __tests__/
    │   │       │   ├── capitalized-syntax.test.ts
    │   │       │   ├── field-custom.test.ts
    │   │       │   ├── field-multiple-responses.test.ts
    │   │       │   ├── field-required.test.ts
    │   │       │   ├── field-validation-with-keyword-value.test.ts
    │   │       │   ├── field-with-alias.test.ts
    │   │       │   ├── field-with-label.test.ts
    │   │       │   ├── field-with-logic-validation.test.ts
    │   │       │   ├── field-with-regex-validation.test.ts
    │   │       │   ├── form-with-description.test.ts
    │   │       │   ├── form-with-flattened-model.test.ts
    │   │       │   ├── form-with-title.test.ts
    │   │       │   ├── minimal.test.ts
    │   │       │   ├── multiple-field.test.ts
    │   │       │   ├── multiple-section.test.ts
    │   │       │   ├── section-multiple-response.test.ts
    │   │       │   ├── section-with-alias.test.ts
    │   │       │   ├── section-with-title.test.ts
    │   │       │   └── uppercase-syntax.test.ts
    │   │       ├── types/
    │   │       │   ├── index.ts
    │   │       │   ├── spec.type.ts
    │   │       │   └── token.type.ts
    │   │       └── utils/
    │   │           ├── capitalize.ts
    │   │           ├── createKeywordRegex.ts
    │   │           └── kebabCase.ts
    │   └── shared/
    │       ├── README.md
    │       ├── LICENSE
    │       ├── package.json
    │       ├── tsconfig.json
    │       ├── .npmignore
    │       └── src/
    │           ├── index.ts
    │           ├── __tests__/
    │           │   ├── validate-logic-and-n-or.test.ts
    │           │   ├── validate-logic-and.test.ts
    │           │   ├── validate-logic-gt.test.ts
    │           │   ├── validate-logic-lt.test.ts
    │           │   ├── validate-logic-n-regex.test.ts
    │           │   ├── validate-logic-or.test.ts
    │           │   ├── validate-regex.test.ts
    │           │   └── with-parser/
    │           │       ├── validate-logic-and-n-or.test.ts
    │           │       ├── validate-logic-and.test.ts
    │           │       ├── validate-logic-gt.test.ts
    │           │       ├── validate-logic-lt.test.ts
    │           │       ├── validate-logic-n-regex.test.ts
    │           │       ├── validate-logic-or.test.ts
    │           │       └── validate-regex.test.ts
    │           ├── keys/
    │           │   ├── formkl.ts
    │           │   ├── http.ts
    │           │   ├── index.ts
    │           │   ├── instance.ts
    │           │   └── model.ts
    │           ├── theme/
    │           │   └── index.ts
    │           ├── types/
    │           │   ├── field-custom.interface.ts
    │           │   ├── field-default.interface.ts
    │           │   ├── field-default.type.ts
    │           │   ├── field-selection.interface.ts
    │           │   ├── field-selection.type.ts
    │           │   ├── formkl.interface.ts
    │           │   ├── http-method.type.ts
    │           │   ├── index.ts
    │           │   ├── model.type.ts
    │           │   ├── schema.type.ts
    │           │   ├── section.interface.ts
    │           │   ├── validation-logic.interface.ts
    │           │   └── validation.interface.ts
    │           ├── utils/
    │           │   ├── get.ts
    │           │   ├── index.ts
    │           │   ├── isNaNStrict.ts
    │           │   └── uniqBy.ts
    │           └── validator/
    │               ├── index.ts
    │               ├── validateLogicAnd.ts
    │               ├── validateLogicOperator.ts
    │               ├── validateLogicOr.ts
    │               └── validateRegex.ts
    ├── public/
    │   └── sitemap.xml
    ├── .github/
    │   ├── ISSUE_TEMPLATE.md
    │   ├── PULL_REQUEST_TEMPLATE.md
    │   ├── stale.yml
    │   └── workflows/
    │       ├── codeql-analysis.yml
    │       └── nx-report.yml
    └── .husky/
        ├── commit-msg
        └── pre-commit


Files Content:

================================================
FILE: README.md
================================================
# Formkl - Form marKup Language
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Formkl (Form marKup Language) is an open-source DSL (Domain-Specific Language) to define and create form schema. It is designed to be simple, consistent and highly readable as natural language.

## Getting Started

Please follow the documentation at [formkl.org](https://formkl.org)!

View sandbox: [sandbox.formkl.org](https://sandbox.formkl.org)

## Contribution

Please make sure to read the [Contributing Guide](https://formkl.org/learning/contribution-guide.html) before making a pull request.

Thank you to all the people who already contributed to the Formkl - Form marKup Language project!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://bongudth.me"><img src="https://avatars.githubusercontent.com/u/73637868?v=4?s=100" width="100px;" alt="Huynh Thi Khanh Linh"/><br /><sub><b>Huynh Thi Khanh Linh</b></sub></a><br /><a href="https://github.com/imrim12/formkl/commits?author=bongudth" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/tai-le-05124a187/"><img src="https://avatars.githubusercontent.com/u/44340263?v=4?s=100" width="100px;" alt="Tai Le"/><br /><sub><b>Tai Le</b></sub></a><br /><a href="#plugin-tailtq" title="Plugin/utility libraries">🔌</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://nguyenhuunguyeny.com"><img src="https://avatars.githubusercontent.com/u/46400321?v=4?s=100" width="100px;" alt="Rim (Y Nguyen)"/><br /><sub><b>Rim (Y Nguyen)</b></sub></a><br /><a href="#maintenance-imrim12" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/quangtudng"><img src="https://avatars.githubusercontent.com/u/46390091?v=4?s=100" width="100px;" alt="hiimtu"/><br /><sub><b>hiimtu</b></sub></a><br /><a href="#maintenance-quangtudng" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kenjinz"><img src="https://avatars.githubusercontent.com/u/46472859?v=4?s=100" width="100px;" alt="Mr.TruongAnhVu"/><br /><sub><b>Mr.TruongAnhVu</b></sub></a><br /><a href="#maintenance-kenjinz" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Nguyen Huu Nguyen Y

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


================================================
FILE: CHANGELOG.md
================================================


## [0.1.0](https://github.com/imrim12/formkl/compare/1.0.0-rc.5...0.1.0) (2022-02-05)
### Bug Fixes

* fix: count line and column in syntax error ([c0976d5](https://github.com/imrim12/formkl/commit/c0976d512e5a3637fd904f949672b08008abd753))

## [1.0.0-rc.5](https://github.com/imrim12/formkl/compare/1.0.0-rc.4...1.0.0-rc.5) (2022-02-03)
### Bug Fixes

* fix: change VNodeField to stateful component ([e7fed1f](https://github.com/imrim12/formkl/commit/e7fed1f9eb4e79533faca8d1db819d9662d0dd1b))

## [1.0.0-rc.4](https://github.com/imrim12/formkl/compare/1.0.0-rc.3...1.0.0-rc.4) (2022-01-15)

## [1.0.0-rc.3](https://github.com/imrim12/formkl/compare/1.0.0-rc.2...1.0.0-rc.3) (2022-12-25)


### Features

* add stringifier ([8c8d13e](https://github.com/imrim12/formkl/commit/8c8d13e22c4f6cfd2707ec0423700590bc7bb62a))
* added husky git hooks ([966c15f](https://github.com/imrim12/formkl/commit/966c15f7dae5aeebb7525104a135c4c9e7a4faad))
* added release-it package for release ([e46d2c0](https://github.com/imrim12/formkl/commit/e46d2c06161baea229213e5bb26be6386f44bd10))
* handle keyword value in validation ([45972c6](https://github.com/imrim12/formkl/commit/45972c6a4116fe34881898adb1d2554f15bd9e6c))
* support form lifecycle hooks ([d2aff34](https://github.com/imrim12/formkl/commit/d2aff3436ad0c9e77b4d3728f0dcfe915f6be804))


### Bug Fixes

* always return true when use regex with logic validator ([3dd1e41](https://github.com/imrim12/formkl/commit/3dd1e418f181390600c656f6956b28d1bc8f99ec))
* circular dependencies build fail nx ([d6c59a6](https://github.com/imrim12/formkl/commit/d6c59a68df2c44b9f1d42018bb95ffef7b435605))
* editor web component lifecycle works differently on vue/react ([7d006b7](https://github.com/imrim12/formkl/commit/7d006b776c28ef33682cd0906c241ae4e78cb5e7))
* setup vitest component testing ([8a3f07d](https://github.com/imrim12/formkl/commit/8a3f07df969299dadb78e4c3b8e96b3ccbaf3dac))
* tsconfig.json ([d7657fa](https://github.com/imrim12/formkl/commit/d7657fa536358d70136f328b12c8b5d52b600f77))
* vercel build fail ([8ad35a6](https://github.com/imrim12/formkl/commit/8ad35a6a93a25e6d1ae65b2731db73360e870a70))

## [1.0.0-rc.2](https://github.com/imrim12/formkl/compare/1.0.0-rc.1...1.0.0-rc.2) (2022-11-23)


### Features

* added husky git hooks ([966c15f](https://github.com/imrim12/formkl/commit/966c15f7dae5aeebb7525104a135c4c9e7a4faad))
* added release-it package for release ([e46d2c0](https://github.com/imrim12/formkl/commit/e46d2c06161baea229213e5bb26be6386f44bd10))
* support form lifecycle hooks ([d2aff34](https://github.com/imrim12/formkl/commit/d2aff3436ad0c9e77b4d3728f0dcfe915f6be804))


### Bug Fixes

* always return true when use regex with logic validator ([3dd1e41](https://github.com/imrim12/formkl/commit/3dd1e418f181390600c656f6956b28d1bc8f99ec))
* build fail ([51298d8](https://github.com/imrim12/formkl/commit/51298d80524a2359195d3f861208c1b06e0108df))
* circular dependencies build fail nx ([d6c59a6](https://github.com/imrim12/formkl/commit/d6c59a68df2c44b9f1d42018bb95ffef7b435605))
* editor web component lifecycle works differently on vue/react ([7d006b7](https://github.com/imrim12/formkl/commit/7d006b776c28ef33682cd0906c241ae4e78cb5e7))
* setup vitest component testing ([8a3f07d](https://github.com/imrim12/formkl/commit/8a3f07df969299dadb78e4c3b8e96b3ccbaf3dac))
* tsconfig.json ([d7657fa](https://github.com/imrim12/formkl/commit/d7657fa536358d70136f328b12c8b5d52b600f77))
* vercel build fail ([8ad35a6](https://github.com/imrim12/formkl/commit/8ad35a6a93a25e6d1ae65b2731db73360e870a70))


================================================
FILE: CODE_OF_CONDUCT.md
================================================
# Contributor Covenant Code of Conduct

## Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, sex characteristics, gender identity and expression,
level of experience, education, socio-economic status, nationality, personal
appearance, race, religion, or sexual identity and orientation.

## Our Standards

Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
  advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

## Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at hi@element-plus.org. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see
https://www.contributor-covenant.org/faq



================================================
FILE: CONTRIBUTING.md
================================================
# Welcome to FORMKL contributing guide

Thank you for investing your time in contributing to our project!

Read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

Please make sure to read the [Contributing Guide](https://formkl.org/learning/contribution-guide.html) before making a pull request.

Thank you to all the people who already contributed to Vue!

<a href="https://github.com/imrim12/formkl/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=imrim12/formkl" />
</a>

Made with [contrib.rocks](https://contrib.rocks).



================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2022-PRESENT Formkl - Form marKup Language

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



================================================
FILE: nx.json
================================================
{
  "tasksRunnerOptions": {
    "default": {
      "runner": "@nrwl/nx-cloud",
      "options": {
        "cacheableOperations": ["build", "typecheck", "test"],
        "accessToken": "NzA3YzM4NWMtODk0Ni00M2I5LWJkMjItMzU1MjMzNGM0MGY4fHJlYWQtd3JpdGU="
      }
    }
  },
  "namedInputs": {
    "noMarkDown": ["!{projectRoot}/**/*.md"]
  },
  "targetDefaults": {
    "build": {
      "inputs": ["noMarkDown", "^noMarkDown"],
      "dependsOn": ["^build"]
    },
    "typecheck": {
      "inputs": ["noMarkDown", "^noMarkDown"],
      "dependsOn": ["^build"]
    },
    "test": {
      "inputs": ["noMarkDown", "^noMarkDown"],
      "dependsOn": ["^build"]
    }
  }
}



================================================
FILE: package.json
================================================
{
	"type": "module",
	"version": "0.2.0",
	"description": "Form marKup Language",
	"packageManager": "pnpm@7.12.2",
	"scripts": {
		"nx": "nx",
		"build": "nx build",
		"build:all": "nx run-many --target=build --all --exclude=@formkl/sandbox",
		"typecheck": "nx run-many --target=typecheck --all --exclude=@formkl/sandbox",
		"test": "vitest run",
		"test:ui": "vitest --ui",
		"dev:docs": "vitepress dev docs",
		"serve:docs": "vitepress serve docs",
		"build:docs": "vitepress build docs",
		"prepare-husky": "husky install",
		"release": "release-it",
		"dev:vue": "pnpm -F ./sandbox dev",
		"dev:react": "pnpm -F ./sandbox-react dev"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/imrim12/formkl.git"
	},
	"keywords": [
		"form",
		"formkl",
		"formjs",
		"form",
		"generator",
		"schema"
	],
	"author": "thecodeorigin",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/imrim12/formkl/issues"
	},
	"homepage": "https://github.com/imrim12/formkl#readme",
	"workspaces": [
		"packages/**",
		"sandbox"
	],
	"dependencies": {
		"@formkl/elemento": "workspace:*",
		"@formkl/shared": "workspace:*",
		"@formkl/plugin-vite": "workspace:*",
		"@formkl/plugin-webpack": "workspace:*",
		"@formkl/vue": "workspace:*",
		"formkl": "workspace:*",
		"vitepress": "1.0.0-alpha.20"
	},
	"devDependencies": {
		"@commitlint/cli": "^17.2.0",
		"@commitlint/config-conventional": "^17.2.0",
		"@nrwl/nx-cloud": "latest",
		"@nrwl/workspace": "latest",
		"@release-it/conventional-changelog": "^5.1.1",
		"@types/lodash": "^4.14.200",
		"@types/node": "^20.8.10",
		"@typescript-eslint/eslint-plugin": "^5.38.0",
		"@typescript-eslint/parser": "^5.38.0",
		"@vitejs/plugin-vue": "^4.4.0",
		"@vitejs/plugin-vue-jsx": "^3.0.2",
		"@vitest/ui": "^0.34.6",
		"@vue/test-utils": "^2.2.1",
		"eslint": "^8.23.1",
		"husky": "^8.0.2",
		"jsdom": "^20.0.2",
		"nx": "latest",
		"release-it": "^15.5.0",
		"rimraf": "^5.0.5",
		"ts-node": "^10.9.1",
		"typescript": "^5.2.2",
		"vitest": "^0.34.6",
		"vue": "^3.3.7",
		"vue-tsc": "^1.8.22"
	}
}


================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": ".",
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "Node",
    "target": "ESNext",
    "declaration": false,
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "useDefineForClassFields": true,
    "lib": ["ESNext", "DOM"],
    "types": ["vitest/globals"],
    "outDir": "./dist"
  },
  "include": ["./**/*.ts", "./**/*.d.ts", "./**/*.test.ts"],
  "exclude": ["./node_modules", "./dist"]
}



================================================
FILE: vitest.config.ts
================================================
import { defineConfig } from "vitest/config";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import formkl from "@formkl/plugin-vite";

export default defineConfig({
  plugins: [vue(), vueJsx(), formkl()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});



================================================
FILE: .all-contributorsrc
================================================
{
  "files": [
    "README.md"
  ],
  "imageSize": 100,
  "commit": false,
  "commitConvention": "angular",
  "contributors": [
    {
      "login": "bongudth",
      "name": "Huynh Thi Khanh Linh",
      "avatar_url": "https://avatars.githubusercontent.com/u/73637868?v=4",
      "profile": "http://bongudth.me",
      "contributions": [
        "doc"
      ]
    },
    {
      "login": "tailtq",
      "name": "Tai Le",
      "avatar_url": "https://avatars.githubusercontent.com/u/44340263?v=4",
      "profile": "https://www.linkedin.com/in/tai-le-05124a187/",
      "contributions": [
        "plugin"
      ]
    },
    {
      "login": "imrim12",
      "name": "Rim (Y Nguyen)",
      "avatar_url": "https://avatars.githubusercontent.com/u/46400321?v=4",
      "profile": "http://nguyenhuunguyeny.com",
      "contributions": [
        "maintenance"
      ]
    },
    {
      "login": "quangtudng",
      "name": "hiimtu",
      "avatar_url": "https://avatars.githubusercontent.com/u/46390091?v=4",
      "profile": "https://github.com/quangtudng",
      "contributions": [
        "maintenance"
      ]
    },
    {
      "login": "kenjinz",
      "name": "Mr.TruongAnhVu",
      "avatar_url": "https://avatars.githubusercontent.com/u/46472859?v=4",
      "profile": "https://github.com/kenjinz",
      "contributions": [
        "maintenance"
      ]
    }
  ],
  "contributorsPerLine": 7,
  "skipCi": true,
  "repoType": "github",
  "repoHost": "https://github.com",
  "projectName": "formkl",
  "projectOwner": "imrim12"
}



================================================
FILE: .commitlintrc.json
================================================
{
  "extends": ["@commitlint/config-conventional"]
}



================================================
FILE: .eslintrc.js
================================================
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { allow: ['_'] }],
    'lines-between-class-members': ['error', 'always'],
    'no-param-reassign': ['warn', { props: true, ignorePropertyModificationsFor: ['draft'] }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts'],
      },
    },
  },
};



================================================
FILE: .gitpod.yml
================================================
# This configuration file was automatically generated by Gitpod.
# Please adjust to your needs (see https://www.gitpod.io/docs/config-gitpod-file)
# and commit this file to your remote git repository to share the goodness with others.

tasks:
  - init: pnpm install





================================================
FILE: .npmignore
================================================
sandbox
public
node_modules



================================================
FILE: .npmrc
================================================
auto-install-peers=true


================================================
FILE: .nvmrc
================================================
v16



================================================
FILE: .prettierignore
================================================
# Ignore all Markdown files:
*.md


================================================
FILE: .prettierrc
================================================
{
  "printWidth": 100,
  "bracketSpacing": true,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "endOfLine": "auto"
}



================================================
FILE: .release-it.json
================================================
{
  "git": {
    "commitMessage": "chore: update tags and release project to v${version}"
  },
  "npm": {
    "publish": false
  },
  "github": {
    "release": true
  },
  "plugins": {
    "@release-it/conventional-changelog": {
      "preset": "conventionalcommits",
      "infile": "CHANGELOG.md",
      "types": [
        {"type": "feat", "section": "Features"},
        {"type": "fix", "section": "Fixes"},
        {"type": "chore", "section": "Minor updates"},
        {"type": "docs", "section": "Minor updates"},
        {"type": "style", "section": "Minor updates"},
        {"type": "refactor", "section": "Features"},
        {"type": "perf", "section": "Minor updates"},
        {"type": "test", "section": "Minor updates"}
      ]
    }
  }
}



================================================
FILE: docs/index.md
================================================
---
layout: home

title: FORMKL
titleTemplate: Form marKup Language - Speed up form development.

head:
  - - meta
    - name: description
      content: An open-source DSL (Domain-Specific Language) to define and create form schema.
  - - meta
    - name: keywords
      content: formkl, form markup language, markup language, fast form, form, form.js, formkl, auto form
  - - meta
    - name: og:title
      content: Form marKup Language - Speed up form development.
  - - meta
    - name: og:description
      content: An open-source DSL (Domain-Specific Language) to define and create form schema.
  - - meta
    - name: og:url
      content: https://formkl.org
  - - meta
    - name: og:image
      content: https://res.cloudinary.com/i-m-rim/image/upload/v1671986246/personal/thumbnail_c23hb6.png
  - - meta
    - name: og:site_name
      content: Form marKup Language.
  - - meta
    - name: twitter:title
      content: Form marKup Language - Speed up form development.
  - - meta
    - name: twitter:description
      content: An open-source DSL (Domain-Specific Language) to define and create form schema.
  - - meta
    - name: twitter:image
      content: https://res.cloudinary.com/i-m-rim/image/upload/v1671986246/personal/thumbnail_c23hb6.png
  - - meta
    - name: twitter:card
      content: summary_large_image

hero:
  name: FORMKL
  text: Form marKup Language
  tagline: An open-source DSL (Domain-Specific Language) to define and create form schema.
  image:
    src: https://res.cloudinary.com/i-m-rim/image/upload/v1669218850/personal/logo_h6vt9n.svg
    alt: Formkl
  actions:
    - theme: brand
      text: Get Started
      link: /introduction
    - theme: alt
      text: Star on GitHub
      link: https://github.com/imrim12/formkl

features:
  - icon: ⚡️
    title: Build faster and focus on your products
    details: Formkl provides a parser to parse its syntax into a JSON schema, which can be used for any system.
  - icon: 💪
    title: Strong ecosystem
    details: Formkl adapters for Vue 3 and React, create a fully validated form with a few lines of code.
  - icon: 🎨
    title: Element Plus, Ant design and more.
    details: Formkl supports overriding with your own components written in these popular UI libs.
---



================================================
FILE: docs/introduction.md
================================================
<script setup>
import ButtonCard from "/components/ButtonCard.vue";
import VueLogo from '/components/icons/Vue.vue';
import ReactLogo from '/components/icons/React.vue';

const frameworks = [
  {
    name: "Vue 3",
    image: VueLogo,
    link: "/installation/vue",
  },
  {
    name: "React",
    image: ReactLogo,
    link: "/installation/react",
  },
]
</script>

# Introduction

[Start quickly with the syntax](/syntax/form)

[Look up the full grammar](/learning/grammar)

::: warning
🚧 🚧 🚧 `formkl` is currently experimental and not ready for production use. 🚧 🚧 🚧
:::

## What is FORMKL?

FORMKL is a markup language for creating forms, an open-source DSL (Domain Specific Language) to define form schemas and generate the corresponding HTML code. It is designed to be easy to learn and use, and to be consistent and highly readable as natural language.

## Learn about features

⚡️ Build forms in seconds

🍡 Mutiple responses

💪 Validation using operations and regex

💄 Styling with Element Plus

🎨 Custom themes

## Demo

You can visit the playground here: https://sandbox.formkl.org

The following syntax will be loaded to JavaScript object and can be rendered into UI using our [Formkl Adapter](/adapters/vue).

```text
formkl {
  "Personal Information" has {
    "Fullname" text;
    "Bio" paragraph;
  }
}
```

<div>
  <formkl syntax="formkl {'Personal Information' has {'Fullname' text;'Bio' paragraph;}}"></formkl>
</div>

## "Just the parser" example

Install the parser

```bash
# install the package
npm install formkl

# with yarn
yarn add formkl

# with pnpm
pnpm add formkl
```

```javascript
import FormklParser from "formkl";

const yourFormklSyntax = `
  formkl {
    "Personal Information" has {
      "Fullname" text;
      "Bio" paragraph;
    }
  }
`;

const parsedForm = FormklParser.parse(yourFormklSyntax);
```

The above formkl will be parsed into

```json
{
  "sections": [
    {
      "title": "Personal Information",
      "key": "personal-information2",
      "multiple": false,
      "fields": [
        {
          "type": "text",
          "label": "Fullname",
          "require": false,
          "key": "fullname",
          "multiple": false
        },
        {
          "type": "paragraph",
          "label": "Bio",
          "require": false,
          "key": "bio",
          "multiple": false
        }
      ]
    }
  ]
}
```

This piece of JSON can be rendered into UI using our Formkl Adapter
Or you can just use this to implement your own render logic.

Result:

<div>
  <formkl syntax="formkl {'Personal Information' has {'Fullname' text;'Bio' paragraph;}}"></formkl>
</div>


## Techstack

We are currently working on Vue 3 support. React and Svelte support will be available soon.

<div class="frameworks-container">
  <a :href="framework.link" v-for="framework in frameworks">
    <ButtonCard>
      <template #image>
        <component :is="framework.image"></component>
      </template>
      <template #title>
          {{ framework.name }}
      </template>
    </ButtonCard>
  </a>
</div>

<style>
  .frameworks-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>

❤️ If you want to help us, please contact us. We are looking for contributors.



================================================
FILE: docs/roadmap.md
================================================
# Possible form features:

## Display Mode

- ✅ Basic
- ⬜ One field per step
- ⬜ Tab / Wizard
- ⬜ Conversation
- ⬜ Paragraph

## Layout

- ⬜ Vertical
- ⬜ Inline
- ⬜ Grid (Rows & Columns)
- ⬜ Custom

## Transformer

- ⬜ Transform field value for submission
- ⬜ Transform field value for display
- ⬜ Transform section value for display
- ⬜ Transform form model when submitted

## Conditional Display

## Submitted or Non-Submitted form

## Components
### Inputs

- ⬜ Text
- ⬜ Number
- ⬜ Date
- ⬜ Time
- ⬜ DateTime
- ⬜ Checkbox
- ⬜ Radio
- ⬜ Select
- ⬜ MultiSelect
- ⬜ File
- ⬜ Others

### Others

- ⬜ Submit button
- ⬜ Reset button
- ⬜ Cancel button
- ⬜ Custom button
- ⬜ Form step indicator (For multi-step form)
- ⬜ Form section wrapper (with or without error display)
- ⬜ Form field wrapper (with or without error display)

## Validator


================================================
FILE: docs/why.md
================================================
# Why Formkl?

## The problems

Form is an essential module in any web application. It is used to collect data from users. There're so many ways to create a form, plus they come in different styles and the collected data has different structures.

**Management applications** tend to have a lot of forms for CRUD operations. The more forms you have, the more time you spend on creating them. And the more time you spend on creating them, the less time you spend on developing the core features of your application.

## The solution
The Form marKup Language (Formkl) ecosystem is creating a new way that is fast, consistent, and easy way to create forms.

- Extremely lightweight, no dependencies.
- Provided a strong ecosystem, including renderers that suits your favourite UI frameworks.
- Customizable themes, validation, and other features. You can add them once, and create forms across your application with just a few lines of code.
- Easy to learn and use, and to be consistent and highly readable as natural language.



================================================
FILE: docs/adapters/react.md
================================================
# Quick start with React

🚧 **[React](https://reactjs.org)** -- *coming soon*



================================================
FILE: docs/adapters/svelte.md
================================================
# Quick start with Svelte

🚧 **[Svelte](https://svelte.dev)** -- *coming soon*


================================================
FILE: docs/adapters/vue.md
================================================
# Quick start with Vue 3

This guide will walk you through the process of creating a simple form using `formkl` in your Vue 3 project.

## Demo

You can visit the playground here: https://sandbox.formkl.org/

## Instalation

To begin, install the `formkl` adapter as a dependency in your project:

Use your favorite package manager to install the packages, like `npm`, `yarn`, or `pnpm`

```cmd
pnpm add @formkl/vue @formkl/elemento
pnpm add -D @formkl/plugin-vite
```

### Setup loader

Setup `.form` file loader for your bundler ([Vite](https://vitejs.dev)/[Webpack](https://webpack.js.org/)) so you can import `.form` files directly in Vue file or JavaScript module.

You can checkout the installation guide for [Vite](/installation/vite) or [Webpack](/installation/webpack).

```typescript
// vite.config.ts
import FormklPlugin from "@formkl/plugin-vite";

export default {
  plugins: [
    // Your other plugins
    FormklPlugin(),
  ],
};
```

### Setup plugin

Setup `@formkl/vue` using the default theme `@formkl/elemento` or your own theme

```typescript
// main.ts
import { createApp } from "vue";
import FormklPlugin from "@formkl/vue";
import formklTheme from "@formkl/elemento";
import App from "./App.vue";

import "./style.css";

createApp(App)
  .use(FormklPlugin, {
    theme: formklTheme,
  })
  .mount("#app");

```

```css
/* style.css */
@import url(@formkl/elemento);
```

⚡️ That's all! You're ready to start building forms.

## Basic Usage

Use the `Formkl` component to render the form.

```text
// example.form
formkl {
  "Personal Information" has {
    "Fullname" text;
    "Bio" paragraph;
  }
}
```

```html
<!-- YourForm.vue -->
<template>
  <formkl v-model="exampleModel" :form="ExampleForm" />
</template>

<script lang="ts">
import ExampleForm from "./example.form";

export default {
  setup() {
    const exampleModel = ref({});

    return {
      ExampleForm,
      exampleModel,
    };
  },
};
</script>
```

Result:

<div>
  <formkl syntax="formkl {'Personal Information' has {'Fullname' text;'Bio' paragraph;}}"></formkl>
</div>

::: info Don't know the syntax in this example?
You'll learn about the syntax in the [Syntax guide](/syntax/form).
:::



================================================
FILE: docs/components/ButtonCard.vue
================================================
<template>
  <div class="button-card--container">
    <div class="button-card--image">
      <slot name="image" />
    </div>
    <div class="button-card--title">
      <slot name="title" />
    </div>
  </div>
</template>

<style scoped>
.button-card--container {
  width: fit-content;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: 1px solid #eaeaea;
  border-radius: 0.5rem;

  padding: 1rem;

  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.button-card--container:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.button-card--image {
  width: 4rem;
  height: 4rem;
}

.button-card--title {
  font-size: 2rem;
}
</style>


================================================
FILE: docs/components/icons/Angular.vue
================================================
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64px" height="64px">
    <path fill="#bdbdbd" d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z" />
    <path fill="#b71c1c" d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z" />
    <path fill="#dd2c00" d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z" />
    <path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z" />
    <path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z" />
    <path fill="#bdbdbd" d="M24 24H30V28H24z" />
    <path fill="#eee" d="M18 24H24V28H18z" />
  </svg>
</template>


================================================
FILE: docs/components/icons/React.vue
================================================
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="64px" height="64px">
    <path fill="#4e7ab5"
      d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z" />
    <path fill="#4e7ab5"
      d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z" />
    <path fill="#4e7ab5"
      d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z" />
    <path fill="#8bb7f0"
      d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z" />
    <path fill="#4e7ab5"
      d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z" />
    <path fill="#8bb7f0"
      d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z" />
    <path fill="#8bb7f0"
      d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z" />
    <g>
      <path fill="#8bb7f0"
        d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z" />
    </g>
  </svg>
</template>


================================================
FILE: docs/components/icons/Vue.vue
================================================
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="64px" height="64px">
    <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8" />
    <polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8" />
  </svg>
</template>


================================================
FILE: docs/installation/vite.md
================================================
# Quick start with Vite

`@formkl/plugin-vite` allows you to load `.form` files directly in your Vite project. Which also mean you can use it with your Vue, React or any other framework as long as it uses Vite as bundler.

Checkout guides for frameworks:
- [Vue 3](/adapters/vue)
- [React](/adapters/react)
- [Svelte](/adapters/svelte)

## Configuration

```js
// vite.config.js
import FormklPlugin from "@formkl/plugin-vite";
import path from "path";

export default {
  plugins: [
    FormklPlugin({
      // dts: {
      //   dir: path.resolve("./");
      // }
    }),
  ],
};
```

## Usage

```js
// In your project files app.vue, app.jsx, app.tsx, etc.
import LoginForm from "./login.form";

// Login form is only a raw Formkl instance
// You have to display it in your app by your own code
// or use the Formkl Adapters that support Vue, React, Svelte, etc.
```


================================================
FILE: docs/installation/webpack.md
================================================
# Quick start with Webpack

`@formkl/plugin-webpack` allows you to load `.form` files directly in your Webpack project. Which also mean you can use it with your Vue, React or any other framework as long as it uses Webpack as bundler.

Checkout guides for frameworks:
- [Vue 3](/adapters/vue)
- [React](/adapters/react)
- [Svelte](/adapters/svelte)

## Configuration

```js
// webpack.config.js
import { FormklWebpackPlugin } from "@formkl/plugin-webpack";
import path from "path";

export default {
  plugins: [
    // Custom functionality
    new FormklWebpackPlugin({
      // dts: {
      //   dir: path.resolve("./");
      // }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.form$/,
        use: ["@formkl/plugin-webpack"], // File loader
      },
    ],
  },
};
```

## Usage

```js
// In your project files app.vue, app.jsx, app.tsx, etc.
import LoginForm from "./login.form";

// Login form is only a raw Formkl instance
// You have to display it in your app by your own code
// or use the Formkl Adapters that support Vue, React, Svelte, etc.
```


================================================
FILE: docs/learning/adapter-react.md
================================================
# Adapter (React)

🚧 **[React](https://reactjs.org)** -- *coming soon*


================================================
FILE: docs/learning/adapter-svelte.md
================================================
# Adapter (Svelte)

🚧 **[Svelte](https://svelte.dev)** -- *coming soon*


================================================
FILE: docs/learning/adapter-vue.md
================================================
# Adapter (Vue)

## Philosophy

### Rendering

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


================================================
FILE: docs/learning/contribution-guide.md
================================================
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



================================================
FILE: docs/learning/core-language.md
================================================
# Core language

FORMKL is a markup language used to annotate form model, sections and fields. It simply contains a set of grammar rules and a parser.

## Grammar

The grammar is defined in [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form).

An simple example of EBNF:

```bash
# BNF is a set of rules that express the possible
# valid cases of a set of keywords (tokens)

Statement
  = Indefinite Subject # a girl, a boy, the spider man
  | Adjective Subject # beautiful girl, awesome boy
  | Indefinite Adjective Subject # a beautiful girl, the amazing spider man
  ;

Subject
  = "girl"
  | "boy"
  | "spider man"
  ;

Adjective
  = "beautiful"
  | "amazing"
  | "awesome"
  ;

Indefinite
  = "a"
  | "an"
  | "the"
  ;

```

Another simple example for programming language:

```bash

# Accept a full function declaration
#  function foo () {}
#  function foo (a, b) {}
#  function foo (a, b) {
#    var c = a + b;
#    return c;
# }
FunctionDeclaration
  = "function" Identifier "(" ParamList ")" BlockStatement
  ;

# Accept a list of parameters recursively or no parameter (null)
ParamList
  = null
  | Param
  | ParamList "," Param
  ;

Param
  = "somethinghere"
  ;

# Accept multiple lines of statements and wrapped in {  }
BlockStatement
  = "{" StatementList "}"
  ;

# Accept multiple lines of statements
StatementList
  = null
  | Statement
  | StatementList Statement
  ;

```

:::
Please aware that the grammar is over-simplified for the sake of example.
:::

## Tokenizer

The Tokenizer allows us to include the valid tokens for the syntax, this will help us validate the syntax and give a clear SyntaxError messages.

```
SyntaxError: Invalid token { at 12:34.
```

The tokens are characters, symbols, keywords, operators, etc. that are used to build the syntax.

## Parser

The parser uses the tokenizer to check for the syntax's grammar and return the parsed value as a usable JSON object.

```typescript
class Parser {
  constructor() {
    // Initialize the tokenizer
    this._tokenizer = new Tokenizer();
  }

  parse(string: string): Formkl {
    // Parse the input string
    return this.FormBlock();
  }

  /**
   * Main entry point.
   *
   * FormBlock
   *  = SectionBlockList
   *  ;
   */
  private FormBlock(): Formkl {}

  /**
   * SectionBlockList
   *  = (SectionBlock)*
   *  ;
   */
  private SectionBlockList(): Section[] {}

  private SectionBlock(): Section {}

  // ...
}
```

::: info Please aware that this code is over-simplified for the sake of example.
:::



================================================
FILE: docs/learning/editor.md
================================================
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

The code is located at [`packages/editor/src/extensions/autocomplete.ts`](https://github.com/imrim12/formkl/blob/9b5537cd326534208e2154b50664d9d098fb7113/packages/editor/src/extensions/autocomplete.ts)

## Syntax Error Checker

Error Checker or as known as Linter is a very important part of the editor. It helps the user to find the syntax error and fix it, [`@codemirror/lint`](https://codemirror.net/6/docs/ref/#lint) is used for this.

We use our own [FORMKL Parser](/introduction#basic-example) to parse the syntax, it would be the correct syntax if it's parsed successfully. Otherwise, the parser will throw a syntax error.

The code is located at [`packages/editor/src/extensions/lint.ts`](https://github.com/imrim12/formkl/blob/9b5537cd326534208e2154b50664d9d098fb7113/packages/editor/src/extensions/lint.ts).



================================================
FILE: docs/learning/grammar.md
================================================
# Formkl Full Grammar

This is the full grammar for the form markup language. It is written in [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) logic.

- Words in code block like `formkl` are the language keywords/tokens.
- Square brackets `[]` indicates an optional element.
- List-like bullet points or `|` indicate [alternative](https://en.wikipedia.org/wiki/Alternation_(formal_language_theory)) cases.
- Parentheses `()` indicate grouping.
- `*` indicates zero or more repetitions.

## FormBlock
`formkl` [[FormModel]](#formmodel) [[FormSubmissionFunction]](#formsubmissionfunction) [[StringLiteral]](#stringliteral) [[StringLiteral]](#stringliteral) `{` [[SectionBlockList]](#sectionblocklist) `}`

## FormModel
- `base`
- `flat`

## FormSubmissionFunction
[FormHttpMethod](#formhttpmethod) `(` [StringLiteral](#stringliteral) `)`

## FormHttpMethod
- `get`
- `post`
- `put`
- `patch`
- `delete`

## SectionBlockList
([SectionBlock](#sectionblock))*

## SectionBlock
[[NumericLiteral](#numericliteral) | `multiple`] [StringLiteral](#stringliteral) `includes` `{` [FieldStatementList](#fieldstatementlist) `}` [`as` [StringLiteral](#stringliteral)]

## FieldStatementList
([FieldStatement](#fieldstatement))*

## FieldStatement
- [[NumericLiteral](#numericliteral)] [`require`] [StringLiteral](#stringliteral) FieldExpression [`as` [StringLiteral](#stringliteral)]
- [`multiple`] [`require`] [StringLiteral](#stringliteral) FieldExpression [`as` [StringLiteral](#stringliteral)]

## FieldExpression
- [FieldDefaultExpression](#fielddefaultexpression)
- [FieldSelectionExpression](#fieldselectionexpression)
- [FieldValidatedExpression](#fieldvalidatedexpression)
- [FieldDatetimeExpression](#fielddatetimeexpression)
- [FieldExpression](#fieldexpression) [ValidationExpression](#validationexpression)

## FieldDefaultExpression
- `text`
- `paragraph`
- `number`
- `switch`

## FieldSelectionExpression
- [`select` | `checkbox` | `radio`] [StringLiteral](#stringliteral) [`url`] `(` [StringList](#stringlist) `)`
- [`select` | `checkbox` | `radio`] [StringLiteral](#stringliteral) `(` [StringList](#stringlist) `)`

## FieldValidatedExpression
- `email`
- `zip`
- `age`

## FieldDatetimeExpression
- `datetimerange`
- `datetime`
- `daterange`
- `date`
- `time`
- `timerange`

## ValidationExpression
- `valid` `(` [LogicalORExpression](#logicalorexpression) `)` [`regex` `(` [StringLiteral](#stringliteral) `)`]
- `regex` `(` [StringLiteral](#stringliteral) `)` [`valid` `(` [LogicalORExpression](#logicalorexpression) `)`]

## LogicalORExpression
- [LogicalANDExpression](#logicalandexpression)
- [LogicalANDExpression](#logicalandexpression) `or` [LogicalANDExpression](#logicalandexpression)

## LogicalANDExpression
- [RelationalExpression](#relationalexpression)
- [RelationalExpression](#relationalexpression) `and` [RelationalExpression](#relationalexpression)

## RelationalExpression
- `>`  [NumericLiteral](#numericliteral)
- `<`  [NumericLiteral](#numericliteral)
- `>=` [NumericLiteral](#numericliteral)
- `<=` [NumericLiteral](#numericliteral)
- `==` [Literal](#literal)
- `!=` [Literal](#literal)
- `has` [IncludableLiteral](#includableliteral)

## IncludableLiteral
[StringLiteral](#stringliteral) | [NumericLiteral](#numericliteral)

## Literal
- [StringLiteral](#stringliteral)
- [NumericLiteral](#numericliteral)
- [NaNLiteral](#nanliteral)
- [BooleanLiteral](#booleanliteral)
- [NullLiteral](#nullliteral)
- [UndefinedLiteral](#undefinedliteral)

## StringList
- [StringLiteral](#stringliteral)
- [StringLiteral](#stringliteral) `,` [StringList](#stringlist)

## NaNLiteral
`NaN`

## BooleanLiteral
`true` | `false`

## NullLiteral
`null`

## UndefinedLiteral
`undefined`

## StringLiteral
- `'` ([Character](#character))\* `'`
- `"` ([Character](#character))\* `"`

## NumericLiteral
([Digit](#digit))*

## Character
`A` | `B` | `C` | `D` | `E` | `F` | `G` |
`H` | `I` | `J` | `K` | `L` | `M` | `N` |
`O` | `P` | `Q` | `R` | `S` | `T` | `U` |
`V` | `W` | `X` | `Y` | `Z` | `a` | `b` |
`c` | `d` | `e` | `f` | `g` | `h` | `i` |
`j` | `k` | `l` | `m` | `n` | `o` | `p` |
`q` | `r` | `s` | `t` | `u` | `v` | `w` |
`x` | `y` | `z`

## Digit
`0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9`



================================================
FILE: docs/public/sitemap.xml
================================================
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://formkl.org/</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://formkl.org/syntax/form.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://formkl.org/introduction.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://formkl.org/installation/vue.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/installation/react.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/installation/svelte.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/syntax/field.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/syntax/model.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/syntax/validation.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/syntax/multiple.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/contribution-guide.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/core-language.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/adapter-vue.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/adapter-react.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/adapter-svelte.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/editor.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>


</urlset>


================================================
FILE: docs/public/assets/Formkl final.ai
================================================
[Binary file]


================================================
FILE: docs/public/assets/mmrtext.zip
================================================
[Binary file]


================================================
FILE: docs/public/assets/EPS/Formkl final.eps
================================================
[Binary file]


================================================
FILE: docs/syntax/field.md
================================================
# Field Expression

```bash
["multiple"] ["require"] [LABEL] [FIELD NAME] [VALIDATION];
```

## Default fields

Fields always have default labels, for text, it would be "Text".

```bash
text;
```

These are some supported field types by the syntax
| Name            | Syntax            | Description                       |
| --------------- | -------------     | --------------------------------- |
| Text            | `text`            | Single line text input            |
| Paragraph       | `paragraph`       | Multi line text input             |
| Number          | `number`          | Number input                      |
| Switch          | `switch`          | Switch with boolean value         |
| Date            | `date`            | Date input                        |
| Time            | `time`            | Time input                        |
| Date range      | `daterange`       | Date range input                  |
| Time range      | `timerange`       | Time range input                  |
| Date time       | `datetime`        | Date time input                   |
| Date time range | `datetimerange`   | Date time range input             |

## Selection fields

Section fields will have a list of options to choose from with the syntax:

```bash
[FIELD NAME] ([OPTIONS]);
```

For example:

```bash
select ("Option 1", "Option 2", "Option 3");
```

```bash
require "Gender" radio ("Male", "Female", "Other");
```

These are some supported selection field types by the syntax

| Name          | Syntax        | Description                             |
| ------------- | ------------- | --------------------------------------- |
| Checkbox      | `checkbox`    | Checkbox input                          |
| Radio         | `radio`       | Radio input                             |
| Select        | `select`      | Select input                            |

## Custom label

```bash
"Field with label" text;
```

## Custom alias
This is useful when you want to use a different key for the field in the model, see [Model](./model.md) for more information

```bash
"Home Address" text as "address_1";
```



================================================
FILE: docs/syntax/form.md
================================================
# Formkl declarations

formkl is declared with the `formkl` keyword. It is followed by a block of code that contains the form's structure.

- A form can have a title and a description.

`formkl` is declared using the `formkl` keyword. It is an object which contains a list of sections. Each section is a key-value pair where the key is the section name and the value is a list of fields.

## Form declaration

### Minimal form

This is the minimal syntax for a form to be parsed. This form will have no title, description, section title and the field will have a default label as `"Text"`.

```text
formkl {
  has {
    text;
  }
}
```

Or you can specify title, description, section title and field label. **The parser accept breaklines and tabs**, so feel free to rearrange the syntax to your liking.

```text
formkl
  "Your form title"
  "Your form description" {
  "Your section title" has {
    "Your field label" text;
  }
  "Your 2nd section title" has {
    "Another field label" paragraph;
  }
}
```



================================================
FILE: docs/syntax/model.md
================================================
# Form model

By default, formkl adapter will initialize the model with the below schema, and also provide a two-ways binding feature. You can simply use `<formkl v-model="yourModel"/>`

## Basic Schema

And the model structure would look like this

```json
{
  "personal-info": {
    "fullname": null,
    "bio": null
  }
}
```

In Typescript

```typescript
export type Schema = {
  [section: string]: {
    [field: string]: any;
  }
};
```

## Section with multiple responses

And the model structure would look like this

```json
{
  "work-experience": [
    {
      "company": null,
      "position": null,
      "start-date": null,
      "end-date": null
    }
  ]
}
```
In Typescript

```typescript
export type Schema = {
  [section: string]: Array<{
    [field: string]: any;
  }>
};
```

## Field with multiple responses
```json
{
  "personal-info": {
    "addressed": [
      null,
    ],
  }
}
```
In Typescript

```typescript
export type Schema = {
  [section: string]: {
    [field: string]: Array<any>;
  }
};
```


================================================
FILE: docs/syntax/multiple.md
================================================
# Field Expression

```bash
["multiple"] ["require"] [LABEL] [FIELD NAME] [VALIDATION];
```

Allow multiple responses
```bash
multiple "Favourite food" text;
```

Allow multiple responses and no empty answer allowed
```bash
multiple require "Home Address" text;
```

With alias
```bash
multiple require "Home Address" text as "address_1";
```



================================================
FILE: docs/syntax/submission.md
================================================
# Formkl submission

Formkl submission is declared with the function-like syntax `<HttpMethod> "(" <url> ")"`

## Simple usage

```text
formkl post("/subscribe") {
  has {
    "Your Email" text;
  }
}
```

## With title and description

```text
formkl post("/subscribe")
	"Subscribe to our newsletter"
	"Get the latest news and updates from us"
{
  has {
    "Your Email" text;
  }
}
```



================================================
FILE: docs/syntax/validation.md
================================================
# Field Validation

Formkl support parsing a set of condition with `or` and `and` operators in `valid` conditional expression

```bash
["require"] ... valid([CONDITION]) regex("[REGULAR EXPRESSION STRING]")
```

Required field
```bash
require "Your name" text;
```

With logical expression

```bash
"Grade" number valid(< 12 and >= 1 or == 15);
```

With regular expression

```bash
"Note" paragraph regex("[A-z0-9]");
```

For field with text type, condition with numeric comparison takes the length of the string as compared value (This is executed by the adapter)

```bash
"Short answer" text regex("[A-z0-9]") valid(< 256);
```



================================================
FILE: docs/.vitepress/config.js
================================================
export default {
  lang: "en-US",
  title: "FORMKL",
  description: "Form marKup Language",
  head: [
    ["script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-2BHERVD2DR" }],
    [
      "script",
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-2BHERVD2DR');
      `,
    ],
    [
      "script",
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-2BHERVD2DR');
      `,
    ],
  ],

  themeConfig: {
    siteTitle: "FORMKL",
    logo: "https://res.cloudinary.com/i-m-rim/image/upload/v1669218850/personal/logo_h6vt9n.svg",

    nav: [{ text: "Syntax guide", link: "/syntax/form" }],

    socialLinks: [{ icon: "github", link: "https://github.com/imrim12/formkl" }],

    editLink: {
      pattern: "https://github.com/imrim12/formkl/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    sidebar: [
      {
        text: "Getting started",
        collapsible: true,
        items: [
          { text: "Why Formkl?", link: "/why" },
          { text: "Introduction", link: "/introduction" },
        ],
      },
      {
        text: "Installation",
        collapsible: true,
        items: [
          { text: "Vite", link: "/installation/vite" },
          { text: "Webpack", link: "/installation/webpack" },
        ],
      },
      {
        text: "Adapters",
        collapsible: true,
        items: [
          { text: "Vue", link: "/adapters/vue" },
          { text: "React", link: "/adapters/react" },
          { text: "Svelte", link: "/adapters/svelte" },
        ],
      },
      {
        text: "Syntax",
        collapsible: true,
        items: [
          { text: "Form", link: "/syntax/form" },
          { text: "Field", link: "/syntax/field" },
          { text: "Model", link: "/syntax/model" },
          { text: "Submission", link: "/syntax/submission" },
          { text: "Validation", link: "/syntax/validation" },
          { text: "Multi-responses", link: "/syntax/multiple" },
        ],
      },
      {
        text: "Learning",
        collapsible: true,
        items: [
          { text: "Contribution guide", link: "/learning/contribution-guide" },
          { text: "Core language", link: "/learning/core-language" },
          { text: "Full Grammar", link: "/learning/grammar" },
          { text: "Adapter (Vue)", link: "/learning/adapter-vue" },
          { text: "Adapter (React)", link: "/learning/adapter-react" },
          { text: "Adapter (Svelte)", link: "/learning/adapter-svelte" },
          { text: "Editor", link: "/learning/editor" },
        ],
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022",
    },
  },
};



================================================
FILE: docs/.vitepress/theme/custom.css
================================================
@import url(@formkl/elemento);

/**
 * Colors Base
 *
 * These are the pure base color presets. Most of the time, you should not be
 * using these colors directly in the theme but rather use "Colors Theme"
 * instead because those are "Theme (light or dark)" dependant.
 * -------------------------------------------------------------------------- */

:root {
  --vp-c-white: #ffffff;
  --vp-c-white-soft: #f9f9f9;
  --vp-c-white-mute: #f1f1f1;

  --vp-c-black: #1a1a1a;
  --vp-c-black-pure: #000000;
  --vp-c-black-soft: #242424;
  --vp-c-black-mute: #2f2f2f;

  --vp-c-gray: #8e8e8e;
  --vp-c-gray-light-1: #aeaeae;
  --vp-c-gray-light-2: #c7c7c7;
  --vp-c-gray-light-3: #d1d1d1;
  --vp-c-gray-light-4: #e5e5e5;
  --vp-c-gray-light-5: #f2f2f2;
  --vp-c-gray-dark-1: #636363;
  --vp-c-gray-dark-2: #484848;
  --vp-c-gray-dark-3: #3a3a3a;
  --vp-c-gray-dark-4: #282828;
  --vp-c-gray-dark-5: #202020;

  --vp-c-divider-light-1: rgba(60, 60, 60, 0.29);
  --vp-c-divider-light-2: rgba(60, 60, 60, 0.12);
  --vp-c-divider-dark-1: rgba(84, 84, 84, 0.65);
  --vp-c-divider-dark-2: rgba(84, 84, 84, 0.48);

  --vp-c-text-light-1: var(--vp-c-indigo);
  --vp-c-text-light-2: rgba(60, 60, 60, 0.7);
  --vp-c-text-light-3: rgba(60, 60, 60, 0.33);
  --vp-c-text-light-4: rgba(60, 60, 60, 0.18);

  --vp-c-text-dark-1: rgba(255, 255, 255, 0.87);
  --vp-c-text-dark-2: rgba(235, 235, 235, 0.6);
  --vp-c-text-dark-3: rgba(235, 235, 235, 0.38);
  --vp-c-text-dark-4: rgba(235, 235, 235, 0.18);

  --vp-c-indigo: #213547;
  --vp-c-indigo-soft: #476582;
  --vp-c-indigo-light: #aac8e4;
  --vp-c-indigo-lighter: #c9def1;
  --vp-c-indigo-dark: #1d2f3f;
  --vp-c-indigo-darker: #14212e;

  --vp-c-green: #42b883;
  --vp-c-green-light: #42d392;
  --vp-c-green-lighter: #35eb9a;
  --vp-c-green-dark: #33a06f;
  --vp-c-green-darker: #155f3e;
  --vp-c-green-dimm-1: rgba(66, 184, 131, 0.5);
  --vp-c-green-dimm-2: rgba(66, 184, 131, 0.25);
  --vp-c-green-dimm-3: rgba(66, 184, 131, 0.05);

  --vp-c-blue: #006ec5;
  --vp-c-blue-light: #3b96db;
  --vp-c-blue-lighter: rgb(142, 210, 249);
  --vp-c-blue-dark: #013c7e;
  --vp-c-blue-darker: #002857;
  --vp-c-blue-dimm-1: #0070c579;
  --vp-c-blue-dimm-2: #0070c536;
  --vp-c-blue-dimm-3: #0070c517;

  --vp-c-yellow: #ffc517;
  --vp-c-yellow-light: #fcd253;
  --vp-c-yellow-lighter: #fcfc7c;
  --vp-c-yellow-dark: #e0ad15;
  --vp-c-yellow-darker: #ad850e;
  --vp-c-yellow-dimm-1: rgba(255, 197, 23, 0.5);
  --vp-c-yellow-dimm-2: rgba(255, 197, 23, 0.25);
  --vp-c-yellow-dimm-3: rgba(255, 197, 23, 0.05);

  --vp-c-red: #ed3c50;
  --vp-c-red-light: #f54e82;
  --vp-c-red-lighter: #fd1d7c;
  --vp-c-red-dark: #cd2d3f;
  --vp-c-red-darker: #ab2131;
  --vp-c-red-dimm-1: rgba(237, 60, 80, 0.5);
  --vp-c-red-dimm-2: rgba(237, 60, 80, 0.25);
  --vp-c-red-dimm-3: rgba(237, 60, 80, 0.05);
}

/**
 * Colors Theme
 * -------------------------------------------------------------------------- */

:root {
  --vp-c-bg: var(--vp-c-white);
  --vp-c-bg-soft: var(--vp-c-white-soft);
  --vp-c-bg-mute: var(--vp-c-white-mute);
  --vp-c-bg-alt: var(--vp-c-white-soft);

  --vp-c-divider: var(--vp-c-divider-light-1);
  --vp-c-divider-light: var(--vp-c-divider-light-2);

  --vp-c-divider-inverse: var(--vp-c-divider-dark-1);
  --vp-c-divider-inverse-light: var(--vp-c-divider-dark-2);

  --vp-c-text-1: var(--vp-c-text-light-1);
  --vp-c-text-2: var(--vp-c-text-light-2);
  --vp-c-text-3: var(--vp-c-text-light-3);
  --vp-c-text-4: var(--vp-c-text-light-4);

  --vp-c-text-inverse-1: var(--vp-c-text-dark-1);
  --vp-c-text-inverse-2: var(--vp-c-text-dark-2);
  --vp-c-text-inverse-3: var(--vp-c-text-dark-3);
  --vp-c-text-inverse-4: var(--vp-c-text-dark-4);

  --vp-c-text-code: var(--vp-c-indigo-soft);

  --vp-c-brand: var(--vp-c-blue);
  --vp-c-brand-light: var(--vp-c-blue-light);
  --vp-c-brand-lighter: var(--vp-c-blue-lighter);
  --vp-c-brand-dark: var(--vp-c-blue-dark);
  --vp-c-brand-darker: var(--vp-c-blue-darker);

  --vp-c-sponsor: #fd1d7c;
}

.dark {
  --vp-c-bg: var(--vp-c-black-soft);
  --vp-c-bg-soft: var(--vp-c-black-mute);
  --vp-c-bg-mute: var(--vp-c-gray-dark-3);
  --vp-c-bg-alt: var(--vp-c-black);

  --vp-c-divider: var(--vp-c-divider-dark-1);
  --vp-c-divider-light: var(--vp-c-divider-dark-2);

  --vp-c-divider-inverse: var(--vp-c-divider-light-1);
  --vp-c-divider-inverse-light: var(--vp-c-divider-light-2);

  --vp-c-text-1: var(--vp-c-text-dark-1);
  --vp-c-text-2: var(--vp-c-text-dark-2);
  --vp-c-text-3: var(--vp-c-text-dark-3);
  --vp-c-text-4: var(--vp-c-text-dark-4);

  --vp-c-text-inverse-1: var(--vp-c-text-light-1);
  --vp-c-text-inverse-2: var(--vp-c-text-light-2);
  --vp-c-text-inverse-3: var(--vp-c-text-light-3);
  --vp-c-text-inverse-4: var(--vp-c-text-light-4);

  --vp-c-text-code: var(--vp-c-indigo-lighter);
}

/**
 * Typography
 * -------------------------------------------------------------------------- */

:root {
  --vp-font-family-base: "Inter var experimental", "Inter var", "Inter", ui-sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial,
    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  --vp-font-family-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}

/**
 * Shadows
 * -------------------------------------------------------------------------- */

:root {
  --vp-shadow-1: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  --vp-shadow-2: 0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07);
  --vp-shadow-3: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
  --vp-shadow-4: 0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12);
  --vp-shadow-5: 0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16);
}

/**
 * Z-indexes
 * -------------------------------------------------------------------------- */

:root {
  --vp-z-index-local-nav: 10;
  --vp-z-index-nav: 20;
  --vp-z-index-layout-top: 30;
  --vp-z-index-backdrop: 40;
  --vp-z-index-sidebar: 50;
  --vp-z-index-footer: 60;
}

/**
 * Icons
 * -------------------------------------------------------------------------- */

:root {
  --vp-icon-copy: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2'/%3E%3C/svg%3E");
  --vp-icon-copied: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4'/%3E%3C/svg%3E");
}

/**
 * Layouts
 * -------------------------------------------------------------------------- */

:root {
  --vp-layout-max-width: 1440px;
}

/**
 * Component: Code
 * -------------------------------------------------------------------------- */

:root {
  --vp-code-line-height: 1.7;
  --vp-code-font-size: 0.875em;

  --vp-code-block-color: var(--vp-c-text-dark-1);
  --vp-code-block-bg: #292d3e;

  --vp-code-line-highlight-color: rgba(0, 0, 0, 0.5);
  --vp-code-line-number-color: var(--vp-c-text-dark-3);

  --vp-code-line-diff-add-color: rgba(125, 191, 123, 0.1);
  --vp-code-line-diff-add-symbol-color: rgba(125, 191, 123, 0.5);

  --vp-code-line-diff-remove-color: rgba(255, 128, 128, 0.05);
  --vp-code-line-diff-remove-symbol-color: rgba(255, 128, 128, 0.5);

  --vp-code-line-error-color: var(--vp-c-red-dimm-2);
  --vp-code-line-warning-color: var(--vp-c-yellow-dimm-2);

  --vp-code-copy-code-hover-bg: rgba(255, 255, 255, 0.05);
  --vp-code-copy-code-active-text: var(--vp-c-text-dark-2);
}

.dark {
  --vp-code-block-bg: var(--vp-c-bg-alt);
}

/**
 * Component: Button
 * -------------------------------------------------------------------------- */

:root {
  --vp-button-brand-border: var(--vp-c-brand-light);
  --vp-button-brand-text: var(--vp-c-text-dark-1);
  --vp-button-brand-bg: var(--vp-c-brand);
  --vp-button-brand-hover-border: var(--vp-c-brand-light);
  --vp-button-brand-hover-text: var(--vp-c-text-dark-1);
  --vp-button-brand-hover-bg: var(--vp-c-brand-light);
  --vp-button-brand-active-border: var(--vp-c-brand-light);
  --vp-button-brand-active-text: var(--vp-c-text-dark-1);
  --vp-button-brand-active-bg: var(--vp-button-brand-bg);

  --vp-button-alt-border: var(--vp-c-gray-light-3);
  --vp-button-alt-text: var(--vp-c-text-light-1);
  --vp-button-alt-bg: var(--vp-c-gray-light-5);
  --vp-button-alt-hover-border: var(--vp-c-gray-light-3);
  --vp-button-alt-hover-text: var(--vp-c-text-light-1);
  --vp-button-alt-hover-bg: var(--vp-c-gray-light-4);
  --vp-button-alt-active-border: var(--vp-c-gray-light-3);
  --vp-button-alt-active-text: var(--vp-c-text-light-1);
  --vp-button-alt-active-bg: var(--vp-c-gray-light-3);

  --vp-button-sponsor-border: var(--vp-c-gray-light-3);
  --vp-button-sponsor-text: var(--vp-c-text-light-2);
  --vp-button-sponsor-bg: transparent;
  --vp-button-sponsor-hover-border: var(--vp-c-sponsor);
  --vp-button-sponsor-hover-text: var(--vp-c-sponsor);
  --vp-button-sponsor-hover-bg: transparent;
  --vp-button-sponsor-active-border: var(--vp-c-sponsor);
  --vp-button-sponsor-active-text: var(--vp-c-sponsor);
  --vp-button-sponsor-active-bg: transparent;
}

.dark {
  --vp-button-brand-border: var(--vp-c-brand-light);
  --vp-button-brand-text: var(--vp-c-text-dark-1);
  --vp-button-brand-bg: var(--vp-c-brand-dark);
  --vp-button-brand-hover-border: var(--vp-c-brand-lighter);
  --vp-button-brand-hover-text: var(--vp-c-text-dark-1);
  --vp-button-brand-hover-bg: var(--vp-c-brand);
  --vp-button-brand-active-border: var(--vp-c-brand-lighter);
  --vp-button-brand-active-text: var(--vp-c-text-dark-1);
  --vp-button-brand-active-bg: var(--vp-button-brand-bg);

  --vp-button-alt-border: var(--vp-c-gray-dark-2);
  --vp-button-alt-text: var(--vp-c-text-dark-1);
  --vp-button-alt-bg: var(--vp-c-bg-mute);
  --vp-button-alt-hover-border: var(--vp-c-gray-dark-2);
  --vp-button-alt-hover-text: var(--vp-c-text-dark-1);
  --vp-button-alt-hover-bg: var(--vp-c-gray-dark-2);
  --vp-button-alt-active-border: var(--vp-c-gray-dark-2);
  --vp-button-alt-active-text: var(--vp-c-text-dark-1);
  --vp-button-alt-active-bg: var(--vp-button-alt-bg);

  --vp-button-sponsor-border: var(--vp-c-gray-dark-1);
  --vp-button-sponsor-text: var(--vp-c-text-dark-2);
}

/**
 * Component: Custom Block
 * -------------------------------------------------------------------------- */

:root {
  --vp-custom-block-code-font-size: 13px;

  --vp-custom-block-info-border: var(--vp-c-divider-light);
  --vp-custom-block-info-text: var(--vp-c-text-2);
  --vp-custom-block-info-bg: var(--vp-c-white-soft);
  --vp-custom-block-info-code-bg: var(--vp-c-gray-light-4);

  --vp-custom-block-tip-border: var(--vp-c-blue-dimm-1);
  --vp-custom-block-tip-text: var(--vp-c-blue-darker);
  --vp-custom-block-tip-bg: var(--vp-c-blue-dimm-3);
  --vp-custom-block-tip-code-bg: var(--vp-custom-block-tip-bg);

  --vp-custom-block-warning-border: var(--vp-c-yellow-dimm-1);
  --vp-custom-block-warning-text: var(--vp-c-yellow-darker);
  --vp-custom-block-warning-bg: var(--vp-c-yellow-dimm-3);
  --vp-custom-block-warning-code-bg: var(--vp-custom-block-warning-bg);

  --vp-custom-block-danger-border: var(--vp-c-red-dimm-1);
  --vp-custom-block-danger-text: var(--vp-c-red-darker);
  --vp-custom-block-danger-bg: var(--vp-c-red-dimm-3);
  --vp-custom-block-danger-code-bg: var(--vp-custom-block-danger-bg);

  --vp-custom-block-details-border: var(--vp-custom-block-info-border);
  --vp-custom-block-details-text: var(--vp-custom-block-info-text);
  --vp-custom-block-details-bg: var(--vp-custom-block-info-bg);
  --vp-custom-block-details-code-bg: var(--vp-custom-block-details-bg);
}

.dark {
  --vp-custom-block-info-border: var(--vp-c-divider-light);
  --vp-custom-block-info-bg: var(--vp-c-black-mute);
  --vp-custom-block-info-code-bg: var(--vp-c-gray-dark-4);

  --vp-custom-block-tip-border: var(--vp-c-blue-dimm-2);
  --vp-custom-block-tip-text: var(--vp-c-blue-light);

  --vp-custom-block-warning-border: var(--vp-c-yellow-dimm-2);
  --vp-custom-block-warning-text: var(--vp-c-yellow-light);

  --vp-custom-block-danger-border: var(--vp-c-red-dimm-2);
  --vp-custom-block-danger-text: var(--vp-c-red-light);
}

/**
 * Component: Nav
 * -------------------------------------------------------------------------- */

:root {
  --vp-nav-height: var(--vp-nav-height-mobile);
  --vp-nav-height-mobile: 56px;
  --vp-nav-height-desktop: 72px;
}

@media (min-width: 960px) {
  :root {
    --vp-nav-height: var(--vp-nav-height-desktop);
  }
}

/**
 * Component: Sidebar
 * -------------------------------------------------------------------------- */

:root {
  --vp-sidebar-width: 272px;
}

/**
 * Component: Home
 * -------------------------------------------------------------------------- */

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(
    120deg,
    var(--vp-c-blue) 30%,
    var(--vp-c-blue-light)
  );

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #006ec560 30%, #3b96db60);
  --vp-home-hero-image-filter: blur(50px);
}

/**
 * Component: Badge
 * -------------------------------------------------------------------------- */

:root {
  --vp-badge-info-border: var(--vp-c-divider-light);
  --vp-badge-info-text: var(--vp-c-text-2);
  --vp-badge-info-bg: var(--vp-c-white-soft);

  --vp-badge-tip-border: var(--vp-c-blue-dimm-1);
  --vp-badge-tip-text: var(--vp-c-blue-darker);
  --vp-badge-tip-bg: var(--vp-c-blue-dimm-3);

  --vp-badge-warning-border: var(--vp-c-yellow-dimm-1);
  --vp-badge-warning-text: var(--vp-c-yellow-darker);
  --vp-badge-warning-bg: var(--vp-c-yellow-dimm-3);

  --vp-badge-danger-border: var(--vp-c-red-dimm-1);
  --vp-badge-danger-text: var(--vp-c-red-darker);
  --vp-badge-danger-bg: var(--vp-c-red-dimm-3);
}

.dark {
  --vp-badge-info-border: var(--vp-c-divider-light);
  --vp-badge-info-bg: var(--vp-c-black-mute);

  --vp-badge-tip-border: var(--vp-c-blue-dimm-2);
  --vp-badge-tip-text: var(--vp-c-blue-light);

  --vp-badge-warning-border: var(--vp-c-yellow-dimm-2);
  --vp-badge-warning-text: var(--vp-c-yellow-light);

  --vp-badge-danger-border: var(--vp-c-red-dimm-2);
  --vp-badge-danger-text: var(--vp-c-red-light);
}



================================================
FILE: docs/.vitepress/theme/index.js
================================================
import FormklPlugin from "@formkl/vue";

import formklTheme from "@formkl/elemento";

import DefaultTheme from "vitepress/theme";

import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    if (DefaultTheme.enhanceApp) DefaultTheme.enhanceApp(ctx);

    FormklPlugin.install(ctx.app, {
      theme: formklTheme,
    });
  },
};



================================================
FILE: extensions/vscode/README.md
================================================
# Formkl - Form marKup Language

Formkl (Form marKup Language) is an open-source DSL (Domain-Specific Language) to define and create form schema. It is designed to be simple, consistent and highly readable as natural language.

## Getting Started

Please follow the documentation at [formkl.org](https://formkl.org)!

View sandbox: [sandbox.formkl.org](https://sandbox.formkl.org)

## Contribution

Please make sure to read the [Contributing Guide](https://formkl.org/learning/contribution-guide.html) before making a pull request.

Thank you to all the people who already contributed to the Formkl - Form marKup Language project!

<a href="https://github.com/imrim12/formkl/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=imrim12/formkl" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Nguyen Huu Nguyen Y



================================================
FILE: extensions/vscode/CHANGELOG.md
================================================
# Change Log

All notable changes to the "formkl" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

- Initial release


================================================
FILE: extensions/vscode/language-configuration.json
================================================
{
  "comments": {
    // symbol used for single line comment. Remove this entry if your language does not support line comments
    "lineComment": "//",
    // symbols used for start and end a block comment. Remove this entry if your language does not support block comments
    "blockComment": ["/*", "*/"]
  },
  // symbols used as brackets
  "brackets": [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  // symbols that are auto closed when typing
  "autoClosingPairs": [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["\"", "\""],
    ["'", "'"]
  ],
  // symbols that can be used to surround a selection
  "surroundingPairs": [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["\"", "\""],
    ["'", "'"]
  ]
}



================================================
FILE: extensions/vscode/LICENSE
================================================
MIT License

Copyright (c) 2022-PRESENT Formkl - Form marKup Language

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


================================================
FILE: extensions/vscode/package.json
================================================
{
  "name": "formkl",
  "displayName": "FormKL Language Service (VSCode)",
  "description": "",
  "version": "0.0.4",
  "publisher": "FormKL",
  "icon": "images/logo.png",
  "engines": {
    "vscode": "^1.54.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/imrim12/formkl.git"
  },
  "categories": [
    "Programming Languages"
  ],
  "keywords": [
    "multi-root ready"
  ],
  "activationEvents": [
    "onLanguage:formkl"
  ],
  "main": "./lsp/client/out/extension",
  "contributes": {
    "languages": [
      {
        "id": "formkl",
        "aliases": [
          "FormKL"
        ],
        "extensions": [
          ".form"
        ],
        "configuration": "./language-configuration.json"
      }
    ],
    "grammars": [
      {
        "language": "formkl",
        "scopeName": "source.formkl",
        "path": "./syntaxes/formkl.tmLanguage.json"
      }
    ],
    "configuration": {
      "type": "object",
      "title": "FormKL configuration",
      "properties": {
        "formklLanguageServer.maxNumberOfProblems": {
          "scope": "resource",
          "type": "number",
          "default": 100,
          "description": "Controls the maximum number of problems produced by the server."
        },
        "formklLanguageServer.trace.server": {
          "scope": "window",
          "type": "string",
          "enum": [
            "off",
            "messages",
            "verbose"
          ],
          "default": "off",
          "description": "Traces the communication between VS Code and the language server."
        }
      }
    }
  },
  "scripts": {
    "vscode:prepublish": "npm run compile",
    "compile": "tsc -b ./lsp/tsconfig.json",
    "watch": "tsc -b ./lsp/tsconfig.json -w",
    "lint": "eslint ./lsp/client/src ./lsp/server/src --ext .ts,.tsx",
    "postinstall": "cd ./lsp/client && npm install && cd ../server && npm install && cd ../..",
    "test": "sh ./scripts/e2e.sh"
  },
  "devDependencies": {
    "@types/mocha": "^9.1.0",
    "@types/node": "^16.11.7",
    "@typescript-eslint/eslint-plugin": "^5.42.0",
    "@typescript-eslint/parser": "^5.42.0",
    "eslint": "^8.26.0",
    "mocha": "^9.2.1",
    "typescript": "^5.2.2"
  }
}



================================================
FILE: extensions/vscode/vsc-extension-quickstart.md
================================================
# Welcome to your VS Code Extension

## What's in the folder

* This folder contains all of the files necessary for your extension.
* `package.json` - this is the manifest file in which you declare your language support and define the location of the grammar file that has been copied into your extension.
* `syntaxes/formkl.tmLanguage.json` - this is the Text mate grammar file that is used for tokenization.
* `language-configuration.json` - this is the language configuration, defining the tokens that are used for comments and brackets.

## Get up and running straight away

* Make sure the language configuration settings in `language-configuration.json` are accurate.
* Press `F5` to open a new window with your extension loaded.
* Create a new file with a file name suffix matching your language.
* Verify that syntax highlighting works and that the language configuration settings are working.

## Make changes

* You can relaunch the extension from the debug toolbar after making changes to the files listed above.
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.

## Add more language features

* To add features such as IntelliSense, hovers and validators check out the VS Code extenders documentation at https://code.visualstudio.com/docs

## Install your extension

* To start using your extension with Visual Studio Code copy it into the `<user home>/.vscode/extensions` folder and restart Code.
* To share your extension with the world, read on https://code.visualstudio.com/docs about publishing an extension.



================================================
FILE: extensions/vscode/lsp/README.md
================================================
# LSP Example

Heavily documented sample code for https://code.visualstudio.com/api/language-extensions/language-server-extension-guide

## Functionality

This Language Server works for plain text file. It has the following language features:
- Diagnostics regenerated on each file change or configuration change

## Structure

```
.
├── client // Language Client
│   ├── src
│   │   └── extension.ts // Language Client entry point
├── package.json // The extension manifest.
└── server // Language Server
    └── src
        └── server.ts // Language Server entry point
```

## Running the Sample

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Open VS Code on this folder.
- Press Ctrl+Shift+B to start compiling the client and server in [watch mode](https://code.visualstudio.com/docs/editor/tasks#:~:text=The%20first%20entry%20executes,the%20HelloWorld.js%20file.).
- Switch to the Run and Debug View in the Sidebar (Ctrl+Shift+D).
- Select `Launch Client` from the drop down (if it is not already).
- Press ▷ to run the launch config (F5).
- In the [Extension Development Host](https://code.visualstudio.com/api/get-started/your-first-extension#:~:text=Then%2C%20inside%20the%20editor%2C%20press%20F5.%20This%20will%20compile%20and%20run%20the%20extension%20in%20a%20new%20Extension%20Development%20Host%20window.) instance of VSCode, open a document in FormKL language.
- Enter text content such as a script that doesn't follow FormKL's conventions. The extension will emit diagnostics for the places that have the wrong syntax.



================================================
FILE: extensions/vscode/lsp/tsconfig.json
================================================
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2020",
    "lib": ["es2020"],
    "outDir": "out",
    "rootDir": "src",
    "sourceMap": true
  },
  "include": ["src"],
  "exclude": ["node_modules", ".vscode-test"],
  "references": [
    { "path": "./client" },
    { "path": "./server" }
  ]
}



================================================
FILE: extensions/vscode/lsp/client/package.json
================================================
{
  "name": "formkl-lsp",
  "description": "An implementation of a FormKL language client in node.",
  "version": "1.0.0",
  "author": "FormKL",
  "license": "MIT",
  "publisher": "FormKL",
  "repository": {
    "type": "git",
    "url": "https://github.com/imrim12/formkl.git"
  },
  "engines": {
    "vscode": "^1.54.0"
  },
  "dependencies": {
    "vscode-languageclient": "^7.0.0"
  },
  "devDependencies": {
    "@types/node": "^18.11.18",
    "@types/vscode": "^1.63.0",
    "@vscode/test-electron": "^2.1.2"
  }
}



================================================
FILE: extensions/vscode/lsp/client/tsconfig.json
================================================
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2020",
    "lib": ["es2020"],
    "outDir": "out",
    "rootDir": "src",
    "sourceMap": true
  },
  "include": ["src"],
  "exclude": ["node_modules", ".vscode-test"]
}



================================================
FILE: extensions/vscode/lsp/client/src/extension.ts
================================================
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from "path";
import { workspace, ExtensionContext } from "vscode";

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  // The server is implemented in node
  const serverModule = context.asAbsolutePath(path.join("lsp", "server", "out", "server.js"));

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
    },
  };

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    // Register the server for plain text documents
    documentSelector: [{ scheme: "file", language: "formkl" }],
    synchronize: {
      // Notify the server about file changes to '.clientrc files contained in the workspace
      fileEvents: workspace.createFileSystemWatcher("**/.clientrc"),
    },
  };

  // Create the language client and start the client.
  client = new LanguageClient(
    "formklLanguageServer",
    "FormKL Language Server",
    serverOptions,
    clientOptions,
  );
  // Start the client. This will also launch the server
  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}



================================================
FILE: extensions/vscode/lsp/server/package.json
================================================
{
  "name": "formkl-lsp",
  "description": "An implementation of a FormKL language server in node.",
  "version": "1.0.0",
  "author": "FormKL",
  "license": "MIT",
  "engines": {
    "node": "*"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/imrim12/formkl.git"
  },
  "dependencies": {
    "vscode-languageserver": "^7.0.0",
    "vscode-languageserver-textdocument": "^1.0.4",
    "formkl": "~0.1.0"
  },
  "scripts": {}
}



================================================
FILE: extensions/vscode/lsp/server/tsconfig.json
================================================
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["es2020"],
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "strict": true,
    "outDir": "out",
    "rootDir": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules", ".vscode-test"]
}



================================================
FILE: extensions/vscode/lsp/server/src/server.ts
================================================
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
  createConnection,
  TextDocuments,
  Diagnostic,
  DiagnosticSeverity,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  TextDocumentSyncKind,
  InitializeResult,
} from "vscode-languageserver/node";

import { TextDocument, Position } from "vscode-languageserver-textdocument";

import FormklParser from "formkl";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
  const capabilities = params.capabilities;

  // Does the client support the `workspace/configuration` request?
  // If not, we fall back using global settings.
  hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  );
  hasDiagnosticRelatedInformationCapability = !!(
    capabilities.textDocument &&
    capabilities.textDocument.publishDiagnostics &&
    capabilities.textDocument.publishDiagnostics.relatedInformation
  );

  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      // Tell the client that this server supports code completion.
      completionProvider: {
        resolveProvider: true,
      },
    },
  };
  if (hasWorkspaceFolderCapability) {
    result.capabilities.workspace = {
      workspaceFolders: {
        supported: true,
      },
    };
  }
  return result;
});

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    // Register for all configuration changes.
    connection.client.register(DidChangeConfigurationNotification.type, undefined);
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders((_event) => {
      connection.console.log("Workspace folder change event received.");
    });
  }
});

// The example settings
interface ExampleSettings {
  maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration((change) => {
  if (hasConfigurationCapability) {
    // Reset all cached document settings
    documentSettings.clear();
  } else {
    globalSettings = <ExampleSettings>(change.settings.formklLanguageServer || defaultSettings);
  }

  // Revalidate all open text documents
  documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }
  let result = documentSettings.get(resource);
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: "formklLanguageServer",
    });
    documentSettings.set(resource, result);
  }
  return result;
}

// Only keep settings for open documents
documents.onDidClose((e) => {
  documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
  validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
  // In this simple example we get the settings for every validate run.
  const settings = await getDocumentSettings(textDocument.uri);

  // The validator creates diagnostics for all uppercase words length 2 and more
  const text = textDocument.getText();
  const diagnostics: Diagnostic[] = [];

  try {
    FormklParser.parse(text);
  } catch (err: any) {
    const indexResults = /at \d+\:\d+/.exec(err.message);
    let start: Position = {
      line: 0,
      character: 0,
    };

    if (indexResults && indexResults.length > 0) {
      const errorIndex = indexResults[0].replace(/at /g, "").split(":").map(Number);
      start = {
        line: errorIndex[0] - 1,
        character: errorIndex[1] - 1,
      };
    }

    diagnostics.push({
      severity: DiagnosticSeverity.Error,
      range: {
        start: start,
        end: start,
      },
      message: err.message,
      source: "ex",
    });
  }

  // Send the computed diagnostics to VSCode.
  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles((_change) => {
  // Monitored files have change in VSCode
  connection.console.log("We received an file change event");
});

// This handler provides the initial list of the completion items.
connection.onCompletion((_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
  // The pass parameter contains the position of the text document in
  // which code complete got requested. For the example we ignore this
  // info and always provide the same completion items.
  // TODO: Add code completion
  return [
    // {
    // 	label: 'TypeScript',
    // 	kind: CompletionItemKind.Text,
    // 	data: 1
    // },
    // {
    // 	label: 'JavaScript',
    // 	kind: CompletionItemKind.Text,
    // 	data: 2
    // }
  ];
});

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
  // TODO: Add code completion
  // if (item.data === 1) {
  // 	item.detail = 'TypeScript details';
  // 	item.documentation = 'TypeScript documentation';
  // } else if (item.data === 2) {
  // 	item.detail = 'JavaScript details';
  // 	item.documentation = 'JavaScript documentation';
  // }
  return item;
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();



================================================
FILE: extensions/vscode/syntaxes/formkl.tmLanguage.json
================================================
{
  "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
  "name": "formkl",
  "patterns": [
    {
      "include": "#comments"
    },
    {
      "include": "#keywords"
    },
    {
      "include": "#strings-single-quote"
    },
    {
      "include": "#strings-double-quotes"
    },
    {
      "include": "#reserved-words"
    },
    {
      "include": "#operators"
    },
    {
      "include": "#numbers"
    }
  ],
  "repository": {
    "comments": {
      "name": "comment.formkl",
      "begin": "#",
      "end": "\n"
    },
    "keywords": {
      "patterns": [
        {
          "name": "keyword.control.formkl",
          "match": "\\b(formkl|includes|has|multiple|as|and|or)\\b"
        }
      ]
    },
    "strings-single-quote": {
      "name": "string.quoted.single.formkl",
      "begin": "'",
      "end": "'",
      "patterns": [
        {
          "name": "constant.character.escape.formkl",
          "match": "\\\\."
        }
      ]
    },
    "strings-double-quotes": {
      "name": "string.quoted.double.formkl",
      "begin": "\"",
      "end": "\"",
      "patterns": [
        {
          "name": "constant.character.escape.formkl",
          "match": "\\\\."
        }
      ]
    },
    "reserved-words": {
      "name": "entity.name.function.formkl",
      "match": "\\b(require|valid|regex)\\b"
    },
    "operators": {
      "name": "keyword.operator.new.formkl",
      "match": "(<|=|>)"
    },
    "numbers": {
      "name": "constant.numeric.formkl",
      "match": "(-?[0-9]+(\\.[0-9]+)?)"
    }
  },
  "scopeName": "source.formkl"
}



================================================
FILE: packages/adapters/react/package.json
================================================
{
  "name": "@formkl/react",
  "description": "A React adapter to generate usable React from component from Formkl syntax/schema",
  "devDependencies": {
    "@vitest/ui": "^0.34.6",
    "rimraf": "^5.0.5",
    "typescript": "^5.2.2",
    "vite": "^4.5.0",
    "vitest": "^0.34.6"
  },
  "dependencies": {
    "@formkl/shared": "workspace:*"
  }
}



================================================
FILE: packages/adapters/react/.npmignore
================================================
./node_modules



================================================
FILE: packages/adapters/svelte/package.json
================================================
{
  "name": "@formkl/svelte",
  "description": "A Svelte adapter to generate usable Svelte from component from Formkl syntax/schema",
  "devDependencies": {
    "@vitest/ui": "^0.34.6",
    "rimraf": "^5.0.5",
    "typescript": "^5.2.2",
    "vite": "^4.5.0",
    "vitest": "^0.34.6"
  },
  "dependencies": {
    "@formkl/shared": "workspace:*"
  }
}



================================================
FILE: packages/adapters/svelte/.npmignore
================================================
./node_modules



================================================
FILE: packages/adapters/vue/README.md
================================================
# Formkl - Form marKup Language

Formkl (Form marKup Language) is an open-source DSL (Domain-Specific Language) to define and create form schema. It is designed to be simple, consistent and highly readable as natural language.

## Getting Started

Please follow the documentation at [formkl.org](https://formkl.org)!

View sandbox: [sandbox.formkl.org](https://sandbox.formkl.org)

## Contribution

Please make sure to read the [Contributing Guide](https://formkl.org/learning/contribution-guide.html) before making a pull request.

Thank you to all the people who already contributed to the Formkl - Form marKup Language project!

<a href="https://github.com/imrim12/formkl/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=imrim12/formkl" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Nguyen Huu Nguyen Y



================================================
FILE: packages/adapters/vue/form-shim.d.ts
================================================
// Generated by '@formkl/plugin-vite'
import type { Formkl, Theme } from "@formkl/shared";
import type { ComponentCustomProperties } from "vue";

declare module "vue" {
  interface ComponentCustomProperties {
    $formkl: {
      theme: Theme;
    };
  }
}

declare module "*.form" {
  const form: Formkl;
  export default form;
}

export {};



================================================
FILE: packages/adapters/vue/package.json
================================================
{
	"name": "@formkl/vue",
	"version": "0.2.0",
	"description": "A Vue adapter to generate usable Vue from component from Formkl syntax/schema",
	"type": "module",
	"exports": {
		".": {
			"import": "./dist/index.mjs",
			"require": "./dist/index.cjs"
		}
	},
	"main": "./dist/index.cjs",
	"types": "./dist/types/index.d.ts",
	"files": [
		"dist"
	],
	"scripts": {
		"typecheck": "vue-tsc --noEmit",
		"build": "rimraf ./dist && vite build"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/imrim12/formkl.git",
		"directory": "packages/adapters/vue"
	},
	"keywords": [
		"formkl"
	],
	"author": "thecodeorigin",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/imrim12/formkl/issues"
	},
	"homepage": "https://github.com/imrim12/formkl#readme",
	"peerDependencies": {
		"element-plus": "^2.4.2",
		"lodash": "^4.17.21",
		"vue": "^3.3.7"
	},
	"dependencies": {
		"@formkl/shared": "workspace:*",
		"formkl": "workspace:*"
	},
	"devDependencies": {
		"@types/lodash": "^4.14.200",
		"@types/node": "^20.8.10",
		"@vitejs/plugin-vue": "^4.4.0",
		"@vitejs/plugin-vue-jsx": "^3.0.2",
		"@vitest/ui": "^0.34.6",
		"@vue/test-utils": "^2.4.1",
		"element-plus": "^2.4.2",
		"lodash": "^4.17.21",
		"rimraf": "^5.0.5",
		"sass": "^1.69.5",
		"typescript": "^5.2.2",
		"vite": "^4.5.0",
		"vite-plugin-dts": "^3.6.3",
		"vitest": "^0.34.6",
		"vue": "^3.3.7",
		"vue-tsc": "^1.8.22"
	}
}


================================================
FILE: packages/adapters/vue/tsconfig.json
================================================
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist",
    "types": ["vite/client", "vitest/globals"]
  },
  "include": ["./**/*.ts", "./**/*.tsx", "./**/*.vue"],
  "exclude": ["./node_modules", "./dist"]
}



================================================
FILE: packages/adapters/vue/vite.config.ts
================================================
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name: "@formkl/vue",
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format: string) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue", "element-plus", "lodash", "formkl"],
      output: {
        exports: "named",
        globals: {},
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      root: ".",
      entryRoot: "./src",
      outputDir: "./dist/types",
    }),
  ],
});



================================================
FILE: packages/adapters/vue/.npmignore
================================================
./node_modules



================================================
FILE: packages/adapters/vue/src/index.ts
================================================
import { Plugin } from "vue";

import Formkl from "./main.vue";

const plugin: Plugin = {
  install(app, options) {
    app.component("formkl", Formkl);

    app.config.globalProperties.$formkl = Object.assign(
      {
        theme: {},
      },
      options,
    );
  },
};

export { Formkl };

export default plugin;



================================================
FILE: packages/adapters/vue/src/main.vue
================================================
<template>
  <component :is="VNodeFormWrapper" class="formkl__wrapper">
    <component v-if="formComputed" :is="VNodeLayout">
      <FormNode
        :form="formComputed"
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </component>
    <div v-else class="formkl__error">Failed to load form</div>
  </component>
</template>

<script lang="ts">
export default defineComponent({
  name: "Formkl",
});
</script>

<script lang="ts" setup>
import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  PropType,
  provide,
  useAttrs,
} from "vue";
import { Formkl, Schema } from "@formkl/shared";

import { themeInjectionKey } from "./keys/theme";

import _set from "lodash/set";

import FormParser from "formkl";
import LayoutDefault from "./layouts/default.vue";
import FormNode from "./components/form-node.vue";

const props = defineProps({
  syntax: {
    type: String,
    required: false,
  },
  form: {
    type: Object as PropType<Formkl>,
    required: false,
  },
  modelValue: {
    type: Object as PropType<Schema>,
    default: () => ({}),
  },
});

const emit = defineEmits<{
  (event: "update:modelValue", model: any): void;
}>();

const vm = getCurrentInstance()?.proxy;

const currentTheme = computed(() => vm.$formkl.theme);
provide(themeInjectionKey, currentTheme);

const formComputed = computed<Formkl | null>(() => {
  if (props.syntax) {
    try {
      return FormParser.parse(props.syntax);
    } catch (error) {
      console.error(error);

      return null;
    }
  }

  return props.form;
});

const attrs = useAttrs();

// Attributes that start in "on"
const listerers$ = computed(() => {
  const listeners = {};
  Object.keys(attrs).forEach((key) => {
    if (key.startsWith("on")) {
      listeners[key] = attrs[key];
    }
  });

  return listeners;
});

const _buildSchema = () => {
  const schema = {};
  formComputed.value?.sections.forEach((section) => {
    section.fields.forEach((field) => {
      if (section.multiple) {
        _set(schema, section.key, [
          {
            [field.key]: null,
          },
        ]);
      } else if (field.multiple) {
        _set(schema, `${section.key}.${field.key}`, [null]);
      } else {
        _set(schema, `${section.key}.${field.key}`, null);
      }
    });
  });

  emit("update:modelValue", schema);
};
_buildSchema();

const VNodeLayout = defineComponent({
  name: "FormLayout",
  setup:
    (props, { slots }) =>
    () =>
      h(
        currentTheme.value.vNodeLayout || LayoutDefault,
        { form: formComputed.value },
        {
          default: () => slots.default(),
        },
      ),
});

const VNodeFormWrapper = defineComponent({
  name: "FormWrapper",
  setup:
    (props, { slots }) =>
    () =>
      h(currentTheme.value?.VNodeFormWrapper || "form", listerers$, {
        default: () => slots.default(),
      }),
});

onMounted(() => {
  if (!props.syntax && !props.form) {
    throw new Error("Either syntax or form is required");
  }
});
</script>



================================================
FILE: packages/adapters/vue/src/__test__/basic-rendering.test.ts
================================================
import { mount } from "@vue/test-utils";

import formklTheme from "@formkl/elemento";

import FormklPlugin, { Formkl } from "..";
import { Formkl as FormklType } from "@formkl/shared";

// @ts-ignore
import formSyntax from "./syntax.form";

let form: FormklType = formSyntax;

const mountOptions = {
  global: {
    plugins: [[FormklPlugin, { theme: formklTheme }]],
  },
  propsData: {
    form,
  },
} as any;

describe("Basic rendering usage including vite plugin.", () => {
  it("should mount the Formkl component correctly", () => {
    const wrapper = mount(Formkl, mountOptions);

    expect(wrapper).toBeTruthy();
  });

  it("should render the Formkl title correctly", () => {
    const wrapper = mount(Formkl, mountOptions);

    expect(wrapper.element.innerHTML).toContain(form.title);
  });

  it("should render the Formkl description correctly", () => {
    const wrapper = mount(Formkl, mountOptions);

    expect(wrapper.element.innerHTML).toContain(form.description);
  });

  it("should render the sections' titles correctly", () => {
    const wrapper = mount(Formkl, mountOptions);

    form.sections.forEach((section) => {
      expect(wrapper.element.innerHTML).toContain(section.title);
    });
  });

  it("should render the fields' labels correctly", () => {
    const wrapper = mount(Formkl, mountOptions);

    form.sections.forEach((section) => {
      section.fields.forEach((field) => {
        expect(wrapper.element.innerHTML).toContain(field.label);
      });
    });
  });
});



================================================
FILE: packages/adapters/vue/src/__test__/syntax.form
================================================
formkl "Your Formkl example" "This form is generated by the formkl adapter" {
	multiple "Work Experience" has {
		require text;
	}
	"Personal Information" has {
		text;
		multiple paragraph;
		multiple text as "something";
	}
}


================================================
FILE: packages/adapters/vue/src/components/field-node.vue
================================================
<template>
  <div class="formkl-field__wrapper">
    <p v-if="field.label" class="formkl-field__title">{{ field.label }}</p>
    <div class="formkl-field__container">
      <template v-if="field.multiple">
        <component
          v-for="(modelValueEach, index) in modelValue"
          class="formkl-field__inner"
          :is="VNodeFieldWrapper"
          :key="index"
        >
          <component
            :is="VNodeField"
            :model-value="modelValueEach"
            @update:model-value="handleUpdateFieldMultiple($event, index)"
          />
          <div class="formkl-field__remover">
            <component
              v-if="modelValue.length > 1"
              :is="VNodeBtnRemoveField"
              @click="handleRemoveValueFieldMultiple(index)"
            />
          </div>
        </component>
        <div class="formkl-field__footer">
          <component :is="VNodeBtnAddField" @click="handleAddValueFieldMultiple" />
        </div>
      </template>
      <component v-else :is="VNodeFieldWrapper">
        <component
          :is="VNodeField"
          :model-value="modelValue"
          @update:model-value="handleUpdateFieldSingle"
        />
      </component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, h, inject, PropType } from "vue";
import { FieldCustom, FieldDefault, FieldSelection, Formkl, Section } from "@formkl/shared";
import { themeInjectionKey } from "../keys/theme";

import _cloneDeep from "lodash/cloneDeep";
import _set from "lodash/set";

const props = defineProps({
  form: Object as PropType<Formkl>,
  section: Object as PropType<Section>,
  field: Object as PropType<FieldDefault | FieldSelection | FieldCustom>,
  modelValue: {
    type: [Object, Array, String, Number, Boolean] as PropType<any>,
    default: () => null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleUpdateFieldMultiple = (value: any, index: number) => {
  const currentValue = _cloneDeep(props.modelValue) as Array<any>;
  _set(currentValue, String(index), value);
  emit("update:modelValue", currentValue);
};

const handleUpdateFieldSingle = (value: any) => {
  emit("update:modelValue", value);
};

const handleAddValueFieldMultiple = () => {
  const currentValue = _cloneDeep(props.modelValue) as Array<any>;
  currentValue.push(null);
  emit("update:modelValue", currentValue);
};

const handleRemoveValueFieldMultiple = (index: number) => {
  const currentValue = _cloneDeep(props.modelValue) as Array<any>;
  currentValue.splice(index, 1);
  emit("update:modelValue", currentValue);
};

const currentTheme = inject(themeInjectionKey);

const VNodeFieldWrapper = defineComponent({
  name: "FieldWrapper",
  setup:
    (props, { slots }) =>
    () =>
      h(currentTheme.value?.vNodeFieldWrapper || "div", slots.default()),
});

const VNodeField = defineComponent({
  name: "Field",
  setup: () => () => h(currentTheme.value?.vNodeFields?.[props.field.type] || "div", props.field),
});

const VNodeBtnAddField = defineComponent({
  name: "BtnAddField",
  setup: () => () =>
    currentTheme.value?.vNodeComponents?.addField
      ? h(currentTheme.value?.vNodeComponents?.addField)
      : h("button", () => "Add field"),
});

const VNodeBtnRemoveField = defineComponent({
  name: "BtnRemoveField",
  setup: () => () =>
    currentTheme.value?.vNodeComponents?.addField
      ? h(currentTheme.value?.vNodeComponents?.removeField)
      : h("button", () => "Remove field"),
});
</script>



================================================
FILE: packages/adapters/vue/src/components/form-node.vue
================================================
<template>
  <div class="formkl-form__wrapper">
    <div class="formkl-form__container">
      <SectionNode
        v-for="section in form.sections"
        :key="section.key"
        :form="form"
        :section="section"
        :model-value="modelValue?.[section.key]"
        @update:model-value="handleUpdateSection($event, section)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Formkl, Schema } from "@formkl/shared";

import SectionNode from "./section-node.vue";

const props = defineProps({
  form: Object as PropType<Formkl>,
  modelValue: {
    type: Object as PropType<Schema>,
    required: true,
  },
});

const emit = defineEmits<{
  (event: "update:modelValue", model: any): void;
}>();

const handleUpdateSection = (value: any, section: any) => {
  emit("update:modelValue", Object.assign({}, props.modelValue, { [section.key]: value }));
};
</script>



================================================
FILE: packages/adapters/vue/src/components/section-node.vue
================================================
<template>
  <div class="formkl-section__wrapper">
    <p v-if="section.title" class="formkl-section__title">{{ section.title }}</p>
    <div class="formkl-section__container">
      <template v-for="field in section.fields">
        <template v-if="section.multiple">
          <div
            v-for="(modelValueEach, index) in (modelValue as Array<any>)"
            :key="field.key + '-' + index"
            class="formkl-section__inner"
          >
            <FieldNode
              :section="section"
              :field="field"
              :model-value="modelValueEach[field.key]"
              @update:model-value="handleUpdateFieldMultiple($event, field, index)"
            />
            <div class="formkl-section__remover">
              <component
                v-if="modelValue.length > 1"
                :is="VNodeBtnRemoveSection"
                @click="handleRemoveValueSectionMultiple(index)"
              />
            </div>
          </div>
          <div class="formkl-section__footer">
            <component :is="VNodeBtnAddSection" @click="handleAddValueSectionMultiple" />
          </div>
        </template>
        <FieldNode
          v-else
          :key="field.key"
          :section="section"
          :field="field"
          :model-value="modelValue?.[field.key]"
          @update:model-value="handleUpdateFieldSingle($event, field)"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, h, inject, PropType } from "vue";
import { FieldCustom, FieldDefault, FieldSelection, Formkl, Section } from "@formkl/shared";

import _cloneDeep from "lodash/cloneDeep";

import FieldNode from "./field-node.vue";
import { themeInjectionKey } from "../keys/theme";

const props = defineProps({
  form: Object as PropType<Formkl>,
  section: Object as PropType<Section>,
  modelValue: {
    type: [Object, Array],
    default: () => ({}),
  },
});

const emit = defineEmits<{
  (event: "update:modelValue", model: any): void;
}>();

const handleUpdateFieldMultiple = (
  value: any,
  field: FieldDefault | FieldSelection | FieldCustom,
  index: number,
) => {
  emit(
    "update:modelValue",
    Object.assign({}, props.modelValue, {
      [index]: Object.assign({}, props.modelValue[index], { [field.key]: value }),
    }),
  );
};

const handleUpdateFieldSingle = (
  value: any,
  field: FieldDefault | FieldSelection | FieldCustom,
) => {
  emit("update:modelValue", Object.assign({}, props.modelValue, { [field.key]: value }));
};

const handleAddValueSectionMultiple = () => {
  const newModelValue = _cloneDeep(props.modelValue) as Array<any>;
  const sectionModel = props.section.fields.reduce(
    (a, b) => Object.assign({}, a, { [b.key]: null }),
    {},
  );
  newModelValue.push(sectionModel);
  emit("update:modelValue", newModelValue);
};

const handleRemoveValueSectionMultiple = (index: number) => {
  const newModelValue = _cloneDeep(props.modelValue) as Array<any>;
  newModelValue.splice(index, 1);
  emit("update:modelValue", newModelValue);
};

const currentTheme = inject(themeInjectionKey);

const VNodeBtnAddSection = defineComponent({
  name: "BtnAddSection",
  setup: () => () =>
    currentTheme.value?.vNodeComponents?.addSection
      ? h(currentTheme.value?.vNodeComponents?.addSection)
      : h("button", () => "Add section"),
});

const VNodeBtnRemoveSection = defineComponent({
  name: "BtnRemoveSection",
  setup: () => () =>
    currentTheme.value?.vNodeComponents?.removeSection
      ? h(currentTheme.value?.vNodeComponents?.removeSection)
      : h("button", () => "Remove section"),
});
</script>



================================================
FILE: packages/adapters/vue/src/keys/theme.ts
================================================
import { InjectionKey, ComputedRef } from "vue";
import { Theme } from "@formkl/shared";

export const themeInjectionKey: InjectionKey<ComputedRef<Theme>> = Symbol("theme");



================================================
FILE: packages/adapters/vue/src/layouts/default.vue
================================================
<template>
  <div class="formkl-layout__wrapper">
    <p v-if="form.title" class="formkl-layout__title">{{ form.title }}</p>
    <p v-if="form.description" class="formkl-layout__description">{{ form.description }}</p>
    <div class="formkl-layout__container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormLayoutNode",
};
</script>

<script lang="ts" setup>
import { PropType } from "vue";
import { Formkl } from "@formkl/shared";

defineProps({
  form: {
    type: Object as PropType<Formkl>,
    required: false,
  },
});
</script>



================================================
FILE: packages/editor/README.md
================================================
# Formkl - Form marKup Language

Formkl (Form marKup Language) is an open-source DSL (Domain-Specific Language) to define and create form schema. It is designed to be simple, consistent and highly readable as natural language.

## Getting Started

Please follow the documentation at [formkl.org](https://formkl.org)!

View sandbox: [sandbox.formkl.org](https://sandbox.formkl.org)

## Contribution

Please make sure to read the [Contributing Guide](https://formkl.org/learning/contribution-guide.html) before making a pull request.

Thank you to all the people who already contributed to the Formkl - Form marKup Language project!

<a href="https://github.com/imrim12/formkl/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=imrim12/formkl" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Nguyen Huu Nguyen Y



================================================
FILE: packages/editor/build.config.ts
================================================
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



================================================
FILE: packages/editor/package.json
================================================
{
	"name": "@formkl/editor",
	"version": "0.2.0",
	"description": "A universal Editor for Formkl using web component API",
	"type": "module",
	"exports": {
		".": {
			"import": "./dist/index.mjs",
			"require": "./dist/index.cjs"
		}
	},
	"main": "./dist/index.cjs",
	"types": "./dist/index.d.ts",
	"files": [
		"dist"
	],
	"scripts": {
		"typecheck": "tsc --noEmit",
		"build": "npx unbuild"
	},
	"repository": {
		"type": "git",
		"url": "git+ssh://git@github.com/imrim12/formkl.git",
		"directory": "packages/editor"
	},
	"keywords": [
		"formkl",
		"editor"
	],
	"author": "thecodeorigin",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/imrim12/formkl/issues"
	},
	"homepage": "https://github.com/imrim12/formkl#readme",
	"dependencies": {
		"@codemirror/autocomplete": "^6.2.0",
		"@codemirror/commands": "^6.1.0",
		"@codemirror/lint": "^6.0.0",
		"@codemirror/state": "^6.1.2",
		"@codemirror/view": "^6.2.4",
		"@formkl/shared": "workspace:*",
		"codemirror": "^6.0.1",
		"formkl": "workspace:*"
	},
	"devDependencies": {
		"@vitest/ui": "^0.34.6",
		"rimraf": "^5.0.5",
		"typescript": "^5.2.2",
		"unbuild": "^0.9.4",
		"vitest": "^0.34.6"
	}
}


================================================
FILE: packages/editor/tsconfig.json
================================================
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist",
    "types": ["vitest/globals"]
  },
  "include": ["./**/*.ts"],
  "exclude": ["./node_modules", "./dist"]
}



================================================
FILE: packages/editor/.npmignore
================================================
./node_modules



================================================
FILE: packages/editor/src/env.d.ts
================================================
/// <reference types="vite/client" />
import type { FieldDefault, FieldSelection } from "formkl";

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}



================================================
FILE: packages/editor/src/index.ts
================================================
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



================================================
FILE: packages/editor/src/extensions/autocomplete.ts
================================================
import type { Extension } from "@codemirror/state";

import { autocompletion, CompletionContext, Completion } from "@codemirror/autocomplete";

// Our list of completions (can be static, since the editor
/// will do filtering based on context).
export const completions: Array<Completion> = [
  { label: "formkl", type: "class", detail: "Formkl block", info: "Start declaring a Form" },
  {
    label: "base",
    type: "type",
    detail: "Model type",
    info: `Default structure form data, for ex: [ { key: "fullname", value: "Michael Jackson" } ]`,
  },
  {
    label: "flat",
    type: "type",
    detail: "Model type",
    info: `Flatten structure form data, for ex: { fullname: "Michael Jackson" }`,
  },
  {
    label: "multiple",
    type: "keyword",
    detail: "Multiple responses",
    info: "Declare whether a field of a section has multiple responses",
  },
  {
    label: "includes",
    type: "keyword",
    detail: "Section block",
    info: "Declare a group of fields",
  },
  {
    label: "or",
    type: "keyword",
    detail: "OR condition operator",
    info: "Use as: valid(>500 or ==300)",
  },
  {
    label: "and",
    type: "keyword",
    detail: "AND condition operator",
    info: "Use as: valid(>500 and <1000)",
  },
  {
    label: "has",
    type: "keyword",
    detail: "HAS condition operator",
    info: "Use as: valid(has 'some keyword')",
  },
  {
    label: "as",
    type: "keyword",
    detail: "Field alias",
    info: "Declare custom key for field in form data",
  },
  { label: "require", type: "keyword", detail: "Require field" },
  { label: "valid", type: "function", detail: "Validation", info: "Declare simple validation" },
  {
    label: "regex",
    type: "function",
    detail: "RegExp",
    info: "Declare a validation with Regular Expression",
  },
  {
    label: "url",
    type: "function",
    detail: "Selection",
    info: "Declare data source url for select field's options",
  },
  { label: "get", type: "function", detail: "Submit method" },
  { label: "post", type: "function", detail: "Submit method" },
  { label: "put", type: "function", detail: "Submit method" },
  { label: "patch", type: "function", detail: "Submit method" },
  { label: "delete", type: "function", detail: "Submit method" },
  { label: "text", type: "constant", detail: "Field" },
  { label: "paragraph", type: "constant", detail: "Field" },
  { label: "number", type: "constant", detail: "Field" },
  { label: "switch", type: "constant", detail: "Field" },
  { label: "checkbox", type: "constant", detail: "Field" },
  { label: "radio", type: "constant", detail: "Field" },
  { label: "select", type: "constant", detail: "Field" },
  { label: "datetimerange", type: "constant", detail: "Field" },
  { label: "datetime", type: "constant", detail: "Field" },
  { label: "daterange", type: "constant", detail: "Field" },
  { label: "timerange", type: "constant", detail: "Field" },
  { label: "time", type: "constant", detail: "Field" },
  { label: "date", type: "constant", detail: "Field" },
  { label: "future date", type: "constant", detail: "Field" },
  { label: "past date", type: "constant", detail: "Field" },
  { label: "birthday", type: "constant", detail: "Field" },
  { label: "US phone", type: "constant", detail: "Field" },
  { label: "VN phone", type: "constant", detail: "Field" },
];

const keywordSuggestion = (context: CompletionContext) => {
  let before = context.matchBefore(/\w+/);
  // If completion wasn't explicitly started and there
  // is no word before the cursor, don't open completions.
  if (!context.explicit && !before) return null;

  return {
    from: before ? before.from : context.pos,
    options: completions,
    validFor: /^\w*$/,
  };
};

export const AutoCompleteExtension: Extension = autocompletion({ override: [keywordSuggestion] });



================================================
FILE: packages/editor/src/extensions/index.ts
================================================
export * from "./autocomplete";
export * from "./lint";



================================================
FILE: packages/editor/src/extensions/lint.ts
================================================
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



================================================
FILE: packages/elemento/README.md
================================================
# Formkl - Form marKup Language

Formkl (Form marKup Language) is an open-source DSL (Domain-Specific Language) to define and create form schema. It is designed to be simple, consistent and highly readable as natural language.

## Getting Started

Please follow the documentation at [formkl.org](https://formkl.org)!

View sandbox: [sandbox.formkl.org](https://sandbox.formkl.org)

## Contribution

Please make sure to read the [Contributing Guide](https://formkl.org/learning/contribution-guide.html) before making a pull request.

Thank you to all the people who already contributed to the Formkl - Form marKup Language project!

<a href="https://github.com/imrim12/formkl/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=imrim12/formkl" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Nguyen Huu Nguyen Y



================================================
FILE: packages/elemento/package.json
================================================
{
	"name": "@formkl/elemento",
	"version": "0.2.0",
	"type": "module",
	"exports": {
		".": {
			"import": "./dist/index.mjs",
			"require": "./dist/index.cjs"
		}
	},
	"main": "./dist/index.cjs",
	"style": "./dist/style.css",
	"types": "./dist/types/index.d.ts",
	"files": [
		"dist"
	],
	"scripts": {
		"typecheck": "tsc --noEmit",
		"build": "vite build"
	},
	"dependencies": {
		"@formkl/shared": "workspace:*",
		"axios": "^1.3.5",
		"element-plus": "^2.4.2"
	},
	"devDependencies": {
		"@vitest/ui": "^0.34.6",
		"typescript": "^5.2.2",
		"unbuild": "^0.9.4",
		"vite": "^4.5.0",
		"vite-plugin-dts": "^3.6.3",
		"vitest": "^0.34.6",
		"vue": "^3.3.7",
		"vue-tsc": "^1.8.22"
	}
}


================================================
FILE: packages/elemento/tsconfig.json
================================================
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist",
    "types": ["vite/client", "vitest/globals"]
  },
  "include": ["./**/*.ts", "./**/*.tsx"],
  "exclude": ["./node_modules", "./dist"]
}



================================================
FILE: packages/elemento/vite.config.ts
================================================
import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name: "@formkl/elemento",
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format: string) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: ["@formkl/shared", "axios", "element-plus", "vue"],
      output: {
        exports: "named",
        globals: {},
      },
    },
  },
  plugins: [
    dts({
      root: ".",
      entryRoot: "./src",
      outputDir: "./dist/types",
    }),
  ],
});



================================================
FILE: packages/elemento/src/index.ts
================================================
import { h } from "vue";
import { Theme } from "@formkl/shared";
import {
  ElInput,
  ElButton,
  ElSwitch,
  ElInputNumber,
  ElDatePicker,
  ElTimePicker,
  ElForm,
  ElFormItem,
} from "element-plus";

import RadioComponent from "./components/radio.component";
import CheckboxComponent from "./components/checkbox.component";
import SelectComponent from "./components/select.component";

import "element-plus/dist/index.css";

import "./style.css";

const themeConfig: Theme = {
  VNodeFormWrapper: h(ElForm),
  vNodeFieldWrapper: h(ElFormItem),
  vNodeFields: {
    text: h(ElInput),
    paragraph: h(ElInput, { type: "textarea" }),
    switch: h(ElSwitch),
    number: h(ElInputNumber),
    date: h(ElDatePicker, { valueFormat: "YYYY-MM-DD" }),
    time: h(ElTimePicker, { valueFormat: "HH:mm:ss" }),
    datetime: h(ElDatePicker, { type: "datetime", valueFormat: "YYYY-MM-DD HH:mm:ss" }),
    daterange: h(ElDatePicker, { isRange: true, valueFormat: "YYYY-MM-DD" }),
    timerange: h(ElTimePicker, { isRange: true, valueFormat: "HH:mm:ss" }),
    datetimerange: h(ElDatePicker, {
      type: "datetime",
      isRange: true,
      valueFormat: "YYYY-MM-DD HH:mm:ss",
    }),
    select: SelectComponent,
    checkbox: CheckboxComponent,
    radio: RadioComponent,
  },
  vNodeComponents: {
    addSection: h(ElButton, () => "Add section"),
    removeSection: h(ElButton, { type: "danger" }, "Remove section"),
    addField: h(ElButton, () => "Add field"),
    removeField: h(ElButton, { type: "danger" }, "Remove field"),
  },
};

export default themeConfig;



================================================
FILE: packages/elemento/src/style.css
================================================
.el-input + .el-input,
.el-textarea + .el-textarea,
.formkl-section_container + .formkl-section_container,
.formkl-field_container + .formkl-field_container {
  margin-top: 0.5rem;
}

.formkl-section__remover,
.formkl-field__remover {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0.5rem;
}

.formkl-section__footer,
.formkl-field__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}



================================================
FILE: packages/elemento/src/components/checkbox.component.ts
================================================
import { ElCheckboxGroup, ElCheckbox } from "element-plus";
import { defineComponent, h } from "vue";
import { useSelection } from "./useSelection";

export default defineComponent({
  name: "FormklCheckbox",
  props: {
    options: Array,
    modelValue: [String, Number],
    fetchUrl: {
      type: String,
      default: "",
    },
    fetchDataPath: {
      type: String,
      default: "",
    },
    labelKey: {
      type: String,
      default: "name",
    },
    valueKey: {
      type: String,
      default: "id",
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { attrs }) {
    const { computedOptions } = useSelection();

    return () =>
      h(
        ElCheckboxGroup,
        Object.assign({}, props as any, attrs),
        computedOptions.value.map((option) => h(ElCheckbox, { label: option.value }, option.label)),
      );
  },
});



================================================
FILE: packages/elemento/src/components/radio.component.ts
================================================
import { ElRadioGroup, ElRadio } from "element-plus";
import { defineComponent, h } from "vue";
import { useSelection } from "./useSelection";

export default defineComponent({
  name: "FormklRadio",
  props: {
    options: Array,
    modelValue: [String, Number],
    fetchUrl: {
      type: String,
      default: "",
    },
    fetchDataPath: {
      type: String,
      default: "",
    },
    labelKey: {
      type: String,
      default: "name",
    },
    valueKey: {
      type: String,
      default: "id",
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { attrs }) {
    const { computedOptions } = useSelection();

    return () =>
      h(
        ElRadioGroup,
        Object.assign({}, props as any, attrs),
        computedOptions.value.map((option: any) =>
          h(ElRadio, { label: option.value }, option.label),
        ),
      );
  },
});



================================================
FILE: packages/elemento/src/components/select.component.ts
================================================
import { ElSelectV2 } from "element-plus";
import { defineComponent, getCurrentInstance, h } from "vue";

import { isNaNStrict } from "@formkl/shared";
import { useSelection } from "./useSelection";

export default defineComponent({
  name: "FormklSelect",
  props: {
    options: Array,
    modelValue: [String, Number],
    fetchUrl: {
      type: String,
      default: "",
    },
    fetchDataPath: {
      type: String,
      default: "",
    },
    labelKey: {
      type: String,
      default: "name",
    },
    valueKey: {
      type: String,
      default: "id",
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const vm = getCurrentInstance()?.proxy;

    const { computedOptions, isLoading, handleSearchOption } = useSelection();

    const handleSelectionChange = (event: any) => {
      emit("change", event);
      emit("update:modelValue", event);

      (vm.$refs.selectV2Ref as any).handleClickOutside();
    };

    console.log(computedOptions.value);

    return () =>
      h(
        ElSelectV2,
        {
          ref: "selectV2Ref",
          valueKey: "value",
          filterable: true,
          clearable: true,
          multiple: false,
          defaultFirstOption: true,
          modelValue: isNaNStrict(props.modelValue) ? Number(props.modelValue) : props.modelValue,
          remote: Boolean(props.fetchUrl),
          remoteMethod: handleSearchOption,
          loading: isLoading.value,
          options: computedOptions.value,
          onChange: handleSelectionChange,
          onClear: handleSelectionChange,
        },
        {
          default: ({ item }) => h("span", { class: "text-sm" }, item.label),
        },
      );
  },
});



================================================
FILE: packages/elemento/src/components/useSelection.ts
================================================
import { computed, getCurrentInstance, onBeforeMount, ref } from "vue";
import { get, uniqBy, isNaNStrict } from "@formkl/shared";
import axios from "axios";

export const useSelection = () => {
  const vm = getCurrentInstance()?.proxy;
  const props = vm.$props as any;

  const isLoading = ref(false);

  const fetchedOptions = ref<Array<any>>([]);

  const computedOptions = computed<Array<{ label: string; value: any }>>(() => {
    if (["number", "string"].includes(typeof props.options?.[0])) {
      return props.options.map((o: string) => ({ label: o, value: o }));
    }

    const options = fetchedOptions.value;

    if (
      typeof props.options?.[0] === "object" &&
      Object.keys(props.options?.[0]).includes(props.valueKey) &&
      Object.keys(props.options?.[0]).includes(props.labelKey)
    ) {
      options.push(...props.options);
    }

    return uniqBy(options, props.valueKey).map((option: any) => {
      const label = get(option, props.labelKey);
      const value = get(option, props.valueKey);

      return {
        label,
        value: isNaNStrict(value) ? value : +value,
      };
    });
  });

  const handleSearchOption = async (keyword = "") => {
    if (props.fetchUrl && vm) {
      try {
        isLoading.value = true;
        const { data } = await axios.get(props.fetchUrl, {
          params: {
            page: 1,
            limit: 50,
            keyword,
          },
        });

        fetchedOptions.value = props.fetchDataPath ? get(data, props.fetchDataPath) : data;
      } catch (err: any) {
        console.error(err);
      } finally {
        isLoading.value = false;
      }
    }
  };

  onBeforeMount(handleSearchOption);

  return {
    handleSearchOption,
    isLoading,
    computedOptions,
  };
};



================================================
FILE: packages/language/README.md
================================================
# Formkl - Form marKup Language

Formkl (Form marKup Language) is an open-source DSL (Domain-Specific Language) to define and create form schema. It is designed to be simple, consistent and highly readable as natural language.

## Getting Started

Please follow the documentation at [formkl.org](https://formkl.org)!

View sandbox: [sandbox.formkl.org](https://sandbox.formkl.org)

## Contribution

Please make sure to read the [Contributing Guide](https://formkl.org/learning/contribution-guide.html) before making a pull request.

Thank you to all the people who already contributed to the Formkl - Form marKup Language project!

<a href="https://github.com/imrim12/formkl/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=imrim12/formkl" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Nguyen Huu Nguyen Y



================================================
FILE: packages/language/package.json
================================================
{
	"name": "formkl",
	"version": "0.2.0",
	"description": "Form marKup Language",
	"type": "module",
	"exports": {
		".": {
			"import": "./dist/index.mjs",
			"require": "./dist/index.cjs"
		}
	},
	"main": "./dist/index.cjs",
	"types": "./dist/types/index.d.ts",
	"files": [
		"dist"
	],
	"scripts": {
		"typecheck": "tsc --noEmit",
		"build": "rimraf ./dist && vite build"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/imrim12/formkl.git",
		"directory": "language"
	},
	"keywords": [
		"form",
		"formkl",
		"formjs",
		"form",
		"generator",
		"schema"
	],
	"author": "thecodeorigin",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/imrim12/formkl/issues"
	},
	"homepage": "https://github.com/imrim12/formkl#readme",
	"dependencies": {
		"@formkl/shared": "workspace:*"
	},
	"devDependencies": {
		"@vitest/ui": "^0.34.6",
		"rimraf": "^5.0.5",
		"typescript": "^5.2.2",
		"vite": "^4.5.0",
		"vite-plugin-dts": "^3.6.3",
		"vitest": "^0.34.6"
	}
}


================================================
FILE: packages/language/tsconfig.json
================================================
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist",
    "types": ["vitest/globals"]
  },
  "include": ["./**/*.ts"],
  "exclude": ["./node_modules", "./dist"]
}



================================================
FILE: packages/language/vite.config.ts
================================================
import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name: "formkl",
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es", "cjs"],

      fileName: (format: string) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: ["@formkl/shared"],

      output: {
        exports: "named",
        globals: {},
      },
    },
  },
  plugins: [
    dts({
      root: ".",
      entryRoot: "./src",
      outputDir: "./dist/types",
    }),
  ],
});



================================================
FILE: packages/language/.npmignore
================================================
/__test__
/logs
/node_modules
/src

.gitignore
.minify.json
.npmignore



================================================
FILE: packages/language/src/define.ts
================================================
import { FieldDefault, FieldSelection, Formkl, Schema, Section } from "@formkl/shared";

export function defineForm(form: Formkl) {
  return form;
}

export function defineSection(section: Section) {
  return section;
}

export function defineField(field: FieldDefault | FieldSelection) {
  return field;
}

export function defineModel(model: Schema) {
  return model;
}



================================================
FILE: packages/language/src/index.ts
================================================
import { Parser } from "./parser";
import { Tokenizer } from "./tokenizer";

const parser = new Parser();

export default parser;

export * from "./define";

export { Parser, Tokenizer };



================================================
FILE: packages/language/src/parser.ts
================================================
import { Formkl, Section, FieldDefault, FieldSelection, HttpMethod } from "@formkl/shared";
import { Tokenizer } from "./tokenizer";
import { Token } from "./types";

import { Stringifier } from "./stringifier";
import { capitalize } from "./utils/capitalize";
import { kebabCase } from "./utils/kebabCase";

export class Parser {
  public syntax: string;
  public tokenizer: Tokenizer;

  private _lookahead: Token | null;

  /**
   * Initializes the parser.
   */
  constructor() {
    this.syntax = "";
    this.tokenizer = new Tokenizer("");

    this._lookahead = null;
  }

  /**
   * Parse a Formkl syntax string into Formkl object
   */
  parse(string: string): Formkl {
    this.syntax = "";
    this._lookahead = null;

    this.syntax = string;
    this.tokenizer = new Tokenizer(this.syntax);

    // Prime the tokenizer to obtain the first
    // token which is our lookahead. The lookahead is
    // used for predective parsing.

    this._lookahead = this.tokenizer.getNextToken();

    // Parse recursively starting from the main
    // entry point, the Program:
    return this.FormBlock();
  }

  /**
   * Stringify a Formkl object to a Formkl syntax string
   */
  stringify(formkl: Formkl) {
    const stringifier = new Stringifier();

    return stringifier.stringify(formkl);
  }

  /**
   * Main entry point.
   *
   * FormBlock
   *  = SectionBlockList
   *  ;
   */
  private FormBlock(): Formkl {
    const form: Formkl = {
      model: "base",
      sections: [],
    };

    this._eat("FORMKL");

    if (this._lookahead?.type === "FLAT") {
      this._eat("FLAT");
      form.model = "flat";
    } else if (this._lookahead?.type === "BASE") {
      this._eat("BASE");
      form.model = "base";
    } else {
      form.model = "base";
    }

    if (this._lookahead?.type === "HTTPMETHOD") {
      form.method = this._eat("HTTPMETHOD").value as HttpMethod;
      this._eat("(");
      form.endpoint = this.StringLiteral();
      this._eat(")");
    }

    if (this._lookahead?.type === "STRING") {
      form.title = this.StringLiteral();
    }

    if (this._lookahead?.type === "STRING") {
      form.description = this.StringLiteral();
    }

    this._eat("{");

    const sections = this.SectionBlockList();

    if (sections.length > 1) {
      const keySet = new Set();
      sections.forEach((section) => {
        if (keySet.has(section.key)) {
          throw new SyntaxError(
            `Duplicate section key "${section.key}", this will make the your schema looks confusing! Please use different aliases if your sections have the same title.`,
          );
        } else {
          keySet.add(section.key);
        }
      });
    }

    Object.assign(form, { sections });

    this._eat("}");

    return form;
  }

  /**
   * SectionBlockList
   *  = (SectionBlock)*
   *  ;
   */
  private SectionBlockList(stopLookAhead = "}") {
    const sectionList = [this.SectionBlock()];
    while (this._lookahead != null && this._lookahead?.type !== stopLookAhead) {
      sectionList.push(this.SectionBlock());
    }
    return sectionList;
  }

  /**
   * SectionBlock
   *  = FieldStatementList
   *  ;
   */
  private SectionBlock(): Section {
    const section: Section = {
      fields: [],
    };

    if (this._lookahead?.type === "NUMBER") {
      section.maxResponseAllowed = this.NumericLiteral();
      section.multiple = true;
    } else if (this._lookahead?.type === "MULTIPLE") {
      this._eat("MULTIPLE");
      section.multiple = true;
    }

    if (this._lookahead?.type === "STRING") {
      section.title = this.StringLiteral();
      section.key = kebabCase(section.title).toLowerCase();
    }

    this._eat("HAS");
    this._eat("{");
    const fields = this.FieldStatementList();
    this._eat("}");

    if (this._lookahead?.type === "AS") {
      this._eat("AS");
      section.key = this.StringLiteral();
    }

    if (fields.length > 1) {
      const keySet = new Set();
      fields.forEach((field) => {
        if (keySet.has(field.key)) {
          throw new SyntaxError(
            `Duplicate field key "${field.key}", this will make the your schema looks confusing! Please use different aliases if your fields have the same name.`,
          );
        } else {
          keySet.add(field.key);
        }
      });
    }

    if (section.multiple && fields.some((f) => f.multiple)) {
      throw new SyntaxError(
        `A section with multiple responses cannot have fields that also have multiple responses!`,
      );
    }

    Object.assign(section, { fields });

    return section;
  }

  /**
   * FieldStatementList
   * : (FieldStatement)*
   * ;
   * */
  private FieldStatementList(stopLookAhead = "}") {
    const fieldStatementList = [this.FieldStatement()];
    while (this._lookahead !== null && this._lookahead?.type !== stopLookAhead) {
      fieldStatementList.push(this.FieldStatement());
    }
    return fieldStatementList;
  }

  /**
   * FieldStatement
   *  = (NUMBER) (REQUIRE) (StringLiteral) FieldExpression (as StringLiteral) ';'
   *  | (REQUIRE) (MULTIPLE) (StringLiteral) FieldExpression (as StringLiteral) ';'
   *  ;
   */
  private FieldStatement(): FieldDefault | FieldSelection {
    const field: FieldDefault | FieldSelection = {
      type: "text",
      label: "",
      key: "",
    };

    if (this._lookahead?.type === "NUMBER") {
      field.maxResponseAllowed = this.NumericLiteral();
      field.multiple = true;
    }

    if (this._lookahead?.type === "REQUIRE") {
      this._eat("REQUIRE");
      field.required = true;
    }

    if (this._lookahead?.type === "MULTIPLE") {
      this._eat("MULTIPLE");
      field.multiple = true;
    }

    if (this._lookahead?.type === "STRING") {
      field.label = this.StringLiteral();
    } else {
      field.label = capitalize(String(this._lookahead?.value).replace(/^\$/g, ""));
    }

    field.key = kebabCase(field.label).toLowerCase();

    Object.assign(field, this.FieldExpression());

    if (this._lookahead?.type === "AS") {
      this._eat("AS");
      field.key = this.StringLiteral();
    }

    this._eat(";");

    return field;
  }

  /**
   * FieldExpression
   *  = 'FIELD'
   *  | 'FIELDSELECTION'
   *  | 'FIELDVALIDATED'
   *  | 'FIELDDATETIME'
   *  | FieldExpression ValidationExpression
   *  ;
   */
  private FieldExpression() {
    const field: any = {};

    const expression = {
      FIELD: this.FieldDefaultExpression.bind(this),
      FIELDCUSTOM: this.FieldCustomExpression.bind(this),
      FIELDSELECTION: this.FieldSelectionExpression.bind(this),
      FIELDVALIDATED: this.FieldValidatedExpression.bind(this),
      FIELDDATETIME: this.FieldDatetimeExpression.bind(this),
    }[String(this._lookahead?.type)];

    if (expression) {
      Object.assign(field, expression());

      const validation = this.ValidationExpression();

      Object.assign(field, validation);
    } else {
      throw new SyntaxError(`Unsupported field type "${this._lookahead?.value}"`);
    }

    return field;
  }

  private FieldDefaultExpression() {
    const expression: Pick<FieldDefault, "type"> = {
      type: "text",
    };

    if (this._lookahead?.type === "FIELD") {
      const fieldType = this._eat("FIELD").value;

      Object.assign(expression, {
        type: (fieldType as string).toLowerCase(),
      });
    }

    return expression;
  }

  private FieldCustomExpression() {
    const expression: Pick<FieldDefault, "type"> = {
      type: "text",
    };

    if (this._lookahead?.type === "FIELDCUSTOM") {
      const fieldType = this._eat("FIELDCUSTOM").value;

      Object.assign(expression, {
        type: (fieldType as string).toLowerCase(),
      });
    }

    return expression;
  }

  /**
   * FieldSelectionExpression
   *  = 'FIELDSELECTION' StringLiteral '(' StringList ')'
   *  | 'FIELDSELECTION' StringLiteral 'URL' '(' StringList ')'
   *  | 'FIELDSELECTION' 'URL' '(' StringList ')'
   *  | 'FIELDSELECTION' '(' StringList ')'
   *  ;
   */
  private FieldSelectionExpression() {
    let fetchDataPath = "";

    const expression: Pick<FieldSelection, "type" | "options"> = {
      type: "select",
      options: [],
    };

    if (this._lookahead?.type === "FIELDSELECTION") {
      const fieldType = this._eat("FIELDSELECTION").value;

      Object.assign(expression, {
        type: (fieldType as string).toLowerCase(),
      });
    }

    if (this._lookahead?.type === "STRING") {
      fetchDataPath = this.StringLiteral();
    }

    if (this._lookahead?.type === "URL") {
      this._eat("URL");
      this._eat("(");
      const args = this.StringList();

      if (args.length > 3) {
        throw new SyntaxError(
          'Selection field fetching data from URL can only have less or equal to 3 arguments ("fetchUrl", "valueKey", "labelKey")',
        );
      }

      this._eat(")");

      Object.assign(expression, {
        options: [],
        fetchUrl: args[0] || "",
        valueKey: args[1] || "id",
        labelKey: args[2] || "name",
      });
    }

    if (this._lookahead?.type === "(") {
      this._eat("(");
      const args = this.StringList();
      this._eat(")");

      expression["options"] = args;
    }

    Object.assign(expression, { fetchDataPath });

    return expression;
  }

  private FieldValidatedExpression() {
    const expression: Pick<FieldDefault, "type"> = {
      type: "text",
    };

    if (this._lookahead?.type === "FIELDVALIDATED") {
      const fieldType = this._eat("FIELDVALIDATED").value;

      Object.assign(expression, {
        type: (fieldType as string).toLowerCase(),
      });
    }

    return expression;
  }

  private FieldDatetimeExpression() {
    const expression: Pick<FieldDefault, "type"> = {
      type: "datetime",
    };

    if (this._lookahead?.type === "FIELDDATETIME") {
      const fieldType = this._eat("FIELDDATETIME").value;

      Object.assign(expression, {
        type: (fieldType as string).toLowerCase(),
      });
    }

    return expression;
  }

  /**
   * ValidationExpression
   *  = 'VALID' '(' LogicalORExpression ')'
   *  | 'VALID' '(' LogicalORExpression ')' 'REGEX' '(' StringLiteral ')'
   *  | 'REGEX' '(' StringLiteral ')'
   *  | 'REGEX' '(' StringLiteral ')' 'VALID' '(' LogicalORExpression ')'
   *  ;
   */
  private ValidationExpression() {
    const expression: any = {};

    do {
      if (this._lookahead?.type === "VALID") {
        this._eat("VALID");
        this._eat("(");
        const validation = this.LogicalORExpression();
        this._eat(")");

        Object.assign(expression, {
          logic: validation,
        });
      }

      if (this._lookahead?.type === "REGEX") {
        this._eat("REGEX");
        this._eat("(");
        const regex = this.StringLiteral();
        this._eat(")");

        Object.assign(expression, { regex: new RegExp(regex) });
      }
    } while (["REGEX", "VALID"].includes(String(this._lookahead?.type)));

    if (expression.logic || expression.regex)
      return {
        validation: expression,
      };
  }

  /**
   * LogicalORExpression
   *  = LogicalANDExpression
   *  | LogicalANDExpression OR LogicalANDExpression
   *  ;
   */
  private LogicalORExpression() {
    const expresion = [];
    do {
      expresion.push(this.LogicalANDExpression());
    } while (this._lookahead?.type === "OR" && this._eat("OR"));

    return expresion.length > 1
      ? {
          $or: expresion,
        }
      : expresion[0];
  }

  /**
   * LogicalANDExpression
   *  = RelationalExpression
   *  | RelationalExpression AND RelationalExpression
   *  ;
   */
  private LogicalANDExpression() {
    const expresion = [];
    do {
      expresion.push(this.RelationalExpression());
    } while (this._lookahead?.type === "AND" && this._eat("AND"));

    return expresion.length > 1
      ? {
          $and: expresion,
        }
      : expresion[0];
  }

  /**
   * RelationalExpression
   *  = OPERATOR_RELATIONAL NumericLiteral
   *  | OPERATOR_EQUALITY StringLiteral
   *  | OPERATOR_EQUALITY NumericLiteral
   *  | HAS StringLiteral
   *  | HAS NumericLiteral
   *  ;
   */
  private RelationalExpression() {
    switch (this._lookahead?.type) {
      case "OPERATOR_RELATIONAL":
        const relationalOperator = this._eat("OPERATOR_RELATIONAL").value;

        switch (relationalOperator) {
          case ">":
            return { $gt: this.NumericLiteral() };
          case ">=":
            return { $gte: this.NumericLiteral() };
          case "<":
            return { $lt: this.NumericLiteral() };
          case "<=":
            return { $lte: this.NumericLiteral() };
          default:
            throw new SyntaxError(`Unknown relational operator: ${relationalOperator}`);
        }
      case "OPERATOR_EQUALITY":
        const equalityOperator = this._eat("OPERATOR_EQUALITY").value;
        const equalityOperatorKey = equalityOperator === "==" ? "$eq" : "$neq";

        switch (equalityOperator) {
          case "==":
          case "!=":
            switch (
              this._lookahead?.type as
                | "NUMBER"
                | "NAN"
                | "NULL"
                | "UNDEFINED"
                | "TRUE"
                | "FALSE"
                | "STRING"
            ) {
              case "NUMBER":
                return { [equalityOperatorKey]: this.NumericLiteral() };
              case "NAN":
                return { [equalityOperatorKey]: this.NaNLiteral() };
              case "NULL":
                return { [equalityOperatorKey]: this.NullLiteral() };
              case "UNDEFINED":
                return { [equalityOperatorKey]: this.UndefinedLiteral() };
              case "TRUE":
              case "FALSE":
                return {
                  [equalityOperatorKey]: this.BooleanLiteral(
                    this._lookahead?.type as "TRUE" | "FALSE",
                  ),
                };
              case "STRING":
                return { [equalityOperatorKey]: this.StringLiteral() };
              default:
                throw new SyntaxError(`Unknown equality value type: ${this._lookahead?.type}`);
            }
          default:
            throw new SyntaxError(`Unknown equality operator: ${equalityOperator}`);
        }
      case "HAS":
        this._eat("HAS");

        return {
          $has: isNaN(this._lookahead?.value as number)
            ? this.StringLiteral()
            : this.NumericLiteral(),
        };
    }
  }

  /**
   * StringList
   *  = StringLiteral
   *  | StringList ',' StringLiteral
   *  ;
   */
  private StringList() {
    const strings = [];
    do {
      strings.push(this.StringLiteral());
    } while (this._lookahead?.type === "," && this._eat(","));

    return strings;
  }

  /**
   * NaNLiteral
   *  = 'NaN'
   *  ;
   */
  private NaNLiteral() {
    this._eat("NAN");
    return NaN;
  }

  /*
   * NumericLiteral
   *  = NUMBER
   *  ;
   */
  private NumericLiteral() {
    const token = this._eat("NUMBER");
    return Number(token.value);
  }

  /**
   * StringLiteral
   *   : STRING
   *   ;
   */
  private StringLiteral() {
    const token = this._eat("STRING");
    return String(token.value).slice(1, -1);
  }

  /**
   * BooleanLiteral
   *  = TRUE
   *  | FALSE
   *  ;
   */
  private BooleanLiteral(value: "TRUE" | "FALSE") {
    this._eat(value ? "TRUE" : "FALSE");
    return value;
  }

  /**
   * NullLiteral
   *  = 'null'
   *  ;
   */
  private NullLiteral() {
    this._eat("NULL");
    return null;
  }

  /**
   * UndefinedLiteral
   *  = 'undefined'
   *  ;
   */
  private UndefinedLiteral() {
    this._eat("UNDEFINED");
    return undefined;
  }

  /**
   * Expects a token of a given type.
   */
  _eat(tokenType: Token["type"]) {
    const token = this._lookahead;

    if (token === null) {
      // un token nulo es como un token EOF.
      throw new SyntaxError(`Unexpected end of input, expected: "${tokenType}"`);
    }

    if (token.type !== tokenType) {
      throw new SyntaxError(
        `Unexpected token: "${token.value}" at ${this.tokenizer.currentLine}:${this.tokenizer.currentColumn}, expected: "${tokenType}"`,
      );
    }

    // Advance to next token.
    this._lookahead = this.tokenizer.getNextToken();

    return token;
  }
}



================================================
FILE: packages/language/src/stringifier.ts
================================================
import {
  FieldCustom,
  FieldDefault,
  FieldSelection,
  Formkl,
  Section,
  Validation,
  ValidationLogic,
} from "@formkl/shared";
import { kebabCase } from "./utils/kebabCase";

export class Stringifier {
  constructor() {}

  validateLogicAnd(andLogic: Validation["logic"]["$and"]): string {
    const results = andLogic.map((e) => this.validationLogic(e));

    return results.join(`%(s)and%(s)`);
  }

  validateLogicOr(orLogic: Validation["logic"]["$or"]): string {
    const results = orLogic.map((e) => this.validationLogic(e));

    return results.join(`%(s)or%(s)`);
  }

  validationLogic(logic: Validation["logic"]): string {
    const operators = Object.keys(logic) as Array<keyof ValidationLogic>;
    const operator = operators[0];
    const val = logic[operator] as string | number;

    return {
      $gt: () => `>%(s)${val}`,
      $lt: () => `>=%(s)${val}`,
      $gteq: () => `<%(s)${val}`,
      $lteq: () => `<=%(s)${val}`,
      $eq: () => `==%(s)${typeof val === "string" ? JSON.stringify(val) : val}`,
      $has: () => `has%(s)${typeof val === "string" ? JSON.stringify(val) : val}`,
      $and: () => logic.$and && this.validateLogicAnd(logic.$and),
      $or: () => logic.$or && this.validateLogicOr(logic.$or),
    }[operator]();
  }

  validation(validation: Validation) {
    return [
      validation.regex && `regex("${validation.regex.source}")`,
      validation.logic && `valid(${this.validationLogic(validation.logic)})`,
    ]
      .filter((i) => i)
      .join("%(s)");
  }

  selectionField(field: FieldSelection) {
    return `${field.type}${
      field.fetchUrl
        ? `${field.fetchDataPath ? `%(s)${field.fetchDataPath}` : ""}%(s)url("${[
            field.fetchUrl,
            field.valueKey,
            field.labelKey,
          ]
            .map((o) => JSON.stringify(o))
            .join(", ")}")`
        : `%(s)(${field.options.map((o) => JSON.stringify(o)).join(", ")})`
    }`;
  }

  fields(fields: Array<FieldDefault | FieldSelection | FieldCustom>) {
    return (
      "%(t)%(t)" +
      fields
        .map(
          (field) =>
            [
              field.required && "require",
              field.maxResponseAllowed ? field.maxResponseAllowed : field.multiple && "multiple",
              kebabCase(field.label).toLowerCase() !== field.type && `"${field.label}"`,
              ["select", "radio", "checkbox"].includes(field.type)
                ? this.selectionField(field as FieldSelection)
                : field.type,
              field.validation && this.validation(field.validation),
              kebabCase(field.label).toLowerCase() !== field.key && `as%(s)"${field.key}"`,
            ]
              .filter((i) => i)
              .join("%(s)") + ";",
        )
        .join("%(n)%(t)%(t)")
    );
  }

  sections(sections: Array<Section>) {
    return sections
      .map((section) =>
        [
          "%(t)",
          section.multiple && "multiple%(s)",
          section.title && `"${section.title}"%(s)`,
          "has",
          "%(s)",
          "{",
          "%(n)",
          this.fields(section.fields),
          "%(n)",
          "%(t)",
          "}",
          (!section.title && section.key) ||
          (section.title && kebabCase(section.title).toLowerCase() !== section.key)
            ? `%(s)as%(s)"${section.key}"`
            : "",
        ].join(""),
      )
      .join("%(n)");
  }

  stringify(formkl: Formkl) {
    return `${[
      "formkl",
      formkl.model === "flat" && "flat",
      formkl.title && JSON.stringify(formkl.title),
      formkl.description && JSON.stringify(formkl.description),
    ]
      .filter((i) => i)
      .join("%(s)")}%(s){%(n)${this.sections(formkl.sections)}%(n)}`
      .replace(/\%\(s\)/g, " ")
      .replace(/\%\(t\)/g, "\t")
      .replace(/\%\(n\)/g, "\n");
  }
}



================================================
FILE: packages/language/src/tokenizer.ts
================================================
import { Token, Spec } from "./types";
import { createKeywordRegex } from "./utils/createKeywordRegex";

/**
 * Tokenizer spec.
 */
const Specs: Array<Spec> = [
  // --------------------------------------
  // Whitespace:
  [/^\n/, null],

  [/^\s+/, null],

  // --------------------------------------
  // Comments:

  // Skip single-line comments:
  [/^\/\/.*/, null],

  // Skip multi-line comments:
  [/^\/\*[\s\S]*?\*\//, null],

  // --------------------------------------
  // Symbols and delimiters:
  [/^;/, ";"], // Semicolon
  [/^{/, "{"], // LeftBrace
  [/^}/, "}"], // RightBrace
  [/^\(/, "("], // LeftParen
  [/^\)/, ")"], // RightParen
  [/^\[/, "["], // LeftBracket
  [/^\]/, "]"], // RightBracket
  [/^,/, ","], // Comma
  [/^\./, "."], // Dot

  // --------------------------------------
  // Validation Operators:
  // <, >, <=, >=
  [/^[<>]=?/, "OPERATOR_RELATIONAL"],
  [/^[=!]=/, "OPERATOR_EQUALITY"],

  // Logical Operators
  // ||, &&, !
  [/^&&/, "LOGICAL_AND"],
  [/^\|\|/, "LOGICAL_OR"],
  [/^!/, "LOGICAL_NOT"],

  [createKeywordRegex("VALID"), "VALID"],
  [createKeywordRegex("REGEX"), "REGEX"],
  [createKeywordRegex("URL"), "URL"],

  [createKeywordRegex("REQUIRE"), "REQUIRE"],
  [createKeywordRegex("AS"), "AS"],
  [createKeywordRegex("OR"), "OR"],
  [createKeywordRegex("AND"), "AND"],
  [createKeywordRegex("HAS"), "HAS"],
  /**
   * @deprecated
   */
  [createKeywordRegex("INCLUDES"), "HAS"],

  // --------------------------------------
  // Keywords
  [createKeywordRegex("FORMKL"), "FORMKL"],
  [createKeywordRegex("MULTIPLE"), "MULTIPLE"],
  [createKeywordRegex("BASE"), "BASE"],
  [createKeywordRegex("FLAT"), "FLAT"],

  // --------------------------------------
  // Http Methods
  [createKeywordRegex("GET"), "HTTPMETHOD"],
  [createKeywordRegex("POST"), "HTTPMETHOD"],
  [createKeywordRegex("PUT"), "HTTPMETHOD"],
  [createKeywordRegex("PATCH"), "HTTPMETHOD"],
  [createKeywordRegex("DELETE"), "HTTPMETHOD"],

  // --------------------------------------
  // Fields
  ...["text", "paragraph", "number", "switch"].map(
    (field) => [createKeywordRegex(field), "FIELD"] as Spec,
  ),
  ...["checkbox", "radio", "select"].map(
    (field) => [createKeywordRegex(field), "FIELDSELECTION"] as Spec,
  ),
  ...["email", "zip", "age"].map((field) => [createKeywordRegex(field), "FIELDVALIDATED"] as Spec),
  ...["datetimerange", "datetime", "daterange", "timerange", "time", "date"].map(
    (field) => [createKeywordRegex(field), "FIELDDATETIME"] as Spec,
  ),
  // --------------------------------------
  // Identifier
  [/^\$\w+/, "FIELDCUSTOM"],

  // --------------------------------------
  // Numbers:
  [/^\d+/, "NUMBER"],

  // --------------------------------------
  // Double quoted String:
  [/^"[^"]*"/, "STRING"],

  // --------------------------------------
  // Single quoted String:
  [/^'[^']*'/, "STRING"],

  // --------------------------------------
  // Values by Keyword:
  [createKeywordRegex("NaN"), "NAN"],
  [createKeywordRegex("FALSE"), "FALSE"],
  [createKeywordRegex("TRUE"), "TRUE"],
  [createKeywordRegex("NULL"), "NULL"],
  [createKeywordRegex("UNDEFINED"), "UNDEFINED"],
];

/**
 * Tokenizer class
 * Lazily pulls a token from a stream.
 */
export class Tokenizer {
  public syntax: string;
  public cursor: number;

  public currentLine: number;
  public currentColumn: number;

  /**
   * Initializes the string.
   */
  constructor(string: string) {
    this.syntax = string;
    this.cursor = 0; // track the position of each character
    this.currentLine = 1;
    this.currentColumn = 0;
  }
  /**
   * Whether the tokenizer reached EOF.
   */
  isEOF() {
    return this.cursor === this.syntax.length;
  }
  /**
   * Whether we still have more tokens.
   */
  hasMoreTokens() {
    return this.cursor < this.syntax.length;
  }
  /**
   * Obtains next token.
   */
  getNextToken(): Token | null {
    if (!this.hasMoreTokens()) {
      return null;
    }
    const string = this.syntax.slice(this.cursor);

    for (const [regexp, tokenType] of Specs) {
      const tokenValue = this._match(regexp, string);

      // Couldn't match this rule, continue.
      if (tokenValue === null) {
        continue;
      }

      // Should skip this null token because could be a whitespace or something else
      if (tokenType === null) {
        return this.getNextToken();
      }

      // We return the token
      return {
        type: tokenType,
        value: tokenValue,
      };
    }

    throw new SyntaxError(
      `Unexpected token: "${string[0]}" at ${this.currentLine}:${this.currentColumn}`,
    );
  }

  /**
   * Matches a token for a regular expression.
   */
  _match(regexp: RegExp, string: string) {
    const matched = regexp.exec(string);

    if (matched === null) {
      return null;
    }

    this.cursor += matched[0].length;

    if (regexp.source === "^\\n" && matched !== null) {
      this.currentLine++;
      this.currentColumn = 0;
    }

    this.currentColumn += matched[0].length;

    return matched[0];
  }
}



================================================
FILE: packages/language/src/__tests__/capitalized-syntax.test.ts
================================================
import parser, { defineForm } from "../";

describe("Used with Capitalized syntax", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`Formkl {
      Has {
        Text;
        "Another" Text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
              {
                type: "text",
                label: "Another",
                key: "another",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`Formkl {
      Includes {
        Text;
        "Another" Text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
              {
                type: "text",
                label: "Another",
                key: "another",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should show syntax error correctly", () => {
    expect(() => {
      parser.parse(`formkl "Your Formkl example" "This form is generated by the formkl adapter" {
				multiple "Work Experience" has {
					require text;
				}
				"Personal Information" as {
					text;
					multiple paragraph;
					multiple text as "something";
				}
			}`);
    }).toThrowError(/Unexpected token: "as" at 5:30, expected: "HAS"/);
  });
});



================================================
FILE: packages/language/src/__tests__/field-custom.test.ts
================================================
import parser, { defineForm } from "..";

describe("Required field", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        require $something;
        require multiple $other;
        "Not required" $another;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "$something",
                label: "Something",
                key: "something",
                required: true,
              },
              {
                type: "$other",
                label: "Other",
                key: "other",
                required: true,
                multiple: true,
              },
              {
                type: "$another",
                label: "Not required",
                key: "not-required",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should throw syntax error for unsupported field", () => {
    expect(() => {
      parser.parse(`formkl {
				has {
					require something;
				}
			}`);
    }).toThrowError(/Unexpected token/g);
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "$something",
                label: "Something",
                key: "something",
                required: true,
              },
              {
                type: "$other",
                label: "Other",
                key: "other",
                required: true,
                multiple: true,
              },
              {
                type: "$another",
                label: "Not required",
                key: "not-required",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		require "Something" $something;
		require multiple "Other" $other;
		"Not required" $another;
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/field-multiple-responses.test.ts
================================================
import parser, { defineForm } from "../";

describe("Field with multiple responses support", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        multiple text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
                multiple: true,
              },
            ],
          },
        ],
      }),
    );
  });

  it("should parse the form syntax correctly with multiple required fields", () => {
    const result = parser.parse(`formkl {
      has {
        require multiple text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
                required: true,
                multiple: true,
              },
            ],
          },
        ],
      }),
    );
  });

  it("should parse the form syntax correctly with multiple required fields", () => {
    const result = parser.parse(`formkl {
      has {
        require multiple number;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "number",
                label: "Number",
                key: "number",
                required: true,
                multiple: true,
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the formkl object correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
                required: true,
                multiple: true,
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(
      `formkl {
	has {
		require multiple text;
	}
}`,
    );
  });
});



================================================
FILE: packages/language/src/__tests__/field-required.test.ts
================================================
import parser, { defineForm } from "../";

describe("Required field", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        require paragraph;
        "Not required" text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "paragraph",
                label: "Paragraph",
                key: "paragraph",
                required: true,
              },
              {
                type: "text",
                label: "Not required",
                key: "not-required",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
                required: true,
              },
              {
                type: "text",
                label: "Not required",
                key: "not-required",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		require text;
		"Not required" text;
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/field-validation-with-keyword-value.test.ts
================================================
import parser, { defineForm } from "../";

describe("Field validation using keyword value like null, undefined, NaN", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
			has {
				text valid(== null);
				"Test with OR" text valid(> 5 or == NaN or has "Keyword");
				"Test with AND" text valid(> 5 and == undefined and has "Keyword");
				"Test with Both" text valid(> 5 or == null and has "Keyword");
			}
		}`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
                validation: {
                  logic: {
                    $eq: null,
                  },
                },
              },
              {
                type: "text",
                label: "Test with OR",
                key: "test-with-or",
                validation: {
                  logic: {
                    $or: [
                      {
                        $gt: 5,
                      },
                      {
                        $eq: NaN,
                      },
                      {
                        $has: "Keyword",
                      },
                    ],
                  },
                },
              },
              {
                type: "text",
                label: "Test with AND",
                key: "test-with-and",
                validation: {
                  logic: {
                    $and: [
                      {
                        $gt: 5,
                      },
                      {
                        $eq: undefined,
                      },
                      {
                        $has: "Keyword",
                      },
                    ],
                  },
                },
              },
              {
                type: "text",
                label: "Test with Both",
                key: "test-with-both",
                validation: {
                  logic: {
                    $or: [
                      {
                        $gt: 5,
                      },
                      {
                        $and: [
                          {
                            $eq: null,
                          },
                          {
                            $has: "Keyword",
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the formkl object correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
                validation: {
                  logic: {
                    $eq: null,
                  },
                },
              },
              {
                type: "text",
                label: "Test with OR",
                key: "test-with-or",
                validation: {
                  logic: {
                    $or: [
                      {
                        $gt: 5,
                      },
                      {
                        $eq: NaN,
                      },
                      {
                        $has: "Keyword",
                      },
                    ],
                  },
                },
              },
              {
                type: "text",
                label: "Test with AND",
                key: "test-with-and",
                validation: {
                  logic: {
                    $and: [
                      {
                        $gt: 5,
                      },
                      {
                        $eq: undefined,
                      },
                      {
                        $has: "Keyword",
                      },
                    ],
                  },
                },
              },
              {
                type: "text",
                label: "Test with Both",
                key: "test-with-both",
                validation: {
                  logic: {
                    $or: [
                      {
                        $gt: 5,
                      },
                      {
                        $and: [
                          {
                            $eq: null,
                          },
                          {
                            $has: "Keyword",
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		text valid(== null);
		"Test with OR" text valid(> 5 or == NaN or has "Keyword");
		"Test with AND" text valid(> 5 and == undefined and has "Keyword");
		"Test with Both" text valid(> 5 or == null and has "Keyword");
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/field-with-alias.test.ts
================================================
import parser, { defineForm } from "../";

describe("Field with alias (Custom key)", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        text as "custom-key";
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "custom-key",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "custom-key",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		text as "custom-key";
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/field-with-label.test.ts
================================================
import parser, { defineForm } from "../";

describe("Field with label", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        "Some field" text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Some field",
                key: "some-field",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Some field",
                key: "some-field",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		"Some field" text;
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/field-with-logic-validation.test.ts
================================================
import parser, { defineForm } from "../";

describe("Field with use of validation", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        text valid(> 5);
        "Test with OR" text valid(> 5 or == "Some value" or has "Keyword");
        "Test with AND" paragraph valid(> 5 and == "Some value" and has "Keyword");
        "Test with Both" text valid(> 5 or == "Some value" and has "Keyword");
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
                validation: {
                  logic: {
                    $gt: 5,
                  },
                },
              },
              {
                type: "text",
                label: "Test with OR",
                key: "test-with-or",
                validation: {
                  logic: {
                    $or: [
                      {
                        $gt: 5,
                      },
                      {
                        $eq: "Some value",
                      },
                      {
                        $has: "Keyword",
                      },
                    ],
                  },
                },
              },
              {
                type: "paragraph",
                label: "Test with AND",
                key: "test-with-and",
                validation: {
                  logic: {
                    $and: [
                      {
                        $gt: 5,
                      },
                      {
                        $eq: "Some value",
                      },
                      {
                        $has: "Keyword",
                      },
                    ],
                  },
                },
              },
              {
                type: "text",
                label: "Test with Both",
                key: "test-with-both",
                validation: {
                  logic: {
                    $or: [
                      {
                        $gt: 5,
                      },
                      {
                        $and: [
                          {
                            $eq: "Some value",
                          },
                          {
                            $has: "Keyword",
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
                validation: {
                  logic: {
                    $gt: 5,
                  },
                },
              },
              {
                type: "text",
                label: "Test with OR",
                key: "test-with-or",
                validation: {
                  logic: {
                    $or: [
                      {
                        $gt: 5,
                      },
                      {
                        $eq: "Some value",
                      },
                      {
                        $has: "Keyword",
                      },
                    ],
                  },
                },
              },
              {
                type: "text",
                label: "Test with AND",
                key: "test-with-and",
                validation: {
                  logic: {
                    $and: [
                      {
                        $gt: 5,
                      },
                      {
                        $eq: "Some value",
                      },
                      {
                        $has: "Keyword",
                      },
                    ],
                  },
                },
              },
              {
                type: "text",
                label: "Test with Both",
                key: "test-with-both",
                validation: {
                  logic: {
                    $or: [
                      {
                        $gt: 5,
                      },
                      {
                        $and: [
                          {
                            $eq: "Some value",
                          },
                          {
                            $has: "Keyword",
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		text valid(> 5);
		"Test with OR" text valid(> 5 or == "Some value" or has "Keyword");
		"Test with AND" text valid(> 5 and == "Some value" and has "Keyword");
		"Test with Both" text valid(> 5 or == "Some value" and has "Keyword");
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/field-with-regex-validation.test.ts
================================================
import parser, { defineForm } from "../";

describe("Field with use of validation", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        "Test with regex" text regex("^[0-9]+$");
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Test with regex",
                key: "test-with-regex",
                validation: {
                  regex: /^[0-9]+$/,
                },
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Test with regex",
                key: "test-with-regex",
                validation: {
                  regex: /^[0-9]+$/,
                },
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		"Test with regex" text regex("^[0-9]+$");
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/form-with-description.test.ts
================================================
import parser, { defineForm } from "../";

describe("Form with description", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`
    formkl
      "Form title (Must has)"
      "Form description"
    {
      has {
        text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        title: "Form title (Must has)",
        description: "Form description",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        title: "Form title (Must has)",
        description: "Form description",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl "Form title (Must has)" "Form description" {
	has {
		text;
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/form-with-flattened-model.test.ts
================================================
import parser, { defineForm } from "../";

describe("Form with flatten model", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl flat {
      has {
        text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "flat",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "flat",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl flat {
	has {
		text;
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/form-with-title.test.ts
================================================
import parser, { defineForm } from "../";

describe("Form with title", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl "Form title" {
      has {
        text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        title: "Form title",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        title: "Form title",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl "Form title" {
	has {
		text;
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/minimal.test.ts
================================================
import parser, { defineForm } from "../";

describe("Minimal test", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		text;
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/multiple-field.test.ts
================================================
import parser, { defineForm } from "../";

describe("Multiple fields in a section", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      has {
        text;
        "Another text" text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
              {
                type: "text",
                label: "Another text",
                key: "another-text",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
              {
                type: "text",
                label: "Another text",
                key: "another-text",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	has {
		text;
		"Another text" text;
	}
}`);
  });

  it("should emit syntax error for duplicated field key", () => {
    expect(() =>
      parser.parse(`formkl {
        has {
          text;
          text;
        }
      }`),
    ).toThrowError(/Duplicate field key "text"/);
  });
});



================================================
FILE: packages/language/src/__tests__/multiple-section.test.ts
================================================
import parser, { defineForm } from "../";

describe("Multiple section in one form", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      "Personal information" has {
        text;
      }
      has {
        switch;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            title: "Personal information",
            key: "personal-information",
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
          {
            fields: [
              {
                type: "switch",
                label: "Switch",
                key: "switch",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            title: "Personal information",
            key: "personal-information",
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	"Personal information" has {
		text;
	}
	has {
		text;
	}
}`);
  });

  it("should emit syntax error for duplicated section key", () => {
    expect(() =>
      parser.parse(`formkl {
        has {
          text;
        }
        has {
          text;
        }
      }`),
    ).toThrowError(/Duplicate section key "undefined"/);
  });
});



================================================
FILE: packages/language/src/__tests__/section-multiple-response.test.ts
================================================
import parser, { defineForm } from "../";

describe("Section with multiple responses support", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      multiple has {
        text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            multiple: true,
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            multiple: true,
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	multiple has {
		text;
	}
}`);
  });

  it("should emit syntax error for multiple response field in multiple response section.", () => {
    expect(() =>
      parser.parse(`formkl {
        multiple has {
          multiple text;
          "Test" text;
        }
      }`),
    ).toThrowError(
      "A section with multiple responses cannot have fields that also have multiple responses!",
    );
  });
});



================================================
FILE: packages/language/src/__tests__/section-with-alias.test.ts
================================================
import parser, { defineForm } from "../";

describe("Section with alias", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      "Personal information" has {
        text;
      }
      has {
        text;
      } as "different-section"
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            title: "Personal information",
            key: "personal-information",
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
          {
            key: "different-section",
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            title: "Personal information",
            key: "personal-information",
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
          {
            key: "different-section",
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	"Personal information" has {
		text;
	}
	has {
		text;
	} as "different-section"
}`);
  });

  it("should emit syntax error for duplicated section key", () => {
    expect(() =>
      parser.parse(`formkl {
				has {
					text;
				} as "duplicated-section"
				has {
					text;
				} as "duplicated-section"
			}`),
    ).toThrowError(/Duplicate section key "duplicated-section"/);
  });
});



================================================
FILE: packages/language/src/__tests__/section-with-title.test.ts
================================================
import parser, { defineForm } from "../";

describe("Section with title", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`formkl {
      "Personal Information" has {
        "Fullname" text;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            title: "Personal Information",
            key: "personal-information",
            fields: [
              {
                type: "text",
                label: "Fullname",
                key: "fullname",
              },
            ],
          },
        ],
      }),
    );
  });

  it("should stringify the form syntax correctly", () => {
    const result = parser.stringify(
      defineForm({
        model: "base",
        sections: [
          {
            title: "Personal Information",
            key: "personal-information",
            fields: [
              {
                type: "text",
                label: "Fullname",
                key: "fullname",
              },
            ],
          },
        ],
      }),
    );

    expect(result).toBe(`formkl {
	"Personal Information" has {
		"Fullname" text;
	}
}`);
  });
});



================================================
FILE: packages/language/src/__tests__/uppercase-syntax.test.ts
================================================
import parser, { defineForm } from "../";

describe("Used with UPPERCASE syntax", () => {
  it("should parse the form syntax correctly", () => {
    const result = parser.parse(`FORMKL {
      HAS {
        TEXT;
        "Another" TEXT;
      }
    }`);

    expect(result).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
              {
                type: "text",
                label: "Another",
                key: "another",
              },
            ],
          },
        ],
      }),
    );
  });
});



================================================
FILE: packages/language/src/types/index.ts
================================================
export * from "./token.type";
export * from "./spec.type";



================================================
FILE: packages/language/src/types/spec.type.ts
================================================
export type Spec = [RegExp, string | null];



================================================
FILE: packages/language/src/types/token.type.ts
================================================
export type Token = {
  type: string | null;
  value: string | number;
};



================================================
FILE: packages/language/src/utils/capitalize.ts
================================================
export const capitalize = (str: string) =>
  String(str).toLowerCase().charAt(0).toUpperCase() + String(str).toLowerCase().slice(1);



================================================
FILE: packages/language/src/utils/createKeywordRegex.ts
================================================
export const createKeywordRegex = (keyword: string) => {
  return new RegExp(
    `^\\b(${[
      keyword,
      keyword.toLowerCase(),
      keyword.toUpperCase(),
      keyword.toLowerCase().charAt(0).toUpperCase() + keyword.toLowerCase().slice(1),
    ].join("|")})\\b`,
  );
};



================================================
FILE: packages/language/src/utils/kebabCase.ts
================================================
export const kebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};



================================================
FILE: packages/shared/README.md
================================================
# Formkl - Form marKup Language

Formkl (Form marKup Language) is an open-source DSL (Domain-Specific Language) to define and create form schema. It is designed to be simple, consistent and highly readable as natural language.

## Getting Started

Please follow the documentation at [formkl.org](https://formkl.org)!

View sandbox: [sandbox.formkl.org](https://sandbox.formkl.org)

## Contribution

Please make sure to read the [Contributing Guide](https://formkl.org/learning/contribution-guide.html) before making a pull request.

Thank you to all the people who already contributed to the Formkl - Form marKup Language project!

<a href="https://github.com/imrim12/formkl/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=imrim12/formkl" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Nguyen Huu Nguyen Y



================================================
FILE: packages/shared/LICENSE
================================================
MIT License

Copyright (c) 2022-PRESENT thecodeorigin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



================================================
FILE: packages/shared/package.json
================================================
{
	"name": "@formkl/shared",
	"version": "0.2.0",
	"type": "module",
	"main": "./src/index.ts",
	"scripts": {
		"typecheck": "tsc --noEmit"
	},
	"devDependencies": {
		"@vitest/ui": "^0.34.6",
		"typescript": "^5.2.2",
		"vitest": "^0.34.6"
	}
}


================================================
FILE: packages/shared/tsconfig.json
================================================
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist",
    "types": ["vitest/globals"]
  },
  "include": ["./**/*.ts", "./**/*.tsx", "./**/*.vue"],
  "exclude": ["./node_modules", "./dist"]
}



================================================
FILE: packages/shared/.npmignore
================================================
./node_modules



================================================
FILE: packages/shared/src/index.ts
================================================
export * from "./keys";
export * from "./theme";
export * from "./validator";
export * from "./types";
export * from "./utils";



================================================
FILE: packages/shared/src/__tests__/validate-logic-and-n-or.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const result = isValueValidated("test something with and", {
      logic: {
        $or: [
          {
            $has: "something",
          },
          {
            $and: [
              {
                $gt: 10,
              },
              {
                $lt: 15,
              },
            ],
          },
        ],
      },
    });

    expect(result).toBe(true);
  });
});



================================================
FILE: packages/shared/src/__tests__/validate-logic-and.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const result = isValueValidated(11, {
      logic: {
        $and: [
          {
            $gt: 10,
          },
          {
            $lt: 15,
          },
        ],
      },
    });

    expect(result).toBe(true);
  });

  it("should return false", () => {
    const result = isValueValidated(25, {
      logic: {
        $and: [
          {
            $gt: 10,
          },
          {
            $lt: 15,
          },
        ],
      },
    });

    expect(result).toBe(false);
  });

  it("should return true", () => {
    const result = isValueValidated(12, {
      logic: {
        $and: [
          {
            $gt: 10,
          },
          {
            $lt: 15,
          },
        ],
      },
    });

    expect(result).toBe(true);
  });
});



================================================
FILE: packages/shared/src/__tests__/validate-logic-gt.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const result = isValueValidated("test something long", {
      logic: {
        $gt: 5,
      },
    });

    expect(result).toBe(true);
  });

  it("should return true", () => {
    const result = isValueValidated(999, {
      logic: {
        $gt: 5,
      },
    });

    expect(result).toBe(true);
  });
});



================================================
FILE: packages/shared/src/__tests__/validate-logic-lt.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return false", () => {
    const result = isValueValidated("test something long", {
      logic: {
        $lt: 5,
      },
    });

    expect(result).toBe(false);
  });

  it("should return false", () => {
    const result = isValueValidated(6, {
      logic: {
        $lt: 5,
      },
    });

    expect(result).toBe(false);
  });

  it("should return true", () => {
    const result = isValueValidated(2, {
      logic: {
        $lt: 5,
      },
    });

    expect(result).toBe(true);
  });
});



================================================
FILE: packages/shared/src/__tests__/validate-logic-n-regex.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return false", () => {
    const result = isValueValidated("test something longer", {
      regex: /test/,
      logic: {
        $lt: 5,
      },
    });

    expect(result).toBe(false);
  });
});



================================================
FILE: packages/shared/src/__tests__/validate-logic-or.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const result = isValueValidated("test something with or", {
      logic: {
        $or: [
          {
            $gt: 10,
          },
          {
            $has: "something",
          },
        ],
      },
    });

    expect(result).toBe(true);
  });
});



================================================
FILE: packages/shared/src/__tests__/validate-regex.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const result = isValueValidated("test", {
      regex: /test/,
    });

    expect(result).toBe(true);
  });

  it("should return false", () => {
    const result = isValueValidated("test", {
      regex: /different/,
    });

    expect(result).toBe(false);
  });
});



================================================
FILE: packages/shared/src/__tests__/with-parser/validate-logic-and-n-or.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

import parser from "../../../../language";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(has "something" or > 10 and < 15);
      }
    }`);

    const result = isValueValidated(
      "test something with and & or",
      form.sections[0].fields[0].validation,
    );

    expect(result).toBe(true);
  });
});



================================================
FILE: packages/shared/src/__tests__/with-parser/validate-logic-and.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

import parser from "../../../../language";

describe("Test recursive validator", () => {
  it("should return false", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(> 10 and < 15);
      }
    }`);

    const result = isValueValidated(
      "test something with and",
      form.sections[0].fields[0].validation,
    );

    expect(result).toBe(false);
  });

  it("should return true", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(> 10 and < 15);
      }
    }`);

    const result = isValueValidated(11, form.sections[0].fields[0].validation);

    expect(result).toBe(true);
  });

  it("should return false", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(> 10 and < 15);
      }
    }`);

    const result = isValueValidated(25, form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });

  it("should return false", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(> 10 and < 15);
      }
    }`);

    const result = isValueValidated(2, form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });
});



================================================
FILE: packages/shared/src/__tests__/with-parser/validate-logic-gt.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

import parser from "../../../../language";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(> 5);
      }
    }`);

    const result = isValueValidated("test something long", form.sections[0].fields[0].validation);

    expect(result).toBe(true);
  });

  it("should return true", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(> 5);
      }
    }`);

    const result = isValueValidated(10, form.sections[0].fields[0].validation);

    expect(result).toBe(true);
  });

  it("should return false", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(> 5);
      }
    }`);

    const result = isValueValidated(2, form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });
});



================================================
FILE: packages/shared/src/__tests__/with-parser/validate-logic-lt.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

import parser from "../../../../language";

describe("Test recursive validator", () => {
  it("should return false", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(< 5);
      }
    }`);

    const result = isValueValidated("test something long", form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });

  it("should return false", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(< 5);
      }
    }`);

    const result = isValueValidated(33, form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });

  it("should return true", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(< 5);
      }
    }`);

    const result = isValueValidated(2, form.sections[0].fields[0].validation);

    expect(result).toBe(true);
  });
});



================================================
FILE: packages/shared/src/__tests__/with-parser/validate-logic-n-regex.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

import parser from "../../../../language";

describe("Test logic and regex", () => {
  it("should return false", () => {
    const form = parser.parse(`formkl {
      has {
        text regex("test") valid(< 5);
      }
    }`);

    const result = isValueValidated("test something longer", form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });

  it("should return false", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(< 5) regex("test");
      }
    }`);

    const result = isValueValidated("te...", form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });
});



================================================
FILE: packages/shared/src/__tests__/with-parser/validate-logic-or.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

import parser from "../../../../language";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const form = parser.parse(`formkl {
      has {
        text valid(> 10 or has "something");
      }
    }`);

    const result = isValueValidated(
      "test something with or",
      form.sections[0].fields[0].validation,
    );

    expect(result).toBe(true);
  });
});



================================================
FILE: packages/shared/src/__tests__/with-parser/validate-regex.test.ts
================================================
import { isValueValidated } from "@formkl/shared";

import parser from "../../../../language";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const form = parser.parse(`formkl {
      has {
        text regex("test");
      }
    }`);

    const result = isValueValidated("test", form.sections[0].fields[0].validation);

    expect(result).toBe(true);
  });

  it("should return false", () => {
    const form = parser.parse(`formkl {
      has {
        text regex("different");
      }
    }`);

    const result = isValueValidated("test", form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });
});



================================================
FILE: packages/shared/src/keys/formkl.ts
================================================
export const formklInjectionKey = Symbol("formklInjectionKey");



================================================
FILE: packages/shared/src/keys/http.ts
================================================
export const httpInjectionKey = Symbol("http");



================================================
FILE: packages/shared/src/keys/index.ts
================================================
export * from "./formkl";
export * from "./http";
export * from "./instance";
export * from "./model";



================================================
FILE: packages/shared/src/keys/instance.ts
================================================
export const instanceInjectionKey = Symbol("instanceInjectionKey");



================================================
FILE: packages/shared/src/keys/model.ts
================================================
export const modelInjectionKey = Symbol("modelInjectionKey");



================================================
FILE: packages/shared/src/theme/index.ts
================================================
export interface Theme<GenericNode = any, GenericRule = any> {
  vNodeLayout?: GenericNode;
  VNodeFormWrapper?: GenericNode;
  vNodeFieldWrapper?: GenericNode;
  vNodeFields: {
    [key: string]: GenericNode;
  };
  vNodeComponents?: {
    [key: string]: GenericNode;
  };
  validator?: (
    state: {
      fieldValue: any;
      fieldPath: string;
      formValue: any;
    },
    rules: Array<GenericRule>,
    resolver: (...args: Array<any>) => void,
  ) => boolean;
}



================================================
FILE: packages/shared/src/types/field-custom.interface.ts
================================================
import { Validation } from "./validation.interface";

export interface FieldCustom {
  type: string;
  label: string;
  key: string;
  required?: boolean;
  multiple?: boolean;
  maxResponseAllowed?: number;
  validation?: Validation;
}



================================================
FILE: packages/shared/src/types/field-default.interface.ts
================================================
import { FieldTypeDefault } from "./field-default.type";
import { Validation } from "./validation.interface";

export interface FieldDefault {
  type: FieldTypeDefault;
  label: string;
  key: string;
  required?: boolean;
  multiple?: boolean;
  maxResponseAllowed?: number;
  validation?: Validation;
}



================================================
FILE: packages/shared/src/types/field-default.type.ts
================================================
export type FieldTypeDefault =
  | "text"
  | "paragraph"
  | "switch"
  | "number"
  | "date"
  | "time"
  | "datetime"
  | "daterange"
  | "timerange"
  | "datetimerange";



================================================
FILE: packages/shared/src/types/field-selection.interface.ts
================================================
import { FieldTypeSelection } from "./field-selection.type";
import { Validation } from "./validation.interface";

export interface FieldSelection {
  type: FieldTypeSelection;
  label: string;
  key: string;
  options: Array<any>;
  required?: boolean;
  multiple?: boolean;
  maxResponseAllowed?: number;
  fetchDataPath?: string;
  fetchUrl?: string;
  valueKey?: string;
  labelKey?: string;
  validation?: Validation;
}



================================================
FILE: packages/shared/src/types/field-selection.type.ts
================================================
export type FieldTypeSelection = "checkbox" | "radio" | "select";



================================================
FILE: packages/shared/src/types/formkl.interface.ts
================================================
import { HttpMethod } from "./http-method.type";
import { ModelType } from "./model.type";
import { Section } from "./section.interface";

export interface Formkl {
  title?: string;
  description?: string;
  model: ModelType;
  method?: HttpMethod;
  endpoint?: string;
  sections: Array<Section>;
}



================================================
FILE: packages/shared/src/types/http-method.type.ts
================================================
export type HttpMethod =
  | "get"
  | "post"
  | "put"
  | "patch"
  | "delete"
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE";



================================================
FILE: packages/shared/src/types/index.ts
================================================
export * from "./field-custom.interface";
export * from "./field-default.interface";
export * from "./field-selection.interface";
export * from "./field-default.type";
export * from "./field-selection.type";
export * from "./formkl.interface";
export * from "./http-method.type";
export * from "./model.type";
export * from "./schema.type";
export * from "./section.interface";
export * from "./validation-logic.interface";
export * from "./validation.interface";



================================================
FILE: packages/shared/src/types/model.type.ts
================================================
export type ModelType = "base" | "flat";



================================================
FILE: packages/shared/src/types/schema.type.ts
================================================
export type Schema = {
  [section: string]:
    | {
        [field: string]: any;
      }
    | Array<{
        [field: string]: any;
      }>
    | {
        [field: string]: Array<any>;
      };
};



================================================
FILE: packages/shared/src/types/section.interface.ts
================================================
import { FieldCustom } from "./field-custom.interface";
import { FieldDefault } from "./field-default.interface";
import { FieldSelection } from "./field-selection.interface";

export interface Section {
  key?: string;
  title?: string;
  multiple?: boolean;
  maxResponseAllowed?: number;
  fields: Array<FieldDefault | FieldSelection | FieldCustom>;
}



================================================
FILE: packages/shared/src/types/validation-logic.interface.ts
================================================
export interface ValidationLogic {
  $gt?: string | number;
  $lt?: string | number;
  $gteq?: string | number;
  $lteq?: string | number;
  $eq?: string | number;
  $has?: string | number;
  $and?: Array<ValidationLogic>;
  $or?: Array<ValidationLogic>;
}



================================================
FILE: packages/shared/src/types/validation.interface.ts
================================================
import { ValidationLogic } from "./validation-logic.interface";

export interface Validation {
  regex?: RegExp;
  logic?: ValidationLogic;
}



================================================
FILE: packages/shared/src/utils/get.ts
================================================
// Lodash implementation of get function to get the value in an object by path
export const get = (obj: any, path: string) => {
  const paths = path.split(".");
  let result = obj;

  for (const p of paths) {
    result = result[p];

    if (!result) {
      break;
    }
  }

  return result;
};



================================================
FILE: packages/shared/src/utils/index.ts
================================================
export * from "./get";
export * from "./isNaNStrict";
export * from "./uniqBy";



================================================
FILE: packages/shared/src/utils/isNaNStrict.ts
================================================
export const isNaNStrict = (value: string | number) =>
  typeof value === "number" || (typeof value === "string" && /^\d+$/g.test(value));



================================================
FILE: packages/shared/src/utils/uniqBy.ts
================================================
export const uniqBy = <T = any>(options: Array<T>, key: string) => {
  const uniqueMap = {};
  const result = [];

  for (const option of options) {
    const existedKey = option[key];

    if (uniqueMap[existedKey]) {
      continue;
    } else {
      uniqueMap[existedKey] = true;

      result.push(option);
    }
  }

  return result;
};



================================================
FILE: packages/shared/src/validator/index.ts
================================================
import { Validation } from "../types";
import { validateLogicOperator } from "./validateLogicOperator";
import { validateRegex } from "./validateRegex";

export const isValueValidated = (value: string | number, validation: Validation): boolean => {
  let isRegexValid = validation.regex !== undefined ? validateRegex(value, validation.regex) : true;
  let isLogicValid =
    validation.logic !== undefined ? validateLogicOperator(value, validation.logic) : true;

  return isRegexValid && isLogicValid;
};

export default { isValueValidated };



================================================
FILE: packages/shared/src/validator/validateLogicAnd.ts
================================================
import { ValidationLogic } from "../types";
import { validateLogicOperator } from "./validateLogicOperator";

export const validateLogicAnd = (
  value: string | number,
  validations: Array<ValidationLogic>,
): boolean => {
  const results = validations.map((validation) => validateLogicOperator(value, validation));

  return results.every((result) => result);
};



================================================
FILE: packages/shared/src/validator/validateLogicOperator.ts
================================================
import { ValidationLogic } from "../types";
import { validateLogicAnd } from "./validateLogicAnd";
import { validateLogicOr } from "./validateLogicOr";

export const validateLogicOperator = (value: string | number, validation: ValidationLogic) => {
  const keys = Object.keys(validation) as Array<keyof ValidationLogic>;
  const key = keys[0];
  const val = validation[key] as string | number;

  return {
    $gt: () => (typeof value === "number" ? value > val : value.length > val),
    $lt: () => (typeof value === "number" ? value < val : value.length < val),
    $gteq: () => (typeof value === "number" ? value >= val : value.length >= val),
    $lteq: () => (typeof value === "number" ? value <= val : value.length <= val),
    $eq: () => value === val,
    $has: () => String(value).includes(val.toString()),
    $and: () => validation.$and && validateLogicAnd(value, validation.$and),
    $or: () => validation.$or && validateLogicOr(value, validation.$or),
  }[key]();
};



================================================
FILE: packages/shared/src/validator/validateLogicOr.ts
================================================
import { ValidationLogic } from "../types";
import { validateLogicOperator } from "./validateLogicOperator";

export const validateLogicOr = (
  value: string | number,
  validations: Array<ValidationLogic>,
): boolean => {
  const results = validations.map((validation) => validateLogicOperator(value, validation));

  return results.some((result) => result);
};



================================================
FILE: packages/shared/src/validator/validateRegex.ts
================================================
export const validateRegex = (value: string | number, regex: RegExp | string) => {
  if (typeof regex === "string") {
    regex = new RegExp(regex);
  }

  return regex.test(value.toString());
};



================================================
FILE: public/sitemap.xml
================================================
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://formkl.org/</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://formkl.org/syntax/form.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://formkl.org/introduction.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://formkl.org/installation/vue.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/installation/react.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/installation/svelte.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/syntax/field.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/syntax/model.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/syntax/validation.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/syntax/multiple.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/contribution-guide.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/core-language.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/adapter-vue.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/adapter-react.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/adapter-svelte.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://formkl.org/learning/editor.html</loc>
  <lastmod>2022-12-31T04:16:54+00:00</lastmod>
  <priority>0.64</priority>
</url>


</urlset>


================================================
FILE: .github/ISSUE_TEMPLATE.md
================================================
# Expected Behavior

Please describe the behavior you are expecting

## Current Behavior

What is the current behavior?

## Failure Information (for bugs)

Please help provide information about the failure if this is a bug. If it is not a bug, please remove the rest of this template.

## Steps to Reproduce

Please provide detailed steps for reproducing the issue.

1. step 1
2. step 2
3. you get it...

## Context

Please provide any relevant information about your setup. This is important in case the issue is not reproducible except for under certain conditions.

* Firmware Version:
* Operating System:
* SDK version:
* Toolchain version:

## Failure Logs

Please include any relevant log snippets or files here.



================================================
FILE: .github/PULL_REQUEST_TEMPLATE.md
================================================
# Description

Please include a summary of the change and which issue is fixed. Please also include relevant motivation and context. List any dependencies that are required for this change.

## Checklist

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] Any dependent changes have been merged and published in downstream modules



================================================
FILE: .github/stale.yml
================================================
# Number of days of inactivity before an issue becomes stale
daysUntilStale: 100
# Number of days of inactivity before a stale issue is closed
daysUntilClose: 7
# Issues with these labels will never be considered stale
exemptLabels:
  - pinned
  - security vulnerability
  - security fix
  - configuration error
  - dependencies
  - bug
  - documentation
  - enhancement
  - releases
# Label to use when marking an issue as stale
staleLabel: wontfix
# Comment to post when marking an issue as stale. Set to `false` to disable
markComment: >
  This issue has been automatically marked as stale because it has not had
  recent activity. It will be closed if no further activity occurs. Thank you
  for your contributions.
# Comment to post when closing a stale issue. Set to `false` to disable
closeComment: true



================================================
FILE: .github/workflows/codeql-analysis.yml
================================================
# For most projects, this workflow file will not need changing; you simply need
# to commit it to your repository.
#
# You may wish to alter this file to override the set of languages analyzed,
# or to provide custom queries or build logic.
#
# ******** NOTE ********
# We have attempted to detect the languages in your repository. Please check
# the `language` matrix defined below to confirm you have the correct set of
# supported CodeQL languages.
#
name: "CodeQL"

on:
  push:
    branches: [ "main" ]
  pull_request:
    # The branches below must be a subset of the branches above
    branches: [ "main" ]
  schedule:
    - cron: '25 14 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    strategy:
      fail-fast: false
      matrix:
        language: [ 'javascript' ]
        # CodeQL supports [ 'cpp', 'csharp', 'go', 'java', 'javascript', 'python', 'ruby' ]
        # Learn more about CodeQL language support at https://aka.ms/codeql-docs/language-support

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    # Initializes the CodeQL tools for scanning.
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v2
      with:
        languages: ${{ matrix.language }}
        # If you wish to specify custom queries, you can do so here or in a config file.
        # By default, queries listed here will override any specified in a config file.
        # Prefix the list here with "+" to use these queries and those in the config file.
        
        # Details on CodeQL's query packs refer to : https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs
        # queries: security-extended,security-and-quality

        
    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
    # If this step fails, then you should remove it and run the build manually (see below)
    - name: Autobuild
      uses: github/codeql-action/autobuild@v2

    # ℹ️ Command-line programs to run using the OS shell.
    # 📚 See https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun

    #   If the Autobuild fails above, remove it and uncomment the following three lines. 
    #   modify them (or add more) to build your code if your project, please refer to the EXAMPLE below for guidance.

    # - run: |
    #   echo "Run, Build Application using script"
    #   ./location_of_script_within_repo/buildscript.sh

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v2
      with:
        category: "/language:${{matrix.language}}"



================================================
FILE: .github/workflows/nx-report.yml
================================================
name: Create Nx Report
on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  main:
    name: Nx Cloud - Main Job
    uses: nrwl/ci/.github/workflows/nx-cloud-main.yml@latest
    with:
      number-of-agents: 3
      init-commands: |
        npx nx-cloud start-ci-run --agent-count=3
      parallel-commands: |
        npx nx-cloud record -- npx nx affected --target=build:all
        npx nx-cloud record -- npx nx affected --target=typecheck
        npx nx-cloud record -- npx nx affected --target=test
      parallel-commands-on-agents: |
        npx nx affected --target=build:all --parallel=3
        npx nx affected --target=typecheck --parallel=3
        npx nx affected --target=test --parallel=3

  agents:
    name: Nx Cloud - Agents
    uses: nrwl/ci/.github/workflows/nx-cloud-agents.yml@latest
    with:
      number-of-agents: 3



================================================
FILE: .husky/commit-msg
================================================
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit ${1}



================================================
FILE: .husky/pre-commit
================================================
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm test



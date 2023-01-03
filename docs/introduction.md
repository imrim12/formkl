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

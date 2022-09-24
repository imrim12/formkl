# Formkl - Form markup language (WORK IN PROGRESS)

First beta can be avaialable by the end of September 2022.

Formkl (Form markup language) is an open-source DSL (Domain-Specific Language) to define and create form schema. It is designed to be simple, consistent and highly readable as natural language.

## Basic example

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
    "Personal Information"includes {
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
  "model": "flat",
  "method": "",
  "endpoint": "",
  "title": "",
  "description": "",
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

## Adapter

### Vue guide

```bash
# install the package
npm install @formkl/vue

# with yarn
yarn add @formkl/vue

# with pnpm
pnpm add @formkl/vue
```

`YourPage.vue`

```html
<template>
  <div>
    <Formkl
      ref="formklRef"
      :formkl="formklSyntax"
      :options="formklOptions"
    />
    <button @click="submit">
      Submit
    </button>
  </div>
</template>
```

```html
<script>
  import { ref } from "vue";
  import { Formkl } from "@formkl/vue";

  export default defineComponent({
    setup() {
      const formklOptions = {
        // ... use formkl default submit method
        // or
        // override the default submit method
        async submitMethod(url, method, model) {
          // process your model, do anything here

          await $axios.request({
            url,
            method,
            data: model,
          });
        },
      };
      const formklRef = ref(); // Vue template ref
      const formklSyntax = `
        formkl flat post("/your/api") {
          "Personal Information"includes {
            "Fullname" text;
            "Bio" paragraph;
          }
        }
      `;

      const submit = () => {
        formklRef.value.submit();
      };

      return {
        formklOptions,
        formklSyntax,
        submit,
      };
    },
  });
</script>
```

### React guide

(coming soon)

## Syntax

### Form Declaration

```bash
# Minimal declaration
formkl {
	"" includes {
		text;
	}
}
```

```bash
# Clear example
formkl flat "Your form title" {
	"Your section" includes {
		text;
		"Another text with label" text;
	}
}
# Or with description
formkl
	"Your form title"
	"Your form description"
{
	"Your section" includes {
		text;
		"Another text with label" text;
	}
}
```

## Form model

There are 2 types of form model: basic and flattened

By default, formkl will use the basic model

```bash
# Basic model declaration
formkl
# or
formkl base
```

The model structure would look like this

```json
{
  "data": [
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
```

If you want to use a flattened model style, you can use the `flat` keyword

```bash
# Flattened model declaration
formkl flat
```

And the model structure would look like this

```json
{
  "fullname": "",
  "bio": ""
}
```

### Field Expression

```bash
["multiple"] ["require"] [LABEL] [FIELD NAME] [VALIDATION];

# Examples:

# Default field, has "Text" as label by default
text;

# With label
"Field with label" text;

# Required field
require "Your name" text;

# Allow multiple responses
multiple "Favourite food" text;

# Allow multiple responses and no empty answer allowed
multiple require "Home Address" text;

# With alias
multiple require "Home Address" text as "address_1";
```

### Field Validation

Formkl support parsing a set of condition with `or` and `and` operators in `valid` conditional expression

```bash
valid([CONDITION]) regex("[REGULAR EXPRESSION STRING]")

# Examples:

"Grade" number valid(< 12 and >= 1);

"Note" paragraph regex("[A-z0-9]");

"Short answer" text regex("[A-z0-9]") valid(< 256);
```

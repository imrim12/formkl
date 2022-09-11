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
  "sections": [
    {
      "title": "Personal Information",
      "key": "personal-information2",
      "fields": [
        {
          "type": "text",
          "label": "Fullname",
          "require": false,
          "key": "fullname"
        },
        {
          "type": "paragraph",
          "label": "Bio",
          "require": false,
          "key": "bio"
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
```

`YourPage.vue`

```html
<template>
  <Formkl v-model="formData">
    {{` formkl { "Personal Information"includes { "Fullname" text; "Bio" paragraph; } } `}}
  </Formkl>
</template>
```

```html
<script>
  import { ref } from "vue";
  import { Formkl } from "@formkl/vue";

  export default defineComponent({
    setup() {
      const formData = ref({});

      return {
        formData,
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
formkl "Your form title" {
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

### Field Expression

```bash
["multiple"] ["require"] [LABEL] [FIELD NAME] [VALIDATION];

# Examples:

text;

"Field with label" text;

require "Your name" text;

multiple "Favourite food" text;

multiple require "Home Address" text;
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

# Formkl - Form markup language (WORK IN PROGRESS)

Formkl (Form markup language) is an open-source DSL (Domain-Specific Language) to define and create form schema. It is designed to be simple, consistent and highly readable as natural language.

## Basic example

Basic signin form with email, password and checkbox fields

```javascript
import { parser } from "formkl";

const yourFormklSyntax = `
  formkl {
    "Signin Form" includes {
      require email;
      require password;
      "Remember me" checkbox;
    }
  }
`;

const parsedForm = parser.parse(yourFormklSyntax);
```

The above formkl will be parsed into

```json
{
  "authentication": {
    "required": false,
    "allows": []
  },
  "layout": null,
  "maxResponses": null,
  "sections": [
    {
      "key": "signin-form",
      "title": "Signin Form",
      "fields": [
        {
          "key": "email",
          "label": "Email",
          "type": "TEXT",
          "validation": {
            "regex": "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
          },
          "required": true
        },
        {
          "key": "password",
          "label": "Password",
          "type": "PASSWORD",
          "validation": null,
          "required": true
        },
        {
          "key": "remember-me",
          "label": "Remember me",
          "type": "CHECKBOX",
          "required": false
        }
      ]
    }
  ]
}
```

This piece of JSON can be rendered into UI using our Formkl Adapter

## Adapter

### Vue guide

This can be re-used across your application.

`Formkl.vue`

```js
import { parser } from "formkl";
import FormklAdapter from "@formkl/vue";

export default defineComponent({
  props: {
    formkl: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { FormklVNode } = FormklAdapter.create({
      form: parser.parse(props.formkl),
      options: {},
    });

    return () => FormklVNode;
  },
});
```

`YourPage.vue`

Now create any form with ease.

```html
<template>
  <Formkl :formkl="formKl" @change="handleFormChange" />
</template>
```

```html
<script>
  export default defineComponent({
    setup() {
      const formKl = `
        formkl {
          "Signin Form" includes {
            require email;
            require password;
            "Remember me" checkbox;
          }
        }
      `;

      const handleFormSubmit = async (payload) => {
        try {
          const response = await axios.post("/api/your-api", payload);
          console.log("Form submitted", response);
        } catch (error) {
          console.log("Form submit error", error);
        }
      };

      return {
        formKl,
        handleFormSubmit,
      };
    },
  });
</script>
```

### React guide

This can be re-used across your application.

`Formkl.jsx`

```jsx
import { parser } from "formkl";
import FormklAdapter from "@formkl/react";

export default ({ formkl }) => {
  const { FormklVNode } = FormklAdapter.create({
    form: parser.parse(formkl),
    options: {},
  });

  return <FormklVNode />;
};
```

`YourPage.jsx`

Now create any form with ease.

```jsx
export default () => {
  const formKl = `
    formkl {
      "Signin Form" includes {
        require email;
        require password;
        "Remember me" checkbox;
      }
    }
  `;

  const handleFormSubmit = async (payload) => {
    try {
      const response = await axios.post("/api/your-api", payload);
      console.log("Form submitted", response);
    } catch (error) {
      console.log("Form submit error", error);
    }
  };

  return <Formkl formkl={formKl} onSubmit={handleFormSubmit} />;
};
```

## Syntax

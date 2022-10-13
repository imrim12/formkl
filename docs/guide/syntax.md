# formkl declarations

formkl is declared with the `formkl` keyword. It is followed by a block of code that contains the form's structure.

- A form can have a title and a description.

`formkl` is declared using the `formkl` keyword. It is an object which contains a list of sections. Each section is a key-value pair where the key is the section name and the value is a list of fields.

## Form declaration

### Minimal form

This is the minimal syntax for a form to be parsed. This form will have no title, description, section title and the field will have a default label as `"Text"`.

```text
formkl {
  "" includes {
    text;
  }
}
```

Or you can specify title, description, section title and field label. **The parser accept breaklines and tabs**, so feel free to rearrange the syntax to your liking.

```text
formkl
  "Your form title"
  "Your form description" {
  "Your section title" includes {
    "Your field label" text;
  }
  "Your 2nd section title" includes {
    "Another field label" paragraph;
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

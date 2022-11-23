# Formkl declarations

formkl is declared with the `formkl` keyword. It is followed by a block of code that contains the form's structure.

- A form can have a title and a description.

`formkl` is declared using the `formkl` keyword. It is an object which contains a list of sections. Each section is a key-value pair where the key is the section name and the value is a list of fields.

## Form declaration

### Minimal form

This is the minimal syntax for a form to be parsed. This form will have no title, description, section title and the field will have a default label as `"Text"`.

```text
formkl {
  includes {
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

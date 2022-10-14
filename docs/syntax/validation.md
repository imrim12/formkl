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

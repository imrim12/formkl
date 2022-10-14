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

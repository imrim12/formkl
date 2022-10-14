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

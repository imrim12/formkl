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

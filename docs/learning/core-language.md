# Core language

FORMKL is a markup language used to annotate form model, sections and fields. It simply contains a set of grammar rules and a parser.

## Parser

Currently, the project use a tool called [Syntax CLI](https://www.npmjs.com/package/syntax-cli) to generate the parser from the BNF grammar. The generated parser can be used to parse the markup into a JSON object for further use.

## Grammar

The grammar is defined in [BNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) and can be found in [`language/src/bnf.js`](https://github.com/formkl/formkl/blob/3543e4553c7812302bdbfa76edaaaf5b904cc6c1/language/src/bnf.js).

An simple example of BNF:

```bash
# BNF is a set of rules that express the possible
# valid cases of a set of keywords (tokens)

Statement =
  Indefinite Subject # a girl, a boy, the spider man
  | Adjective Subject # beautiful girl, awesome boy
  | Indefinite Adjective Subject # a beautiful girl, the amazing spider man

Subject = "girl" | "boy" | "spider man"

Adjective = "beautiful" | "amazing" | "awesome"

Indefinite = "a" | "an" | "the" ;

```

Another simple example for programming language:

```bash

# Accept a full function declaration
#  function foo () {}
#  function foo (a, b) {}
#  function foo (a, b) {
#    var c = a + b;
#    return c;
# }
FunctionDeclaration =
  "function" Identifier "(" ParamList ")" BlockStatement

# Accept a list of parameters recursively or no parameter (null)
ParamList =
  null
  | Param
  | ParamList "," Param

Param = "somethinghere"

# Accept multiple lines of statements and wrapped in {  }
BlockStatement = "{" StatementList "}"

# Accept multiple lines of statements
StatementList =
  null
  | Statement
  | StatementList Statement

```

::: info Please aware that the grammar is over-simplified for the sake of example and is not correct 100%
:::

## Tokenizer

The [Syntax CLI](https://www.npmjs.com/package/syntax-cli) allow us to include the valid tokens for the syntax, this will help us validate the syntax and give a clear SyntaxError messages.

```
SyntaxError: Invalid token { at 12:34.
```

The tokens are defined in [`language/src/enum/token.enum.js`](https://github.com/formkl/formkl/blob/3543e4553c7812302bdbfa76edaaaf5b904cc6c1/language/src/enum/token.enum.js#L1).

## Lexer

The lexer defines what value to be returned when the parser encounter a set of tokens that match some rules. The value will be used for writting the grammar. The lexer is defined in [`language/src/lexer.js`](https://github.com/formkl/formkl/blob/3543e4553c7812302bdbfa76edaaaf5b904cc6c1/language/src/lexer.js#L4)

For examples:

- Return the exact token if it is symbol like `[] () {}` etc.
- Return nothing if the tokens match the comment syntax `//` or `/* */` or `space`, `tabs`, `break line` etc.
- Return the keyword `formkl` when it matches `formkl` or `Formkl` (Like normalize the token)


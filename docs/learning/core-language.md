# Core language

FORMKL is a markup language used to annotate form model, sections and fields. It simply contains a set of grammar rules and a parser.

## Grammar

The grammar is defined in [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form).

An simple example of EBNF:

```bash
# BNF is a set of rules that express the possible
# valid cases of a set of keywords (tokens)

Statement
  = Indefinite Subject # a girl, a boy, the spider man
  | Adjective Subject # beautiful girl, awesome boy
  | Indefinite Adjective Subject # a beautiful girl, the amazing spider man
  ;

Subject
  = "girl"
  | "boy"
  | "spider man"
  ;

Adjective
  = "beautiful"
  | "amazing"
  | "awesome"
  ;

Indefinite
  = "a"
  | "an"
  | "the"
  ;

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
FunctionDeclaration
  = "function" Identifier "(" ParamList ")" BlockStatement
  ;

# Accept a list of parameters recursively or no parameter (null)
ParamList
  = null
  | Param
  | ParamList "," Param
  ;

Param
  = "somethinghere"
  ;

# Accept multiple lines of statements and wrapped in {  }
BlockStatement
  = "{" StatementList "}"
  ;

# Accept multiple lines of statements
StatementList
  = null
  | Statement
  | StatementList Statement
  ;

```

:::
Please aware that the grammar is over-simplified for the sake of example.
:::

## Tokenizer

The Tokenizer allows us to include the valid tokens for the syntax, this will help us validate the syntax and give a clear SyntaxError messages.

```
SyntaxError: Invalid token { at 12:34.
```

The tokens are characters, symbols, keywords, operators, etc. that are used to build the syntax.

## Parser

The parser uses the tokenizer to check for the syntax's grammar and return the parsed value as a usable JSON object.

```typescript
class Parser {
  constructor() {
    // Initialize the tokenizer
    this._tokenizer = new Tokenizer();
  }

  parse(string: string): Formkl {
    // Parse the input string
    return this.FormBlock();
  }

  /**
   * Main entry point.
   *
   * FormBlock
   *  = SectionBlockList
   *  ;
   */
  private FormBlock(): Formkl {}

  /**
   * SectionBlockList
   *  = (SectionBlock)*
   *  ;
   */
  private SectionBlockList(): Section[] {}

  private SectionBlock(): Section {}

  // ...
}
```

::: info Please aware that this code is over-simplified for the sake of example.
:::

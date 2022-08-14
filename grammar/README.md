### Grammar format

_Syntax_ support two main notations to define grammars: _JSON-like_ notation, and _Yacc/Bison-style_ notation.

#### JSON-like notation

JSON-"like" is because it's excented JSON notation, and may include any JavaScript syntax (e.g. quotes may be omitted for properties, can use comments, etc):

```js
/**
 * Basic calculator grammar in JSON notation.
 */

{
  // ---------------------------
  // Lexical grammar.

  lex: {
    rules: [
      [`\\s+`,        `/* skip whitespace */`],
      [`\\d+`,        `return 'NUMBER'`],
      [`\\+`,         `return '+'`],
      [`\\*`,         `return '*'`],
      [`\\(`,         `return '('`],
      [`\\)`,         `return ')'`],
    ],
  },

  // ---------------------------
  // Operators precedence.

  operators: [
    [`left`, `+`],
    [`left`, `*`],
  ],

  // ---------------------------
  // Syntactic grammar.

  bnf: {
    e: [[`e + e`,   `$$ = $1 + $3`],
        [`e * e`,   `$$ = $1 * $3`],
        [`( e )`,   `$$ = $2`],
        [`NUMBER`   `$$ = Number($1)`]],
  }
}
```

As we can see, `lex` defines _lexical grammar_, `bnf` provides _syntactic grammar_, and _operators_ may defines [associativity and precedence](#working-with-precedence-and-associativity) of needed symbols. List of available [grammar properties](#grammar-properties) is specified below.

#### Grammar properties

Below is the list of available grammar properties.

- `lex` - [lexical grammar](#lexical-grammar-and-tokenizer).
- `bnf` - syntactic grammar in BNF format.
- `operators` - associativity and precedence of needed grammar symbols (usually operators, but not necessarily). Can be used to resolve "shift-reduce" conflicts in cases like _"dangling-else"_ problem, math-operators, etc.
- `moduleInclude` -- the code which is included "as is" into the generated parser module. Usually used to require or define inline classes for AST nodes, and any additional code.
- `startSymbol` - starting symbol (if not specified, it's inferred from the LHS of the first rule).
- `tokens` - explicit list of tokens (if not specified, it's automatically inferred from the grammar).

### Lexical grammar and tokenizer

Tokenizers use formalism of _regular grammars_ in order to split a string into a list of _tokens_. One of the convenient implementations of the regular grammars is _regular expressions_.

A basic format of a lexical grammar should provide at least `rules` section:

```js
{
  rules: [
    [`\\d+`,    `return 'NUMBER'`],
    [`"[^"]*"`, `yytext = yytext.slice(1, -1); return 'STRING';`],
    ...
  ],
}
```

The first element of a lexical rule is the _regexp pattern_ to match, and the second element is the corresponding token handler, which should return _type_ of the matched token.

Handlers may access the matched text as `yytext` variable, which is also can be mutated -- in the example above for the `STRING` token we modify matched text to be the quoted value, stripping the quotes themselves.

A handler can be arbitrary complex function, and in addition may return _multiple tokens_, using an array (see also [this example](https://github.com/DmitrySoshnikov/syntax/blob/master/examples/indent-explicit.g.js#L136-L147)):

```
// Return 3 tokens for one matched value.
return ['DEDENT', 'DEDENT', 'NL'];
```

Lexical grammar may also define [macros](https://github.com/DmitrySoshnikov/syntax/blob/ca8f0c86401c6c18cea1885ba602e76d62855d63/examples/json.grammar.js#L25) field -- variables which can be used later in rules, and also [start conditions](#start-conditions-of-lex-rules-and-tokenizer-states) for _tokenizer states_, which are discussed below.

```js
{
  macros: {
    id: `[a-zA-Z0-9_]`,
  },

  rules: [
    [`{id}+`,    `return 'IDENTIFIER'`],
    ...
  ],
}
```

#### Getting list of tokens

It is possible to analyze just a list of tokens either from the `lex` part of the `--grammar`, or from a standalone `--lex` file.

Example:

```js
// ~/lang.lex

{
  rules: [
    [`\\s+`,       `/* skip whitespace */`],
    [`\\d+`,       `return 'NUMBER'`],
    [`(\\+|\\-)`,  `return 'ADDITIVE_OPERATOR'`],
  ],
}
```

Extract the tokens:

```
./bin/syntax --lex ~/lang.lex --tokenize -p '2 + 5'
```

The result:

```js
[
  {
    type: "NUMBER",
    value: "2",
    startOffset: 0,
    endOffset: 1,
    startLine: 1,
    endLine: 1,
    startColumn: 0,
    endColumn: 1,
  },
  {
    type: "ADDITIVE_OPERATOR",
    value: "+",
    startOffset: 2,
    endOffset: 3,
    startLine: 1,
    endLine: 1,
    startColumn: 2,
    endColumn: 3,
  },
  {
    type: "NUMBER",
    value: "5",
    startOffset: 4,
    endOffset: 5,
    startLine: 1,
    endLine: 1,
    startColumn: 4,
    endColumn: 5,
  },
];
```

As you can see, along with the type, and the value, a tokenizer also captures token locations: absolute offsets, line, and column numbers.

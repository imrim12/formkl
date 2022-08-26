@{%
const lexer = require("./tokenizer.js");
const { tokenStart, tokenEnd, convertToken, convertTokenId } = require("./utils.js");
%}

# Pass your lexer with @lexer:
@lexer lexer

Section -> FieldValidatedSet

FieldValidatedSet -> FieldValidated
								| FieldValidated __ FieldValidatedSet
								| FieldValidated __ BR FieldValidatedSet

FieldValidated -> FIELD EOL
								| Label FIELD EOL
								| REQUIRE __ FIELD EOL
								| REQUIRE __ Label FIELD EOL


Label -> STRING __

__ -> %TkWhitespace:+

_ -> %TkWhitespace:*

FIELD -> %TkField {% convertTokenId %}

REQUIRE -> %TkRequire {% convertTokenId %}

EOL -> %TkSemi  {% convertTokenId %}

BR -> %TkLineBreak  {% convertTokenId %}

STRING -> %TkLitteralString {% convertTokenId %}

NUMBER -> %TkLitteralNumber {% convertTokenId %}

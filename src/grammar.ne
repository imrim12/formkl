@{%
	const lexer = require("./formkl.tokenizer.js");
%}

# Pass your lexer with @lexer:
@lexer lexer

Field -> FieldDefault EndOfLine
		| FieldValidated EndOfLine
		| SupportConstraint _ FieldDefault EndOfLine
		| SupportConstraint _ FieldValidated EndOfLine

FieldDefault -> %TkFieldDefault
				| FieldCustom %TkFieldDefault

FieldValidated -> %TkFieldValidated
				| %TkFieldValidatedPhone
				| FieldCustom %TkFieldValidated
				| FieldCustom %TkFieldValidatedPhone

FieldCustom -> CustomLabel _

SupportConstraint -> %TkSupportConstraint

CustomLabel -> STRING

EndOfLine -> %TkEndOfLine

__ -> %TkWhitespace:*

_ -> %TkWhitespace

STRING -> %TkLitteralString

NUMBER -> %TkLitteralNumber

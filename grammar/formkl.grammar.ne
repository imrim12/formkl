@{%
	const lexer = require("./formkl.tokenizer.js");
%}

# Pass your lexer with @lexer:
@lexer lexer

Field -> FieldDefault
		| FieldValidated
		| SupportConstraint _ FieldDefault
		| SupportConstraint _ FieldValidated

FieldDefault -> %TkFieldDefault
				| FieldCustom %TkFieldDefault

FieldValidated -> %TkFieldValidated
				| %TkFieldValidatedPhone
				| FieldCustom %TkFieldValidated
				| FieldCustom %TkFieldValidatedPhone

FieldCustom -> CustomLabel _

SupportConstraint -> %TkSupportConstraint

CustomLabel -> STRING

_ -> %TkWhitespace

STRING -> %TkLitteralString

NUMBER -> %TkLitteralNumber

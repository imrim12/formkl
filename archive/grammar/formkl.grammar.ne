@{%
	const moo = require("moo");

	const lexer = moo.compile({
		Whitespace: /[ \t]+/,
		LitteralString: /"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/,
		LitteralNumber: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,
		SupportConstraint: /(?:require)/,
		FieldValidatedPhone: {
			match: /(?:US|VN)\sphone/
		},
		FieldValidated: {
			match: /(?:email|zip|age)/,
		},
		FieldDefault: {
			match: /(?:text|paragraph|number|checkbox|radio|dropdown)/,
		},
	});
%}

# Pass your lexer with @lexer:
@lexer lexer

Field -> FieldDefault
		| FieldValidated
		| SupportConstraint _ FieldDefault
		| SupportConstraint _ FieldValidated

FieldDefault -> %FieldDefault
				| FieldCustom %FieldDefault

FieldValidated -> %FieldValidated
				| %FieldValidatedPhone
				| FieldCustom %FieldValidated
				| FieldCustom %FieldValidatedPhone

FieldCustom -> null | CustomLabel _

SupportConstraint -> %SupportConstraint

CustomLabel -> STRING

__ -> %Whitespace:+
_ -> %Whitespace:*

STRING -> %LitteralString

NUMBER -> %LitteralNumber

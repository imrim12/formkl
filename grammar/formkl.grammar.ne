@{%
	const moo = require("moo");

	const lexer = moo.compile({
		WHITESPACE: /[ \t]+/,
		LITERALSTRING: /"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/,
		LITERALNUMBER: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,
		SUPPORTCONSTRAINT: /(?:require)/,
		FIELDVALIDATEDPHONE: {
			match: /(?:US|VN)\sphone/
		},
		FIELDVALIDATED: {
			match: /(?:email|zip|age)/,
		},
		FIELDDEFAULT: {
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

FieldDefault -> %FIELDDEFAULT
				| FieldCustom %FIELDDEFAULT

FieldValidated -> %FIELDVALIDATED
				| %FIELDVALIDATEDPHONE
				| FieldCustom %FIELDVALIDATED
				| FieldCustom %FIELDVALIDATEDPHONE

FieldCustom -> null | CustomLabel _

SupportConstraint -> %SUPPORTCONSTRAINT

CustomLabel -> STRING

__ -> %WHITESPACE:+
_ -> %WHITESPACE:*

STRING -> %LITERALSTRING

NUMBER -> %LITERALNUMBER

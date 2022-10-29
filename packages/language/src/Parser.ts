import { Formkl, Section, FieldDefault, FieldSelection, HttpMethod } from "@formkl/shared";
import { Tokenizer } from "./Tokenizer";
import { Token } from "./types";

import slugify from "slugify";

export class Parser {
  private _string: string;
  private _tokenizer: Tokenizer;
  private _lookahead: Token | null;

  /**
   * Initializes the parser.
   */
  constructor() {
    this._string = "";
    this._tokenizer = new Tokenizer("");
    this._lookahead = null;
  }

  /**
   * Parses a string into an AST
   */
  parse(string: string): Formkl {
    this._string = "";
    this._lookahead = null;

    this._string = string;
    this._tokenizer = new Tokenizer(this._string);

    // Prime the tokenizer to obtain the first
    // token which is our lookahead. The lookahead is
    // used for predective parsing.

    this._lookahead = this._tokenizer.getNextToken();

    // Parse recursively starting from the main
    // entry point, the Program:
    return this.FormBlock();
  }

  /**
   * Main entry point.
   *
   * FormBlock
   *  : SectionBlockList
   *  ;
   */
  private FormBlock(): Formkl {
    const form: Formkl = {
      model: "base",
      sections: [],
    };

    this._eat("FORMKL");

    if (this._lookahead?.type === "STRING") {
      form.title = this.StringLiteral();
    }

    if (this._lookahead?.type === "STRING") {
      form.description = this.StringLiteral();
    }

    if (this._lookahead?.type === "FLAT") {
      this._eat("FLAT");
      form.model = "flat";
    } else if (this._lookahead?.type === "BASE") {
      this._eat("BASE");
      form.model = "base";
    } else {
      form.model = "base";
    }

    if (this._lookahead?.type === "HTTPMETHOD") {
      form.method = this._eat("HTTPMETHOD").value as HttpMethod;
      this._eat("(");
      form.endpoint = this.StringLiteral();
      this._eat(")");
    }

    this._eat("{");

    const sections = this.SectionBlockList();

    if (sections.length > 1) {
      const keySet = new Set();
      sections.forEach((section) => {
        if (keySet.has(section.key)) {
          throw new SyntaxError(
            `Duplicate section key "${section.key}", this will make the your schema looks confusing! Please use different aliases if your sections have the same title.`,
          );
        } else {
          keySet.add(section.key);
        }
      });
    }

    Object.assign(form, { sections });

    this._eat("}");

    return form;
  }

  /**
   * SectionBlockList
   *  : (SectionBlock)*
   *  ;
   */
  private SectionBlockList(stopLookAhead = "}") {
    const sectionList = [this.SectionBlock()];
    while (this._lookahead != null && this._lookahead.type !== stopLookAhead) {
      sectionList.push(this.SectionBlock());
    }
    return sectionList;
  }

  /**
   * Section
   *  : FieldStatementList
   *  ;
   */
  private SectionBlock(): Section {
    const section: Section = {
      key: "",
      fields: [],
    };

    if (this._lookahead?.type === "NUMBER") {
      section.maxResponseAllowed = this.NumericLiteral();
      section.multiple = true;
    } else if (this._lookahead?.type === "MULTIPLE") {
      this._eat("MULTIPLE");
      section.multiple = true;
    }

    if (this._lookahead?.type === "STRING") {
      section.title = this.StringLiteral();
      section.key = slugify(section.title).toLowerCase();
    }

    this._eat("INCLUDES");
    this._eat("{");
    const fields = this.FieldStatementList();
    this._eat("}");

    if (this._lookahead?.type === "AS") {
      this._eat("AS");
      section.key = this.StringLiteral();
    }

    if (fields.length > 1) {
      const keySet = new Set();
      fields.forEach((field) => {
        if (keySet.has(field.key)) {
          throw new SyntaxError(
            `Duplicate field key "${field.key}", this will make the your schema looks confusing! Please use different aliases if your fields have the same name.`,
          );
        } else {
          keySet.add(field.key);
        }
      });
    }

    if (section.multiple && fields.some((f) => f.multiple)) {
      throw new SyntaxError(
        `A section with multiple responses cannot have fields that also have multiple responses!`,
      );
    }

    Object.assign(section, { fields });

    return section;
  }

  /**
   * FieldStatementList
   * : (FieldStatement)*
   * ;
   * */
  private FieldStatementList(stopLookAhead = "}") {
    const fieldStatementList = [this.FieldStatement()];
    while (this._lookahead !== null && this._lookahead.type !== stopLookAhead) {
      fieldStatementList.push(this.FieldStatement());
    }
    return fieldStatementList;
  }

  /**
   * FieldStatement
   *  : (NUMBER) (REQUIRE) (StringLiteral) FieldExpression (as StringLiteral) ';'
   *  | (MULTIPLE) (REQUIRE) (StringLiteral) FieldExpression (as StringLiteral) ';'
   *  | (REQUIRE) (MULTIPLE) (StringLiteral) FieldExpression (as StringLiteral) ';'
   *  ;
   */
  private FieldStatement(): FieldDefault | FieldSelection {
    const field: FieldDefault | FieldSelection = {
      type: "text",
      label: "",
      key: "",
    };

    if (this._lookahead?.type === "NUMBER") {
      field.maxResponseAllowed = this.NumericLiteral();
      field.multiple = true;
    }

    do {
      const expression = {
        REQUIRE: () => {
          this._eat("REQUIRE");
          field.required = true;
        },
        MULTIPLE: () => {
          this._eat("MULTIPLE");
          field.multiple = true;
        },
      }[String(this._lookahead?.type)];

      if (expression) {
        Object.assign(field, expression());
      }
    } while (["REQUIRE", "MULTIPLE"].includes(String(this._lookahead?.type)));

    if (this._lookahead?.type === "STRING") {
      field.label = this.StringLiteral();
    } else {
      field.label =
        String(this._lookahead?.value).toLowerCase().charAt(0).toUpperCase() +
        String(this._lookahead?.value).toLowerCase().slice(1);
    }

    field.key = slugify(field.label).toLowerCase();

    Object.assign(field, this.FieldExpression());

    if (this._lookahead?.type === "AS") {
      this._eat("AS");
      field.key = this.StringLiteral();
    }

    this._eat(";");

    return field;
  }

  /**
   * FieldExpression
   *  : 'FIELD'
   *  | 'FIELDSELECTION'
   *  | 'FIELDVALIDATED'
   *  | 'FIELDDATETIME'
   *  | 'FIELD' ValidationExpression
   *  | 'FIELDSELECTION' ValidationExpression
   *  | 'FIELDVALIDATED' ValidationExpression
   *  | 'FIELDDATETIME' ValidationExpression
   *  ;
   */
  private FieldExpression() {
    const field: any = {};

    const expression = {
      FIELD: this.FieldDefaultExpression.bind(this),
      FIELDSELECTION: this.FieldSelectionExpression.bind(this),
      FIELDVALIDATED: this.FieldValidatedExpression.bind(this),
      FIELDDATETIME: this.FieldDatetimeExpression.bind(this),
    }[String(this._lookahead?.type)];

    if (expression) {
      Object.assign(field, { type: String(this._lookahead?.value).toLowerCase() }, expression());

      const validation = this.ValidationExpression();

      Object.assign(field, validation);
    } else {
      throw new SyntaxError(`Unsupported field type "${this._lookahead?.value}"`);
    }

    return field;
  }

  private FieldDefaultExpression() {
    const expression: FieldDefault = {
      type: "text",
      label: "",
      key: "",
    };

    if (this._lookahead?.type === "FIELD") this._eat("FIELD");

    return expression;
  }

  /**
   * FieldSelectionExpression
   *  : 'FIELDSELECTION' StringLiteral '(' StringList ')'
   *  | 'FIELDSELECTION' StringLiteral 'URL' '(' StringList ')'
   *  | 'FIELDSELECTION' 'URL' '(' StringList ')'
   *  | 'FIELDSELECTION' '(' StringList ')'
   *  ;
   */
  private FieldSelectionExpression() {
    let fetchDataPath = "";

    const expression: FieldSelection = {
      type: "select",
      label: "",
      key: "",
      options: [],
    };

    if (this._lookahead?.type === "FIELDSELECTION") {
      this._eat("FIELDSELECTION");
    }

    if (this._lookahead?.type === "STRING") {
      fetchDataPath = this.StringLiteral();
    }

    if (this._lookahead?.type === "URL") {
      this._eat("URL");
      this._eat("(");
      const args = this.StringList();

      if (args.length > 3) {
        throw new SyntaxError(
          'Selection field fetching data from URL can only have less or equal to 3 arguments ("fetchUrl", "valueKey", "labelKey")',
        );
      }

      this._eat(")");

      Object.assign(expression, {
        options: [],
        fetchUrl: args[0] || "",
        valueKey: args[1] || "id",
        labelKey: args[2] || "name",
      });
    }

    if (this._lookahead?.type === "(") {
      this._eat("(");
      const args = this.StringList();
      this._eat(")");

      expression["options"] = args;
    }

    Object.assign(expression, { fetchDataPath });

    return expression;
  }

  private FieldValidatedExpression() {
    const expression: FieldDefault = {
      type: "text",
      label: "",
      key: "",
    };

    if (this._lookahead?.type === "FIELDVALIDATED") this._eat("FIELDVALIDATED");

    return expression;
  }

  private FieldDatetimeExpression() {
    const expression: FieldDefault = {
      type: "datetime",
      label: "",
      key: "",
    };

    if (this._lookahead?.type === "FIELDDATETIME") this._eat("FIELDDATETIME");

    return expression;
  }

  /**
   * ValidationExpression
   *  : 'VALID' '(' LogicalORExpression ')'
   *  | 'VALID' '(' LogicalORExpression ')' 'REGEX' '(' StringLiteral ')'
   *  | 'REGEX' '(' StringLiteral ')'
   *  | 'REGEX' '(' StringLiteral ')' 'VALID' '(' LogicalORExpression ')'
   *  ;
   */
  private ValidationExpression() {
    const expression: any = {};

    do {
      if (this._lookahead?.type === "VALID") {
        this._eat("VALID");
        this._eat("(");
        const validation = this.LogicalORExpression();
        this._eat(")");

        Object.assign(expression, {
          logic: validation,
        });
      }

      if (this._lookahead?.type === "REGEX") {
        this._eat("REGEX");
        this._eat("(");
        const regex = this.StringLiteral();
        this._eat(")");

        Object.assign(expression, { regex: new RegExp(regex) });
      }
    } while (["REGEX", "VALID"].includes(String(this._lookahead?.type)));

    if (expression.logic || expression.regex)
      return {
        validation: expression,
      };
  }

  /**
   * LogicalORExpression
   *  : LogicalANDExpression
   *  | LogicalANDExpression OR LogicalANDExpression
   *  ;
   */
  private LogicalORExpression() {
    const expresion = [];
    do {
      expresion.push(this.LogicalANDExpression());
    } while (this._lookahead?.type === "OR" && this._eat("OR"));

    return expresion.length > 1
      ? {
          $or: expresion,
        }
      : expresion[0];
  }

  /**
   * LogicalANDExpression
   *  : RelationalExpression
   *  | RelationalExpression AND RelationalExpression
   *  ;
   */
  private LogicalANDExpression() {
    const expresion = [];
    do {
      expresion.push(this.RelationalExpression());
    } while (this._lookahead?.type === "AND" && this._eat("AND"));

    return expresion.length > 1
      ? {
          $and: expresion,
        }
      : expresion[0];
  }

  /**
   * RelationalExpression
   *  : OPERATOR_RELATIONAL NumericLiteral
   *  | OPERATOR_EQUALITY StringLiteral
   *  | OPERATOR_EQUALITY NumericLiteral
   *  | HAS StringLiteral
   *  | HAS NumericLiteral
   *  ;
   */
  private RelationalExpression() {
    if (this._lookahead?.type) {
      const expresion = {
        OPERATOR_RELATIONAL: () => {
          const operator = {
            ">": "$gt",
            ">=": "$gte",
            "<": "$lt",
            "<=": "$lte",
          }[this._eat("OPERATOR_RELATIONAL").value] as string;

          return {
            [operator]: this.NumericLiteral(),
          };
        },
        OPERATOR_EQUALITY: () => {
          const operator = {
            "==": "$eq",
            "!=": "$neq",
          }[this._eat("OPERATOR_EQUALITY").value] as string;

          return {
            [operator]: isNaN(this._lookahead?.value as number)
              ? this.StringLiteral()
              : this.NumericLiteral(),
          };
        },
        HAS: () => {
          this._eat("HAS");
          return {
            $has: isNaN(this._lookahead?.value as number)
              ? this.StringLiteral()
              : this.NumericLiteral(),
          };
        },
      }[this._lookahead.type];

      if (expresion) return expresion();
    }
  }

  /**
   * StringList
   *  : StringLiteral
   *  | StringList ',' StringLiteral
   *  ;
   */
  private StringList() {
    const strings = [];
    do {
      strings.push(this.StringLiteral());
    } while (this._lookahead?.type === "," && this._eat(","));

    return strings;
  }

  /*
   * NumericLiteral
   *  : NUMBER
   *  ;
   */
  private NumericLiteral() {
    const token = this._eat("NUMBER");
    return Number(token.value);
  }

  /**
   * StringLiteral
   *   : STRING
   *   ;
   */
  private StringLiteral() {
    const token = this._eat("STRING");
    return String(token.value).slice(1, -1);
  }

  /**
   * BooleanLiteral
   *  : TRUE
   *  | FALSE
   *  ;
   */
  private BooleanLiteral(value: boolean) {
    this._eat(value ? "true" : "false");
    return value;
  }

  /**
   * NullLiteral
   *  : 'null'
   *  ;
   */
  private NullLiteral() {
    this._eat("null");
    return null;
  }

  /**
   * Expects a token of a given type.
   */
  _eat(tokenType: Token["type"]) {
    const token = this._lookahead;

    if (token === null) {
      // un token nulo es como un token EOF.
      throw new SyntaxError(`Unexpected end of input, expected: "${tokenType}"`);
    }

    if (token.type !== tokenType) {
      throw new SyntaxError(`Unexpected token: "${token.value}", expected: "${tokenType}"`);
    }

    // Advance to next token.
    this._lookahead = this._tokenizer.getNextToken();

    return token;
  }
}

export class Transformer<From, Result> {
  public variable: string;
  public transformer: (value: From) => Result;

  constructor(variable: string, transformer: (value: From) => Result) {
    this.variable = variable;
    this.transformer = transformer;
  }

  public transform(value: From): Result {
    return this.transformer(value);
  }
}

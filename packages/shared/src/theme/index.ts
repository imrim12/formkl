export interface Theme<GenericNode = any, GenericRule = any> {
  vNodeLayout?: GenericNode;
  vNodeFieldWrapper?: GenericNode;
  vNodeFields: {
    [key: string]: GenericNode;
  };
  vNodeComponents?: {
    [key: string]: GenericNode;
  };
  validator?: (
    state: {
      fieldValue: any;
      fieldPath: string;
      formValue: any;
    },
    rules: Array<GenericRule>,
    resolver: (...args: Array<any>) => void,
  ) => boolean;
}

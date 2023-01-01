export interface Theme<GenericNode = any, GenericRule = any> {
  vNodeFields: {
    [key: string]: GenericNode;
  };
  VNodeComponents: {
    [key: string]: GenericNode;
  };
  validator: (
    state: {
      fieldValue: any;
      fieldPath: string;
      formValue: any;
    },
    rules: Array<GenericRule>,
    resolver: (...args: Array<any>) => void,
  ) => boolean;
}

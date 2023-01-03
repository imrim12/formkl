export type Schema = {
  [section: string]:
    | {
        [field: string]: any;
      }
    | Array<{
        [field: string]: any;
      }>
    | {
        [field: string]: Array<any>;
      };
};

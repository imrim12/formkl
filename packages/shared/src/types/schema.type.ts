export type SchemaFlat = {
  [section: string]: {
    [field: string]: any;
  };
};

export type SchemaBase = {
  data: Array<{
    section: string;
    field: string;
    value: any;
  }>;
};

export type SchemaFlat = {
  [section: string]: {
    [field: string]: any;
  };
};

export type SchemaFlatSectionMultiple = {
  [section: string]: Array<{
    [field: string]: any;
  }>;
};

export type SchemaFlatFieldMultiple = {
  [section: string]: {
    [field: string]: Array<any>;
  };
};

export type SchemaBase = {
  data: Array<{
    section: string;
    field: string;
    value: any;
  }>;
};

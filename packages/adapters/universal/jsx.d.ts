export {};
declare global {
  const h: (tag: any, props?: any, children?: any[]) => any;
  const ref: <T>(arg?: T) => {
    current?: T;
    value?: T;
  };
}

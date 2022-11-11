export {};
declare global {
  const ref: <T>(arg: T) => {
    current?: T;
    value?: T;
  };
}

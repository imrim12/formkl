export const capitalize = (str: string) =>
  String(str).toLowerCase().charAt(0).toUpperCase() + String(str).toLowerCase().slice(1);

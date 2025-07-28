export function isNaNStrict(value: string | number) {
  return typeof value === 'number' || (typeof value === 'string' && /^\d+$/.test(value))
}

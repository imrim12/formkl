export function capitalize(str: string) {
  return String(str).toLowerCase().charAt(0).toUpperCase() + String(str).toLowerCase().slice(1)
}

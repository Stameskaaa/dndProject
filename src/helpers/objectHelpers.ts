export function pluckAndJoin<T extends Record<string, any>>(
  arr: T[],
  key: keyof T & string,
): string {
  return arr.map((item) => String(item[key])).join(', ');
}

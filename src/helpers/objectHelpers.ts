export function pluckAndJoin<T extends Record<string, any>>(
  key: keyof T & string,
  arr?: T[],
): string {
  return arr?.map((item) => String(item[key])).join(', ') || '';
}

export const sum = (arr: number[]) =>
  arr.reduce((prev, curr) => prev + curr, 0);

export const longest = (arr: string[]) =>
  arr.reduce((a, b) => (a.length >= b.length ? a : b));

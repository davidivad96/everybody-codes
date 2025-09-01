export const sum = (arr: number[]) =>
  arr.reduce((prev, curr) => prev + curr, 0);

export const longest = (arr: string[]) =>
  arr.reduce((a, b) => (a.length >= b.length ? a : b));

export const mod = (n: number, m: number) => ((n % m) + m) % m;

export const lcm = (a: number, b: number) => (a / gcd(a, b)) * b;

export const gcd = (a: number, b: number): number =>
  b ? gcd(b, a % b) : Math.abs(a);

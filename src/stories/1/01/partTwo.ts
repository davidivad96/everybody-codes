import { Input } from ".";

const modPow = (n: number, exp: number, mod: number) => {
  n %= mod;
  let result = 1 % mod;
  while (exp > 0) {
    if (exp & 1) result = (result * n) % mod;
    n = (n * n) % mod;
    exp = Math.floor(exp / 2);
  }
  return result;
};

const eni = (n: number, exp: number, mod: number) => {
  const k = 5;
  const start = Math.max(exp - k + 1, 1);
  let score = modPow(n, start, mod);
  const remainders: number[] = [score];
  for (let i = 0; i < Math.min(exp - 1, 4); i++) {
    score = (score * n) % mod;
    remainders.unshift(score);
  }
  return +remainders.join("");
};

export const partTwo = (input: Input) =>
  input.reduce((max, [A, B, C, X, Y, Z, M]) => {
    const result = eni(A, X, M) + eni(B, Y, M) + eni(C, Z, M);
    if (result > max) return result;
    return max;
  }, 0);

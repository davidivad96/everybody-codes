import { Input } from ".";

const eni = (n: number, exp: number, mod: number) => {
  let score = 1;
  const remainders: number[] = [];
  for (let i = 0; i < exp; i++) {
    const result = (score * n) % mod;
    remainders.unshift(result);
    score = result;
  }
  return +remainders.join("");
};

export const partOne = (input: Input) =>
  input.reduce((max, [A, B, C, X, Y, Z, M]) => {
    const result = eni(A, X, M) + eni(B, Y, M) + eni(C, Z, M);
    if (result > max) return result;
    return max;
  }, 0);

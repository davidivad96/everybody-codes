import { Input } from ".";
import { sum } from "../../../utils";

const detectCycle = (n: number, exp: number, mod: number) => {
  const cycle: number[] = [];
  let score = 1;
  let index = -1;
  for (let i = 0; i < exp; i++) {
    score = (score * n) % mod;
    index = cycle.indexOf(score);
    if (index !== -1) {
      break;
    }
    cycle.push(score);
  }
  return { cycle: cycle.slice(index), index };
};

const eni = (n: number, exp: number, mod: number) => {
  const { cycle, index } = detectCycle(n, exp, mod);
  let prevSum = 0;
  let score = 1;
  for (let i = 0; i < index; i++) {
    const result = (score * n) % mod;
    prevSum += result;
    score = result;
  }
  const cycleSum = sum(cycle);
  const endSum = sum(cycle.slice(0, (exp - index) % cycle.length));
  return prevSum + Math.floor((exp - index) / cycle.length) * cycleSum + endSum;
};

export const partThree = (input: Input) =>
  input.reduce((max, [A, B, C, X, Y, Z, M]) => {
    const result = eni(A, X, M) + eni(B, Y, M) + eni(C, Z, M);
    if (result > max) return result;
    return max;
  }, 0);

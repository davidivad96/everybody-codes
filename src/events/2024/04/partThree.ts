import { Input } from ".";

export const partThree = (input: Input) => {
  let min = Number.MAX_SAFE_INTEGER;
  for (const current of input) {
    min = Math.min(
      min,
      input.reduce((sum, val) => sum + Math.abs(val - current), 0)
    );
  }
  return min;
};

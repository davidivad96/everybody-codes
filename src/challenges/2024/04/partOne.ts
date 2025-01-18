import { Input } from ".";

export const partOne = (input: Input) => {
  const min = Math.min(...input);
  return input.reduce((sum, val) => sum + Math.abs(val - min), 0);
};

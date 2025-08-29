import { Input } from ".";

export const partTwo = (input: Input) => {
  const min = Math.min(...input);
  return input.reduce((sum, val) => sum + Math.abs(val - min), 0);
};

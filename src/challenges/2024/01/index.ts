import { partOne } from "./partOne";
import { partThree } from "./partThree";
import { partTwo } from "./partTwo";

export type Input = string;

const preprocess = (text: string): Input => text;

export const run = (text: string, part: 1 | 2 | 3) => {
  const input = preprocess(text);
  return [partOne, partTwo, partThree][part - 1](input);
};

import { partOne } from "./partOne";
import { partThree } from "./partThree";
import { partTwo } from "./partTwo";

export type Coordinates = [number, number];

export type Input = Coordinates[];

const preprocess = (text: string): Input => {
  const REGEX = /x=(\d+)\s+y=(\d+)/;
  return text.split("\n").map((line) => {
    const [_, x, y] = line.match(REGEX);
    return [+x, +y];
  });
};

export const run = (text: string, part: 1 | 2 | 3) => {
  const input = preprocess(text);
  return [partOne, partTwo, partThree][part - 1](input);
};

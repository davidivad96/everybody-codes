import { partOne } from "./partOne";
import { partThree } from "./partThree";
import { partTwo } from "./partTwo";

export type Pair = [number, string];

export type Tree = {
  id: number;
  val: Pair | null;
  left?: Tree | null;
  right?: Tree | null;
};

export type AddCommand = {
  command: "ADD";
  id: number;
  left: Pair;
  right: Pair;
};
export type SwapCommand = {
  command: "SWAP";
  id: number;
};

export type Input = (AddCommand | SwapCommand)[];

const preprocess = (text: string): Input => {
  const ADD_REGEX = /ADD\s+id=(\d+)\s+left=\[([^\]]+)\]\s+right=\[([^\]]+)\]/;
  const SWAP_REGEX = /SWAP (\d+)/;
  return text.split("\n").map((line) => {
    const swapMatch = line.match(SWAP_REGEX);
    if (swapMatch) {
      const [_, id] = swapMatch;
      return { command: "SWAP", id: +id };
    }
    const addMatch = line.match(ADD_REGEX);
    const [_, id, left, right] = addMatch;
    const leftSplit = left.split(",");
    const rightSplit = right.split(",");
    return {
      command: "ADD",
      id: +id,
      left: [+leftSplit[0], leftSplit[1]],
      right: [+rightSplit[0], rightSplit[1]],
    };
  });
};

export const run = (text: string, part: 1 | 2 | 3) => {
  const input = preprocess(text);
  return [partOne, partTwo, partThree][part - 1](input);
};

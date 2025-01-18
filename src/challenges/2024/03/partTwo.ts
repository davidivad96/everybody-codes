import { Input } from ".";
import { areEqual } from "./utils";

const getAdjacents = (obj: Record<string, number>, i: number, j: number) => [
  obj[[i - 1, j].toString()], // Up
  obj[[i, j + 1].toString()], // Right
  obj[[i + 1, j].toString()], // Down
  obj[[i, j - 1].toString()], // Left
];

export const partTwo = (input: Input) => {
  const heights: Record<string, number> = {};
  input.forEach((row, i) => {
    row.split("").forEach((cell, j) => {
      if (cell === "#") {
        heights[[i, j].toString()] = 1;
      }
    });
  });
  while (true) {
    const heightsCopy = { ...heights };
    for (const [key, current] of Object.entries(heights)) {
      const [i, j] = key.split(",").map(Number);
      const adjacents = getAdjacents(heightsCopy, i, j);
      if (adjacents.includes(undefined)) continue;
      if (adjacents.every((val) => Math.abs(+val - +current) === 0)) {
        heights[key] = current + 1;
      }
    }
    if (areEqual(heights, heightsCopy)) break;
  }
  return Object.values(heights).reduce((sum, curr) => sum + curr, 0);
};

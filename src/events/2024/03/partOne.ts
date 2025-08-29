import { Input } from ".";

const replaceAt = (str: string, i: number, replace: string) =>
  str.slice(0, i) + replace + str.slice(i + 1);

const getAdjacents = (grid: string[], i: number, j: number) => [
  grid[i - 1]?.[j], // Up
  grid[i][j + 1], // Right
  grid[i + 1]?.[j], // Down
  grid[i][j - 1], // Left
];

const areEqual = (arr1: string[], arr2: string[]) =>
  arr1.every((str, i) => str === arr2[i]);

export const partOne = (input: Input) => {
  const grid = input.reduce<string[]>(
    (prev, curr) => [...prev, curr.replaceAll("#", "1")],
    []
  );
  while (true) {
    const gridCopy = [...grid];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const current = gridCopy[i][j];
        if (current === ".") continue;
        const adjacents = getAdjacents(gridCopy, i, j);
        if (adjacents.includes(".")) continue;
        if (adjacents.every((val) => Math.abs(+val - +current) === 0)) {
          grid[i] = replaceAt(grid[i], j, (+current + 1).toString());
        }
      }
    }
    if (areEqual(grid, gridCopy)) break;
  }
  return grid.reduce(
    (sum, curr) =>
      sum +
      curr.split("").reduce((prev, val) => prev + (val === "." ? 0 : +val), 0),
    0
  );
};

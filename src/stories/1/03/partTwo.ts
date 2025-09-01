import { Input } from ".";
import { mod } from "../../../utils";

export const partTwo = (input: Input) => {
  let grid = input.map(([x, y]) => [x - 1, y - 1]);
  let i = 0;
  while (true) {
    grid = grid.map(([x, y]) => [mod(x + 1, x + y + 1), mod(y - 1, x + y + 1)]);
    i++;
    if (grid.every(([_, y]) => y === 0)) return i;
  }
};

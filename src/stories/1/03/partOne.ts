import { Coordinates, Input } from ".";
import { mod } from "../../../utils";

const N_DAYS = 100;

const calculateFinalPosition = ([x, y]: Coordinates): Coordinates => [
  mod(x + N_DAYS - 1, x + y - 1) + 1,
  mod(y - N_DAYS - 1, x + y - 1) + 1,
];

export const partOne = (input: Input) =>
  input
    .map((coords) => calculateFinalPosition(coords))
    .reduce((sum, [x, y]) => sum + x + 100 * y, 0);

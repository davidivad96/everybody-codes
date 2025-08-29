import { Input } from ".";
import { creatureToPotions } from "./utils";

export const partOne = (input: Input) =>
  input
    .split("")
    .reduce((sum, creature) => sum + creatureToPotions[creature], 0);

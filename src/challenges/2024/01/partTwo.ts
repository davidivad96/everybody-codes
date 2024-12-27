import { Input } from ".";
import { creatureToPotions } from "./utils";

export const partTwo = (input: Input) =>
  input.split("").reduce((sum, creature, i, arr) => {
    if (i % 2 === 1) {
      const pair = [arr[i - 1], creature];
      const extraPotions = pair.includes("x") ? 0 : 2;
      sum +=
        pair.reduce((prev, curr) => prev + creatureToPotions[curr], 0) +
        extraPotions;
    }
    return sum;
  }, 0);

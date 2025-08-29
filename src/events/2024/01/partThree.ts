import { Input } from ".";
import { creatureToPotions } from "./utils";

export const partThree = (input: Input) =>
  input.split("").reduce((sum, creature, i, arr) => {
    if (i % 3 === 2) {
      const triplet = [arr[i - 2], arr[i - 1], creature];
      const nCreatures = triplet.filter((val) => val !== "x").length;
      const extraPotions = nCreatures * (nCreatures - 1);
      sum +=
        triplet.reduce((prev, curr) => prev + creatureToPotions[curr], 0) +
        extraPotions;
    }
    return sum;
  }, 0);

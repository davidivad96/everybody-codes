import { writeFileSync } from "fs";

const indexFileTemplate = `import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { partThree } from "./partThree";

export type Input = string[];

const preprocess = (text: string): Input => text.split("\\n");

export const run = (text: string, part: 1 | 2 | 3) => {
  const input = preprocess(text);
  return [partOne, partTwo, partThree][part - 1](input);
};
`;

const solutionFileTemplate = (part: 1 | 2 | 3) => `import { Input } from ".";

export const part${
  part === 1 ? "One" : part === 2 ? "Two" : "Three"
} = (input: Input) => {
  return 0;
};
`;

export const padWithZero = (num: number) => String(num).padStart(2, "0");

export const scaffoldSolution = (path: string) => {
  writeFileSync(`${path}/index.ts`, indexFileTemplate);
  writeFileSync(`${path}/partOne.ts`, solutionFileTemplate(1));
  writeFileSync(`${path}/partTwo.ts`, solutionFileTemplate(2));
  writeFileSync(`${path}/partThree.ts`, solutionFileTemplate(3));
  writeFileSync(`${path}/input.txt`, "");
  writeFileSync(`${path}/sample.txt`, "");
};

#!/usr/bin/env ts-node
import { Command } from "commander";
import { existsSync, mkdirSync, readFileSync } from "fs";
import { resolve } from "path";
import { padWithZero, scaffoldSolution } from "./utils";

const program = new Command("ec");

program
  .command("run")
  .description("Run solution")
  .argument("<year:number>", "Event year")
  .argument("<challenge:number>", "Challenge number")
  .option("-p, --part <part:number>", "Part of the solution to run", "1")
  .option(
    "-f, --file <file:string>",
    "Input file. If missing, the day input file is used instead",
    "input.txt"
  )
  .action((year, challenge, { part, file }) => {
    const path = `../challenges/${year}/${padWithZero(challenge)}`;
    const { run } = require(path);
    const text = readFileSync(resolve(__dirname, `${path}/${file}`), "utf8");
    console.log("solution: ", run(text, +part));
  });

program
  .command("new")
  .description("Create a new challenge folder")
  .argument("<year:number>", "Event year")
  .argument("<challenge:number>", "Challenge number")
  .action((year, challenge) => {
    const path = resolve(
      __dirname,
      `../challenges/${year}/${padWithZero(challenge)}`
    );
    if (existsSync(path)) {
      console.log("Folder already exists");
    } else {
      mkdirSync(path);
      scaffoldSolution(path);
      console.log("New challenge folder created");
    }
  });

program.parse();

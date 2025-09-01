import { AddCommand, Input, Tree } from ".";
import { treeInsert, widestLevelString } from "./utils";

export const partOne = (input: Input) => {
  const [leftTree, rightTree] = input.reduce(
    ([lt, rt], { id, left: lv, right: rv }: AddCommand) => [
      treeInsert(lt, id, lv),
      treeInsert(rt, id, rv),
    ],
    [{}, {}] as [Tree, Tree]
  );
  return `${widestLevelString(leftTree)}${widestLevelString(rightTree)}`;
};

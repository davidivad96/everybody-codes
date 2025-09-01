import { Input, Pair, Tree } from ".";
import { treeInsert, widestLevelString } from "./utils";

const treeSwap = (rootA: Tree, rootB: Tree, id: number): [Tree, Tree] => {
  const qA: Tree[] = [rootA];
  const qB: Tree[] = [rootB];
  let nodeA: Tree | null = null;
  let nodeB: Tree | null = null;

  for (let i = 0; i < qA.length; i++) {
    const node = qA[i];
    if (node.id === id) {
      nodeA = node;
      break;
    }

    if (node.left) qA.push(node.left);
    if (node.right) qA.push(node.right);
  }
  for (let i = 0; i < qB.length; i++) {
    const node = qB[i];
    if (node.id === id) {
      nodeB = node;
      break;
    }

    if (node.left) qB.push(node.left);
    if (node.right) qB.push(node.right);
  }

  [nodeA.val, nodeB.val] = [nodeB.val, nodeA.val];

  return [rootA, rootB];
};

export const partTwo = (input: Input) => {
  const [leftTree, rightTree] = input.reduce(
    ([lt, rt], { command, id, ...rest }) => {
      if (command === "ADD") {
        const { left: lv, right: rv } = rest as { left: Pair; right: Pair };
        return [treeInsert(lt, id, lv), treeInsert(rt, id, rv)];
      }
      return treeSwap(lt, rt, id);
    },
    [{}, {}] as [Tree, Tree]
  );
  return `${widestLevelString(leftTree)}${widestLevelString(rightTree)}`;
};

import { Input, Pair, Tree } from ".";
import { treeInsert, widestLevelString } from "./utils";

type TreeReference = { node: Tree; parent: Tree; side?: "left" | "right" };

const treeSwap = (rootA: Tree, rootB: Tree, id: number): [Tree, Tree] => {
  const qA: TreeReference[] = [{ node: rootA, parent: null }];
  const qB: TreeReference[] = [{ node: rootB, parent: null }];
  const nodeReferences: TreeReference[] = [];

  for (let i = 0; i < qA.length; i++) {
    const reference = qA[i];
    const { node } = reference;
    if (node.id === id) {
      nodeReferences.push(reference);
    }

    if (node.left) qA.push({ node: node.left, parent: node, side: "left" });
    if (node.right) qA.push({ node: node.right, parent: node, side: "right" });
  }
  for (let i = 0; i < qB.length; i++) {
    const reference = qB[i];
    const { node } = reference;
    if (node.id === id) {
      nodeReferences.push(reference);
    }

    if (node.left) qB.push({ node: node.left, parent: node, side: "left" });
    if (node.right) qB.push({ node: node.right, parent: node, side: "right" });
  }

  if (nodeReferences[0].parent === null && nodeReferences[1].parent === null)
    return [rootB, rootA];
  [
    nodeReferences[0].parent[nodeReferences[0].side],
    nodeReferences[1].parent[nodeReferences[1].side],
  ] = [
    nodeReferences[1].parent[nodeReferences[1].side],
    nodeReferences[0].parent[nodeReferences[0].side],
  ];

  return [rootA, rootB];
};

export const partThree = (input: Input) => {
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

import { Pair, Tree } from ".";
import { longest } from "../../../utils";

export const treeInsert = (root: Tree, id: number, newVal: Pair): Tree => {
  const copy = Object.assign({}, root);
  let current = copy;

  while (true) {
    if (!current.val) {
      current.id = id;
      current.val = newVal;
      break;
    }
    if (newVal[0] < current.val[0]) {
      if (!current.left) {
        current.left = { id, val: newVal };
        break;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = { id, val: newVal };
        break;
      }
      current = current.right;
    }
  }

  return copy;
};

export const widestLevelString = (root: Tree): string => {
  const q: { node: Tree; level: number }[] = [{ node: root, level: 1 }];
  const levelMap: Record<number, string> = {};

  for (let i = 0; i < q.length; i++) {
    const { node, level } = q[i];
    const entry = `${levelMap[level] ?? ""}${node.val[1]}`;
    levelMap[level] = entry;

    if (node.left) q.push({ node: node.left, level: level + 1 });
    if (node.right) q.push({ node: node.right, level: level + 1 });
  }

  return longest(Object.values(levelMap));
};

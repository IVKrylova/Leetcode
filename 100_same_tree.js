// 100. Same Tree
// Tree, Depth-First Search, Breadth-First Search, Binary Tree

// Level - Easy

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the
// same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:
// The number of nodes in both trees is in the range [0, 100].
// -10^4 <= Node.val <= 10^4

const getPath = (node, path, flag) => {
  if (!node) return path;
  return (
    getPath(node.left, path + node.val + flag, "L") +
    getPath(node.right, path + node.val + flag, "R")
  );
};

const isSameTree = function (p, q) {
  const pPath = p ? getPath(p, `${p.val}`, "") : "";
  const qPath = q ? getPath(q, `${q.val}`, "") : "";
  return pPath === qPath;
};

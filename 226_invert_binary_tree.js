// 226. Invert Binary Tree
// Tree, Depth-First Search, Breadth-First Search, Binary Tree

// Level - Easy

// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

const invert = (node) => {
  if (!node) return;
  invert(node.left);
  invert(node.right);
  const left = node.left;
  const right = node.right;
  node.left = right;
  node.right = left;
};

const invertTree = function (root) {
  invert(root);
  return root;
};

// 144. Binary Tree Preorder Traversal
// Stack, Tree, Depth-First Search, Binary Tree

// Level - Easy

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [1,2,4,5,6,7,3,8,9]

// Example 3:
// Input: root = []
// Output: []

// Example 4:
// Input: root = [1]
// Output: [1]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

const dfs = (node, res) => {
  if (!node) return;
  res.push(node.val);
  dfs(node.left, res);
  dfs(node.right, res);
};

const preorderTraversal = function (root) {
  const res = [];
  dfs(root, res);
  return res;
};

// 94. Binary Tree Inorder Traversal
// Stack, Tree, Depth-First Search, Binary Tree

// Level - Easy

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]

// Example 3:
// Input: root = []
// Output: []

// Example 4:
// Input: root = [1]
// Output: [1]

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

const dfs = (vertexes, node) => {
  if (!node) return;
  dfs(vertexes, node.left);
  vertexes.push(node.val);
  dfs(vertexes, node.right);
};

const inorderTraversal = function (root) {
  const vertexes = [];
  dfs(vertexes, root);
  return vertexes;
};

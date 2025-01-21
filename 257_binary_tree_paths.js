// 257. Binary Tree Paths
// String, Backtracking, Tree, Depth-First Search, Binary Tree

// Level - Easy
// Topics
// Companies
// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Example 1:
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:
// Input: root = [1]
// Output: ["1"]

// Constraints:
// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

const dfs = (node, patch, res) => {
  if (!node) return;
  patch.push(node.val);
  if (!node.left && !node.right) {
    res.push(patch.join("->"));
  }
  dfs(node.left, patch, res);
  dfs(node.right, patch, res);
  patch.pop();
};

const binaryTreePaths = function (root) {
  const pathes = [];
  dfs(root, [], pathes);
  return pathes;
};

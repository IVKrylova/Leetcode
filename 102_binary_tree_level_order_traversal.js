// 102. Binary Tree Level Order Traversal
// Tree, Breadth-First Search, Binary Tree

// Level - Medium

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from
// left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

const levelOrder = function (root) {
  if (!root) return [];
  const order = [];
  const queue = [root];
  const nodes = [];
  while (queue.length > 0) {
    const values = [];
    while (queue.length > 0) {
      const el = queue.shift();
      nodes.push(el);
      values.push(el.val);
    }
    order.push(values);
    while (nodes.length > 0) {
      const el = nodes.shift();
      if (el.left) queue.push(el.left);
      if (el.right) queue.push(el.right);
    }
  }
  return order;
};

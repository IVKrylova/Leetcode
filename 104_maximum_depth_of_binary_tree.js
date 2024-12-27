// 104. Maximum Depth of Binary Tree
// Tree, Depth-First Search, Breadth-First Search, Binary Tree

// Level - Easy

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to
// the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Constraints:
// The number of nodes in the tree is in the range [0, 10^4].
// -100 <= Node.val <= 100

const dfs = (node) => {
  if (!node) return;
  if (node.height === undefined) node.height = 1;
  dfs(node.left);
  dfs(node.right);
  if (node.left && node.right) {
    node.height = Math.max(node.left.height + 1, node.right.height + 1);
  } else if (node.left) {
    node.height = (node.left.height ? node.left.height : 1) + 1;
  } else if (node.right) {
    node.height = (node.right.height ? node.right.height : 1) + 1;
  }
};

const maxDepth = function (root) {
  if (!root) return 0;
  dfs(root);
  return root.height;
};

class Node {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const node5 = new Node(7, null, null);
const node4 = new Node(15, null, null);
const node3 = new Node(20, node4, node5);
const node2 = new Node(9, null, null);
const node1 = new Node(3, node2, node3);

maxDepth(node1);

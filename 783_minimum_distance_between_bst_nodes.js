// 783. Minimum Distance Between BST Nodes
// Tree, Depth-First Search, Breadth-First Search, Binary Search Tree, Binary Tree

// Level - Easy

// Given the root of a Binary Search Tree (BST), return the minimum difference between the
// values of any two different nodes in the tree.

// Example 1:
// Input: root = [4,2,6,1,3]
// Output: 1

// Example 2:
// Input: root = [1,0,48,null,null,12,49]
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [2, 100].
// 0 <= Node.val <= 10^5

const getNodes = (node, nodes) => {
  if (!node) return;
  if (node.left) nodes.push(node.left.val);
  if (node.right) nodes.push(node.right.val);
  getNodes(node.left, nodes);
  getNodes(node.right, nodes);
};

const minDiffInBST = function (root) {
  const nodes = [root.val];
  getNodes(root, nodes);
  nodes.sort((a, b) => a - b);
  let res = nodes[1] - nodes[0];
  for (let i = 2; i < nodes.length; i++) {
    if (nodes[i] - nodes[i - 1] < res) res = nodes[i] - nodes[i - 1];
  }
  return res;
};

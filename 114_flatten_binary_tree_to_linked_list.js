// 114. Flatten Binary Tree to Linked List
// Linked List, Stack, Tree, Depth-First Search, Binary Tree

// Level - Medium

// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in
// the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

// Example 1:
// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [0]
// Output: [0]

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

const dfs = (node, nodes) => {
  if (!node) return;
  nodes.push(node);
  if (node.left) dfs(node.left, nodes);
  if (node.right) dfs(node.right, nodes);
};

const flatten = function (root) {
  const nodes = [];
  dfs(root, nodes);
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1];
  }
  return nodes[0];
};

// 101. Symmetric Tree
// Tree, Depth-First Search, Breadth-First Search, Binary Tree

// Level - Easy

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric
// around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

const dfsL = (node, res) => {
  if (!node) return res;
  return (
    dfsL(node.left, node.left ? node.left.val + "L" + res : res) +
    dfsL(node.right, node.right ? node.right.val + "R" + res : res)
  );
};

const dfsR = (node, res) => {
  if (!node) return res;
  return (
    dfsR(node.right, node.right ? node.right.val + "L" + res : res) +
    dfsR(node.left, node.left ? node.left.val + "R" + res : res)
  );
};

const isSymmetric = function (root) {
  const left = dfsL(root.left, `${root.left ? root.left.val : ""}`);
  const right = dfsR(root.right, `${root.right ? root.right.val : ""}`);
  return left === right;
};

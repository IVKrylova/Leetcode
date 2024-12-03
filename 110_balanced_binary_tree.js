// 110. Balanced Binary Tree
// Tree, Depth-First Search, Binary Tree

// Level - Easy

// Given a binary tree, determine if it is height-balanced.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -10^4 <= Node.val <= 10^4

const calcHeight = (node) => {
  if (!node) return;
  calcHeight(node.left);
  calcHeight(node.right);
  node.hight =
    Math.max(
      node.left && (node.left.hight || 0),
      node.right && (node.right.hight || 0)
    ) + 1;
};

const checkBalanc = function (node) {
  if (!node) return true;
  if (
    Math.abs(
      (node.left ? node.left.hight : 0) - (node.right ? node.right.hight : 0)
    ) > 1
  )
    return false;
  return checkBalanc(node.left) && checkBalanc(node.right);
};

const isBalanced = function (root) {
  calcHeight(root);
  return checkBalanc(root);
};

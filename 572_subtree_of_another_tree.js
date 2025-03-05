// 572. Subtree of Another Tree
// Tree, Depth-First Search, String Matching, Binary Tree, Hash Function

// Level - Easy

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same
// structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
// The tree tree could also be considered as a subtree of itself.

// Example 1:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:
// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// Constraints:
// The number of nodes in the root tree is in the range [1, 2000].
// The number of nodes in the subRoot tree is in the range [1, 1000].
// -10^4 <= root.val <= 10^4
// -10^4 <= subRoot.val <= 10^4

const compare = (node, subNode) => {
  if (!node && subNode) return false;
  if (node && !subNode) return false;
  if (!node && !subNode) return true;
  if (node.val !== subNode.val) return false;
  return compare(node.left, subNode.left) && compare(node.right, subNode.right);
};

const isSubtree = function (root, subRoot) {
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (compare(node, subRoot)) return true;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return false;
};

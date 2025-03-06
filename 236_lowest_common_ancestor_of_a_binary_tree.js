// 236. Lowest Common Ancestor of a Binary Tree
// Tree, Depth-First Search, Binary Tree

// Level - Medium

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two
// nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be
// a descendant of itself).”

// Example 1:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

// Example 2:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the
// LCA definition.

// Example 3:
// Input: root = [1,2], p = 1, q = 2
// Output: 1

// Constraints:
// The number of nodes in the tree is in the range [2, 10^5].
// -10^9 <= Node.val <= 10^9
// All Node.val are unique.
// p != q
// p and q will exist in the tree.

const setParent = (node) => {
  if (!node) return;
  if (node.left) {
    node.left.parent = node;
    setParent(node.left);
  }
  if (node.right) {
    node.right.parent = node;
    setParent(node.right);
  }
};

const getPath = (node, parents, end) => {
  if (!node) return;
  if (node.val === end.val) return;
  if (node.parent) parents.push(node.parent);
  getPath(node.parent, parents, end);
};

const searchNode = (root, key) => {
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (node.val === key) return node;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return null;
};

const lowestCommonAncestor = function (root, p, q) {
  root.parent = null;
  setParent(root);
  const nodeP = searchNode(root, p.val);
  const nodeQ = searchNode(root, q.val);
  const parentsP = [nodeP];
  const parentsQ = [nodeQ];
  getPath(nodeP, parentsP, nodeQ);
  getPath(nodeQ, parentsQ, nodeP);
  for (let i = 0; i < parentsP.length; i++) {
    if (parentsQ.indexOf(parentsP[i]) !== -1) {
      return parentsP[i];
    }
  }
};

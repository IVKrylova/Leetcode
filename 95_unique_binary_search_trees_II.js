// 95. Unique Binary Search Trees II
// Dynamic Programming, Backtracking, Tree, Binary Search Tree, Binary Tree

// Level - Medium

// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n
// nodes of unique values from 1 to n. Return the answer in any order.

// Example 1:
// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

// Example 2:
// Input: n = 1
// Output: [[1]]

// Constraints:
// 1 <= n <= 8

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const buildTree = (start, end) => {
  if (start > end) return [null];

  const trees = [];
  for (let i = start; i <= end; i++) {
    const leftTree = buildTree(start, i - 1);
    const rightTree = buildTree(i + 1, end);
    for (const left of leftTree) {
      for (const right of rightTree) {
        const root = new TreeNode(i, left, right);
        trees.push(root);
      }
    }
  }
  return trees;
};

const generateTrees = function (n) {
  return buildTree(1, n);
};


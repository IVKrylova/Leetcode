// 108. Convert Sorted Array to Binary Search Tree
// Array, Divide and Conquer, Tree, Binary Search Tree, Binary Tree

// Level - Easy

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced
// binary search tree.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:
// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums is sorted in a strictly increasing order.

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const addNode = (node, parent) => {
  if (node.val > parent.val) {
    if (parent.right) {
      addNode(node, parent.right);
    } else {
      parent.right = node;
    }
  } else {
    if (parent.left) {
      addNode(node, parent.left);
    } else {
      parent.left = node;
    }
  }
};

const createTree = (nums, start, end, root) => {
  if (start > end) return;

  const mid = Math.floor((start + end) / 2);
  const node = new TreeNode(nums[mid]);
  addNode(node, root);
  createTree(nums, start, mid - 1, root);
  createTree(nums, mid + 1, end, root);
};

const sortedArrayToBST = function (nums) {
  if (nums.length === 1) {
    const root = new TreeNode(nums[0]);
    return root;
  }

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  createTree(nums, 0, mid - 1, root);
  createTree(nums, mid + 1, nums.length - 1, root);

  return root;
};


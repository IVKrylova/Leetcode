// 78. Subsets
// Array, Backtracking, Bit Manipulation

// Level - Medium

// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

const getSubset = (nums, cur, ind, res) => {
  if (cur.length > nums.length) return;
  res.push([...cur]);
  for (let i = ind; i < nums.length; i++) {
    cur.push(nums[i]);
    getSubset(nums, cur, i + 1, res);
    cur.pop();
  }
};

const subsets = function (nums) {
  const res = [];
  getSubset(nums, [], 0, res);
  return res;
};


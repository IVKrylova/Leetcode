// 46. Permutations
// Array, Backtracking

// Level - Medium

// Given an array nums of distinct integers, return all the possible permutations. You can return the
// answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

const getPermutation = (current, nums, res) => {
  if (current.length === nums.length) res.push([...current]);
  for (let i = 0; i < nums.length; i++) {
    if (!current.includes(nums[i])) {
      current.push(nums[i]);
      getPermutation(current, nums, res);
      current.pop();
    }
  }
};

const permute = function (nums) {
  const res = [];
  getPermutation([], nums, res);
  return res;
};

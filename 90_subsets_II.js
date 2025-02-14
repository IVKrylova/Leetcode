// 90. Subsets II
// Array, Backtracking, Bit Manipulation

// Level - Medium

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

const getSubset = (nums, res, ind, cur, set) => {
  if (cur.length > nums.length) return;
  const key = cur.sort((a, b) => a - b).join("");
  if (!set.has(key)) {
    set.add(key);
    res.push([...cur]);
  }

  for (let i = ind; i < nums.length; i++) {
    if (i > ind && nums[i] === nums[i - 1]) continue;
    cur.push(nums[i]);
    getSubset(nums, res, i + 1, cur, set);
    cur.pop();
  }
};

const subsetsWithDup = function (nums) {
  const res = [];
  const set = new Set();
  nums.sort((a, b) => a - b);
  getSubset(nums, res, 0, [], set);
  return res;
};

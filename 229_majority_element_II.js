// 229. Majority Element II
// Array, Hash Table, Sorting, Counting

// Level - Medium

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:
// Input: nums = [3,2,3]
// Output: [3]

// Example 2:
// Input: nums = [1]
// Output: [1]

// Example 3:
// Input: nums = [1,2]
// Output: [1,2]

// Constraints:
// 1 <= nums.length <= 5 * 10^4
// -10^9 <= nums[i] <= 10^9

const majorityElement = function (nums) {
  const k = Math.floor(nums.length / 3);
  const res = [];
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    hash.has(nums[i])
      ? hash.set(nums[i], hash.get(nums[i]) + 1)
      : hash.set(nums[i], 1);
  }
  hash.forEach((val, key) => {
    if (val > k) res.push(key);
  });
  return res;
};

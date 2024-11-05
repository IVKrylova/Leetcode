// 525. Contiguous Array
// Array, Hash Table6 Prefix Sum

// Level - Meduim

// Given a binary array nums, return the maximum length of a contiguous subarray with an equal
// number of 0 and 1.

// Example 1:
// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// Example 2:
// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

// Constraints:
// 1 <= nums.length <= 10^5
// nums[i] is either 0 or 1.

const findMaxLength = function (nums) {
  const sum = [nums[0] ? nums[0] : -1];
  const hash = { 0: -1 };
  hash[sum[0]] = 0;
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + (nums[i] ? nums[i] : -1);
    if (hash[sum[i]] !== undefined) {
      const dist = i - hash[sum[i]];
      if (dist > res) res = dist;
    } else {
      hash[sum[i]] = i;
    }
  }

  return res;
};

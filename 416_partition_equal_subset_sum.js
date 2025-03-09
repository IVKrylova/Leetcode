// 416. Partition Equal Subset Sum
// Array, Dynamic Programming

// Level - Medium

// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the
// elements in both subsets is equal or false otherwise.

// Example 1:
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Example 2:
// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Constraints:
// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

const canPartition = function (nums) {
  const sum = nums.reduce((sum, el) => (sum += el), 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (let j = 0; j < nums.length; j++) {
    for (let i = target; i > 0; i--) {
      dp[i] = dp[i] || !!dp[i - nums[j]];
    }
  }
  return dp[target];
};

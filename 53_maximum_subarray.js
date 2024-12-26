// 53. Maximum Subarray
// Array, Divide and Conquer, Dynamic Programming

// Level - Medium

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4

const maxSubArray = function (nums) {
  const dp = new Array(nums.length).fill(-Infinity);
  dp[0] = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    if (dp[i] > res) res = dp[i];
  }
  return res;
};

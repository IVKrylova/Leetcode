// 55. Jump Game
// Array, Dynamic Programming, Greedy

// Level - Medium

// You are given an integer array nums. You are initially positioned at the array's first
// index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:
// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 10^5

const canJump = function (nums) {
  const dp = new Array(nums.length).fill(false);
  dp[0] = true;
  for (let i = 0; i < nums.length; i++) {
    if (dp[i]) {
      for (let j = 1; j <= nums[i]; j++) {
        if (i + j >= nums.length) break;
        dp[i + j] = true;
      }
    }
  }
  return dp[nums.length - 1];
};

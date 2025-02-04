// 16. 3Sum Closest
// Array, Two Pointers, Sorting

// Level - Medium

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum
// is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:
// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Constraints:
// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -10^4 <= target <= 10^4

const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = null;
  let diff = null;
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      if (left === i) left++;
      if (right === i) right--;
      if (left !== right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (res === null) {
          res = sum;
          diff = Math.abs(target - sum);
        } else {
          if (Math.abs(target - sum) <= diff) {
            diff = Math.abs(target - sum);
            res = sum;
          }
        }
        sum <= target ? left++ : right--;
      }
    }
  }
  return res;
};

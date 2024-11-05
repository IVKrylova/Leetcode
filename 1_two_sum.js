// 1. Two Sum
// Array, Hash Table

// Level - Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such
// that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same
// element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists.

const twoSum = function (nums, target) {
  const sortedArr = [...nums].sort((a, b) => b - a);
  for (let left = 0; left < nums.length; left++) {
    for (let right = left + 1; right < nums.length; right++) {
      if (sortedArr[left] + sortedArr[right] === target) {
        const first = sortedArr[left];
        const second = sortedArr[right];
        if (first === second) {
          return [nums.indexOf(first), nums.lastIndexOf(second)];
        } else {
          return [
            nums.indexOf(sortedArr[left]),
            nums.indexOf(sortedArr[right]),
          ];
        }
      }
    }
  }
};

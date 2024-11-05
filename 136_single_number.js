// 136. Single Number
// Array, Bit Manipulation

// Level - Easy

// Given a non-empty array of integers nums, every element appears twice except for one. Find
// that single one. You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:
// 1 <= nums.length <= 3 * 10^4
// -3 * 10^4 <= nums[i] <= 3 * 10^4
// Each element in the array appears twice except for one element which appears only once.

const singleNumber = function (nums) {
  const arr = nums.sort((a, b) => b - a);
  let i = 0;
  while (i < nums.length) {
    if (arr[i] == arr[i + 1]) {
      i += 2;
    } else {
      return arr[i];
    }
  }
};

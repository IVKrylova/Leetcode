// 283. Move Zeroes
// Array, Two Pointers

// Level - Easy

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero
// elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const moveZeroes = function (nums) {
  let i = 0;
  let j = 0;
  while (i < nums.length && j < nums.length) {
    if (nums[i] !== 0) {
      i++;
      j++;
    } else if (i === j || nums[j] === 0) {
      j++;
    } else {
      swap(nums, i, j);
    }
  }
  return nums;
};

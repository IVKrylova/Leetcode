// 238. Product of Array Except Self
// Array, Prefix Sum

// Level - Medium

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all
// the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2 <= nums.length <= 10^5
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

const productExceptSelf = function (nums) {
  const left = [1];
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  const right = [];
  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }
  return answer;
};


// 169. Majority Element
// Array, Hash Table, Divide and Conquer, Sorting, Counting

// Level - Easy

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume
// that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:
// n == nums.length
// 1 <= n <= 5 * 10^4
// -10^9 <= nums[i] <= 10^9

const majorityElement = function (nums) {
  const n = Math.floor(nums.length / 2);
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]] = hash[nums[i]] + 1;
    } else {
      hash[nums[i]] = 1;
    }
    if (hash[nums[i]] > n) return nums[i];
  }
};

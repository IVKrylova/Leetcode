// 704. Binary Search
// Array, Binary Search

// Level - Easy

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function
// to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:
// 1 <= nums.length <= 10^4
// -10^4 < nums[i], target < 10^4
// All the integers in nums are unique.
// nums is sorted in ascending order.

const binarySearch = (nums, target, start, end) => {
  if (start >= end) return -1;

  const mid = Math.floor((start + end) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (target > nums[mid]) {
    return binarySearch(nums, target, mid + 1, end);
  } else {
    return binarySearch(nums, target, start, mid);
  }
};

const search = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length);
};

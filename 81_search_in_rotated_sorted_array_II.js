// 81. Search in Rotated Sorted Array II
// Array, Binary Search

// Level - Medium

// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ...,
// nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become
// [4,5,6,6,7,0,1,2,4,4].
// Given the array nums after the rotation and an integer target, return true if target is in nums, or
// false if it is not in nums.
// You must decrease the overall operation steps as much as possible.

// Example 1:
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true

// Example 2:
// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

// Constraints:
// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// nums is guaranteed to be rotated at some pivot.
// -10^4 <= target <= 10^4

const binarySearch = (arr, target, start, end) => {
  if (start === end) return arr[start] === target;
  if (start > end) return false;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return true;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid);
  }
};

const search = function (nums, target, start = 0, end = nums.length - 1) {
  if (start === end) return nums[start] === target;
  if (start > end) return false;
  const mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) {
    return true;
  } else if (target > nums[mid] && nums[mid + 1] < nums[end]) {
    return target > nums[end]
      ? search(nums, target, start, mid)
      : binarySearch(nums, target, mid + 1, end);
  } else if (target < nums[mid] && nums[start] < nums[mid]) {
    return target >= nums[start]
      ? binarySearch(nums, target, start, mid)
      : search(nums, target, mid + 1, end);
  } else if (target < nums[mid] && nums[mid] < nums[start]) {
    return search(nums, target, start, mid);
  } else if (target > nums[mid] && nums[mid] > nums[end]) {
    return search(nums, target, mid + 1, end);
  } else {
    for (let i = start; i <= end; i++) {
      if (nums[i] === target) return true;
    }
    return false;
  }
};

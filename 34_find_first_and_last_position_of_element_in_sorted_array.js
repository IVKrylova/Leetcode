// 34. Find First and Last Position of Element in Sorted Array
// Array, Binary Search

// Level - Medium

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of
// a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non-decreasing array.
// -10^9 <= target <= 10^9

const binarySearch = (arr, target, start, end) => {
  if (start === end) {
    return arr[start] === target ? [start, end] : [-1, -1];
  }
  if (start > end) return [-1, -1];

  const mid = Math.floor((end + start) / 2);
  if (arr[mid] === target) {
    let s = mid;
    let e = mid;
    while (arr[s] === target) {
      s--;
    }
    while (arr[e] === target) {
      e++;
    }
    return [s + 1, e - 1];
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
};

const searchRange = function (nums, target) {
  if (nums.length === 1 && nums[0] === target) return [0, 0];
  if (nums.length === 2) {
    if (nums[0] === target && nums[1] === target) {
      return [0, 1];
    } else if (nums[0] === target) {
      return [0, 0];
    } else if (nums[1] === target) {
      return [1, 1];
    } else {
      return [-1, -1];
    }
  }
  return binarySearch(nums, target, 0, nums.length - 1);
};

searchRange([5, 7, 7, 8, 8, 10], 6);

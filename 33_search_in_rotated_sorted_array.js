// 33. Search in Rotated Sorted Array
// Array, Binary Search

// Level - Medium

// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot
// index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1],
// ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7]
// might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index
// of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1

// Constraints:
// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -10^4 <= target <= 10^4

const binarySearch = (nums, target, start, end) => {
  if (end === start && nums[end] === target) return end;
  if (end <= start) return -1;

  const ind = Math.floor((start + end) / 2);
  if (nums[ind] === target) {
    return ind;
  } else if (target > nums[ind]) {
    return binarySearch(nums, target, ind + 1, end);
  } else {
    return binarySearch(nums, target, start, ind);
  }
};

const search = function (nums, target, start = 0, end = nums.length - 1) {
  if (nums.length === 1 && nums[0] === target) return 0;
  if (end <= start) return -1;
  const ind = Math.floor((start + end) / 2);
  if (
    nums[start] <= nums[ind] &&
    target <= nums[ind] &&
    target >= nums[start]
  ) {
    return binarySearch(nums, target, start, ind);
  } else if (
    nums[end] >= nums[ind + 1] &&
    target >= nums[ind + 1] &&
    target <= nums[end]
  ) {
    return binarySearch(nums, target, ind + 1, end);
  } else {
    const res = search(nums, target, start, ind);
    if (res === -1) {
      return search(nums, target, ind + 1, end);
    } else {
      return res;
    }
  }
};

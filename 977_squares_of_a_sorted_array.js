// 977. Squares of a Sorted Array
// Array, Two Pointers, Sorting

// Level - Easy

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of
// each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 10^4
// -104 <= nums[i] <= 10^4
// nums is sorted in non-decreasing order.

const sortedSquares = function (nums) {
  let start = 0;
  let end = 0;
  while (nums[end] < 0) {
    end++;
  }
  const nums1 = [];
  for (let i = end - 1; i >= 0; i--) {
    nums1.push(nums[i] * nums[i]);
  }
  const nums2 = [];
  for (let i = end; i < nums.length; i++) {
    nums2.push(nums[i] * nums[i]);
  }
  const res = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++;
    }
  }
  if (i < nums1.length) {
    while (i < nums1.length) {
      res.push(nums1[i]);
      i++;
    }
  } else if (j < nums2.length) {
    while (j < nums2.length) {
      res.push(nums2[j]);
      j++;
    }
  }
  return res;
};

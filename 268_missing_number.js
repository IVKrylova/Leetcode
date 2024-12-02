// 268. Missing Number
// Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting

// Level - Easy

// Given an array nums containing n distinct numbers in the range [0, n], return the only
// number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is
// the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is
// the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is
// the missing number in the range since it does not appear in nums.

// Constraints:
// n == nums.length
// 1 <= n <= 10^4
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const partition = (arr, start, end) => {
  let left = start;
  let right = end;
  let indPivot = Math.floor(start + Math.random() * (end - start + 1));
  const pivot = arr[indPivot];
  while (right > left) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (right > left) {
      swap(arr, left, right);
      if (arr[left] === pivot) {
        indPivot = left;
      } else if (arr[right] === pivot) {
        indPivot = right;
      }
    }
    if (arr[right] === arr[left]) {
      right--;
    }
  }
  return indPivot;
};

const quiqSortInPlace = (arr, start, end) => {
  if (start >= end) return arr;
  const indPivot = partition(arr, start, end);
  quiqSortInPlace(arr, start, indPivot);
  quiqSortInPlace(arr, indPivot + 1, end);
};

const missingNumber = function (nums) {
  quiqSortInPlace(nums, 0, nums.length - 1);
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) return i;
  }
};

missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);

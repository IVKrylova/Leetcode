// 912. Sort an Array
// Array, Divide and Conquer, Sorting, Heap (Priority Queue), Merge Sort, Bucket Sort,
// Radix Sort, Counting Sort

// Level - Medium

// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity
// and with the smallest space complexity possible.

// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example,
// 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// Constraints:
// 1 <= nums.length <= 5 * 10^4
// -5 * 10^4 <= nums[i] <= 5 * 10^4

const sortArray = function (nums) {
  if (nums.length === 1) return nums;
  const left = sortArray(nums.slice(0, Math.floor(nums.length / 2)));
  const right = sortArray(nums.slice(Math.floor(nums.length / 2)));

  let l = 0,
    r = 0,
    k = 0;
  const res = [];
  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      res[k] = left[l];
      l++;
    } else {
      res[k] = right[r];
      r++;
    }
    k++;
  }
  while (l < left.length) {
    res[k] = left[l];
    l++;
    k++;
  }
  while (r < right.length) {
    res[k] = right[r];
    r++;
    k++;
  }
  return res;
};

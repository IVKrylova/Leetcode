// 719. Find K-th Smallest Pair Distance
// Array, Two Pointers, Binary Search, Sorting

// Level - Hard

// The distance of a pair of integers a and b is defined as the absolute difference between
// a and b.
// Given an integer array nums and an integer k, return the kth smallest distance among all
// the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.

// Example 1:
// Input: nums = [1,3,1], k = 1
// Output: 0
// Explanation: Here are all the pairs:
// (1,3) -> 2
// (1,1) -> 0
// (3,1) -> 2
// Then the 1st smallest distance pair is (1,1), and its distance is 0.

// Example 2:
// Input: nums = [1,1,1], k = 2
// Output: 0

// Example 3:
// Input: nums = [1,6,1], k = 3
// Output: 5

// Constraints:
// n == nums.length
// 2 <= n <= 10^4
// 0 <= nums[i] <= 10^6
// 1 <= k <= n * (n - 1) / 2

const swap = (arr, left, right) => {
  [arr[left], arr[right]] = [arr[right], arr[left]];
};

const partition = (arr, start, end) => {
  let left = start;
  let right = end;
  let indPivot = Math.floor(start + Math.random() * (end - start + 1));
  const pivot = arr[indPivot];

  while (left < right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }

    if (left < right) {
      swap(arr, left, right);
      if (arr[left] === pivot) {
        indPivot = left;
      } else if (arr[right] === pivot) {
        indPivot = right;
      }
    }
    if (arr[left] === arr[right] && arr[right] === pivot) {
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

const checkInterval = (arr, diff, k) => {
  let count = 0;
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[right] - arr[left] <= diff) {
      count += right - left;
      right++;
    } else {
      left++;
    }
    if (count >= k) return true;
  }
  return false;
};

const smallestDistancePair = function (nums, k) {
  quiqSortInPlace(nums, 0, nums.length - 1);
  if (k === 1) return nums[1] - nums[0];

  let start = 0;
  let end = nums[nums.length - 1] - nums[0];

  while (start < end) {
    const median = Math.floor((end + start) / 2);
    if (checkInterval(nums, median, k)) {
      end = median;
    } else {
      start = median + 1;
    }
  }
  return start;
};

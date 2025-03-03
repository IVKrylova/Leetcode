// 905. Sort Array By Parity
// Array, Two Pointers, Sorting

// Level - Easy

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.

// Example 1:
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const checkEven = (n) => {
  return n % 2 === 0;
};

const checkOdd = (n) => {
  return n % 2 !== 0;
};

const sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    while (left < nums.length && checkEven(nums[left])) {
      left++;
    }
    while (right >= 0 && checkOdd(nums[right])) {
      right--;
    }
    if (left < right) swap(nums, left, right);
  }
  return nums;
};

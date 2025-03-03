// 922. Sort Array By Parity II
// Array, Two Pointers, Sorting

// Level - Easy

// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
// Return any answer array that satisfies this condition.

// Example 1:
// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// Example 2:
// Input: nums = [2,3]
// Output: [2,3]

// Constraints:
// 2 <= nums.length <= 2 * 10^4
// nums.length is even.
// Half of the integers in nums are even.
// 0 <= nums[i] <= 1000

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const checkEven = (n) => {
  return n % 2 === 0;
};

const checkOdd = (n) => {
  return n % 2 !== 0;
};

const sortArrayByParityII = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    while (left < nums.length) {
      if (checkOdd(nums[left]) && checkEven(left)) break;
      left++;
    }
    while (right >= 0) {
      if (checkEven(nums[right]) && checkOdd(right)) break;
      right--;
    }
    if (left < right) swap(nums, left, right);
  }
  left = 0;
  right = nums.length - 1;
  while (left < right) {
    while (left < nums.length) {
      if (checkEven(nums[left]) && checkOdd(left)) break;
      left++;
    }
    while (right >= 0) {
      if (checkOdd(nums[right]) && checkEven(right)) break;
      right--;
    }
    if (left < right) swap(nums, left, right);
  }
  return nums;
};

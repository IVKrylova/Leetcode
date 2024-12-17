// 485. Max Consecutive Ones
// Array
// Level - Easy

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number
// of consecutive 1s is 3.

// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

// Constraints:

// 1 <= nums.length <= 10^5
// nums[i] is either 0 or 1.

const findMaxConsecutiveOnes = function (nums) {
  let res = 0;
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    let current = 0;
    j = i;
    while (nums[j] !== 0 && j < nums.length) {
      current++;
      j++;
    }
    if (current > res) res = current;
    i = j + 1;
  }
  return res;
};

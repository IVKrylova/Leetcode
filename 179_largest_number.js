// 179. Largest Number
// Array, String, Greedy, Sorting

// Level - Medium

// Given a list of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:
// Input: nums = [10,2]
// Output: "210"

// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 10^9

const compare = (a, b) => {
  const num1 = a.toString();
  const num2 = b.toString();
  return Number(num1 + num2) > Number(num2 + num1);
};

const largestNumber = (nums) => {
  if (nums.every((el) => el === 0)) return "0";
  for (let i = 1; i < nums.length; i++) {
    let itemToInsert = nums[i];
    let j = i;

    while (j > 0 && compare(itemToInsert, nums[j - 1])) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = itemToInsert;
  }

  return nums.join("");
};

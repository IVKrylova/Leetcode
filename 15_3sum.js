// 15. 3Sum
// Array, Two Pointers, Sorting

// Level - Medium

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j,
// i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
// 3 <= nums.length <= 3000
// -10^5 <= nums[i] <= 10^5

const threeSum = function (nums) {
  const TARGET = 0;
  const set = new Set();
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let left = i;
    let right = nums.length - 1;
    if (left === i) {
      left++;
    }
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === TARGET) {
        if (!set.has(`${nums[i]}${nums[left]}${nums[right]}`)) {
          res.push([nums[i], nums[left], nums[right]]);
          set.add(`${nums[i]}${nums[left]}${nums[right]}`);
        }
        left++;
      } else if (nums[i] + nums[left] + nums[right] < TARGET) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

// 457. Circular Array Loop
// Array, Hash Table, Two Pointers

// Level - Medium

// You are playing a game involving a circular array of non-zero integers nums. Each nums[i] denotes the number of indices
// forward/backward you must move if you are located at index i:
// If nums[i] is positive, move nums[i] steps forward, and
// If nums[i] is negative, move nums[i] steps backward.
// Since the array is circular, you may assume that moving forward from the last element puts you on the first element, and
// moving backwards from the first element puts you on the last element.
// A cycle in the array consists of a sequence of indices seq of length k where:
// Following the movement rules above results in the repeating index sequence seq[0] -> seq[1] -> ... -> seq[k - 1] ->
// seq[0] -> ...
// Every nums[seq[j]] is either all positive or all negative.
// k > 1
// Return true if there is a cycle in nums, or false otherwise.

// Example 1:
// Input: nums = [2,-1,1,2,2]
// Output: true
// Explanation: The graph shows how the indices are connected. White nodes are jumping forward, while red is jumping backward.
// We can see the cycle 0 --> 2 --> 3 --> 0 --> ..., and all of its nodes are white (jumping in the same direction).

// Example 2:
// Input: nums = [-1,-2,-3,-4,-5,6]
// Output: false
// Explanation: The graph shows how the indices are connected. White nodes are jumping forward, while red is jumping backward.
// The only cycle is of size 1, so we return false.

// Example 3:
// Input: nums = [1,-1,5,1,4]
// Output: true
// Explanation: The graph shows how the indices are connected. White nodes are jumping forward, while red is jumping backward.
// We can see the cycle 0 --> 1 --> 0 --> ..., and while it is of size > 1, it has a node jumping forward and a node jumping
// backward, so it is not a cycle.
// We can see the cycle 3 --> 4 --> 3 --> ..., and all of its nodes are white (jumping in the same direction).

// Constraints:
// 1 <= nums.length <= 5000
// -1000 <= nums[i] <= 1000
// nums[i] != 0

const circularArrayLoop = function (nums) {
  const visited = new Set([0]);
  let nextInd = 1;
  let i = 0;

  while (nextInd <= nums.length) {
    let next = i + nums[i];
    if (next < 0) {
      while (next < 0) next += nums.length;
    } else if (next > nums.length - 1) {
      while (next > nums.length - 1) next -= nums.length;
    }
    if (visited.has(next)) {
      if (Math.abs(next - i) > 0) {
        const negative = [];
        const positive = [];
        visited.forEach((el) => {
          nums[el] > 0 ? positive.push(nums[el]) : negative.push(nums[el]);
        });
        if (negative.length === 0 || positive.length === 0) return true;
      }
      i = nextInd;
      nextInd++;
      visited.clear();
    } else {
      visited.add(next);
      i = next;
    }
  }
  return false;
};

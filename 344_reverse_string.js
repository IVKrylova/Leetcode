// 344. Reverse String
// Two Pointers, String

// Level - Easy

// Write a function that reverses a string. The input string is given as an array of characters
// s. You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 10^5
// s[i] is a printable ascii character.

const reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (right > left) {
    const l = s[left];
    s[left] = s[right];
    s[right] = l;
    left++;
    right--;
  }
  return s;
};

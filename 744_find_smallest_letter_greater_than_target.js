// 744. Find Smallest Letter Greater Than Target
// Array, Binary Search

// Level - Easy

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at
// least two different characters in letters.
// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist,
// return the first character in letters.

// Example 1:
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

// Example 2:
// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

// Example 3:
// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

// Constraints:
// 2 <= letters.length <= 10^4
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

const binarySearch = (arr, start, end, target) => {
  if (start >= end) return start;
  const mid = Math.floor((end - start) / 2) + start;
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid].charCodeAt(0) > target.charCodeAt(0)) {
    return binarySearch(arr, start, mid, target);
  } else {
    return binarySearch(arr, mid + 1, end, target);
  }
};

const nextGreatestLetter = function (letters, target) {
  if (target.charCodeAt(0) >= letters[letters.length - 1].charCodeAt(0)) {
    return letters[0];
  }
  if (target.charCodeAt(0) < letters[0].charCodeAt(0)) {
    return letters[0];
  }
  let ind = binarySearch(letters, 0, letters.length - 1, target);
  if (letters[ind] === target) {
    while (ind < letters.length && letters[ind] === target) {
      ind++;
    }
  }
  return letters[ind];
};

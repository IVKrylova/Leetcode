// 917. Reverse Only Letters
// Two Pointers, String

// Level - Easy

// Given a string s, reverse the string according to the following rules:
// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Example 1:
// Input: s = "ab-cd"
// Output: "dc-ba"

// Example 2:
// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:
// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// Constraints:
// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

const reverseOnlyLetters = function (s) {
  const arr = s.split("");
  let i = 0;
  let j = s.length - 1;
  while (j > i) {
    while (i < s.length && !isLetter(s.charCodeAt(i))) {
      i++;
    }
    while (j >= 0 && !isLetter(s.charCodeAt(j))) {
      j--;
    }
    if (j > i) swap(arr, i, j);
    i++;
    j--;
  }
  return arr.join("");
};

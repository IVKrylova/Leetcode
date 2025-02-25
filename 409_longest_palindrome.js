// 409. Longest Palindrome
// Hash Table, String, Greedy

// Level - Easy

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome
// that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// Constraints:
// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

const longestPalindrome = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? (map[s[i]] += 1) : (map[s[i]] = 1);
  }
  let length = 0;
  let odd = false;
  for (const letter in map) {
    if (map[letter] % 2 === 0) {
      length += map[letter];
    } else if (!odd) {
      length += map[letter];
      odd = true;
    } else {
      length += map[letter] - 1;
    }
  }
  return length;
};

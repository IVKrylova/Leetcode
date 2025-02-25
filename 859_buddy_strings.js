// 859. Buddy Strings
// Hash Table, String

// Level - Easy

// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal,
// otherwise, return false.
// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters
// at s[i] and s[j].
// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:
// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

// Example 2:
// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

// Example 3:
// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

// Constraints:
// 1 <= s.length, goal.length <= 2 * 10^4
// s and goal consist of lowercase letters.

const isAnagram = (s, goal) => {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] ? (hash[s[i]] += 1) : (hash[s[i]] = 1);
  }
  for (let i = 0; i < goal.length; i++) {
    if (!hash[goal[i]]) return false;
    hash[goal[i]] -= 1;
    if (hash[goal[i]] === 0) delete hash[goal[i]];
  }
  return Object.keys(hash).length === 0;
};

const buddyStrings = function (s, goal) {
  if (s.length === 1 || goal.length === 1) return false;
  if (s.length !== goal.length) return false;
  if (s === goal) {
    const hash = {};
    for (let i = 0; i < s.length; i++) {
      hash[s[i]] ? hash[s[i]].push(i) : (hash[s[i]] = [i]);
      if (hash[s[i]].length > 1) return true;
    }
    return false;
  } else {
    if (!isAnagram(s, goal)) return false;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) count++;
    }
    return count === 2;
  }
};

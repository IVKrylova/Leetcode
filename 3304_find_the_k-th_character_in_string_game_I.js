// 3304. Find the K-th Character in String Game I
// Math, Bit Manipulation, Recursion

// Level - Easy

// Alice and Bob are playing a game. Initially, Alice has a string word = "a".
// You are given a positive integer k.
// Now Bob will ask Alice to perform the following operation forever:
// Generate a new string by changing each character in word to its next character in the English alphabet,
// and append it to the original word.
// For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates
// "zbac".
// Return the value of the kth character in word, after enough operations have been done for word to have at
// least k characters.
// Note that the character 'z' can be changed to 'a' in the operation.

// Example 1:
// Input: k = 5
// Output: "b"
// Explanation:
// Initially, word = "a". We need to do the operation three times:
// Generated string is "b", word becomes "ab".
// Generated string is "bc", word becomes "abbc".
// Generated string is "bccd", word becomes "abbcbccd".

// Example 2:
// Input: k = 10
// Output: "c"
// Constraints:
// 1 <= k <= 500

const kthCharacter = function (k) {
  const ALPHABET = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z",
  };
  const NEXT_IND = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 0,
  };
  let str = "ab";
  let cur = "b";
  while (str.length < k) {
    let added = "";
    for (let i = 0; i < cur.length; i++) {
      added += ALPHABET[NEXT_IND[cur[i]]];
    }
    cur += added;
    str += cur;
  }
  return str[k - 1];
};

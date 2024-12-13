// 6. Zigzag Conversion
// String, Array, Math, Matrix, Iterator, Simulation, Hash Table, Two Pointers, Greedy, String Matching,
// Recursion, Dynamic Programming, Brainteaser, Sorting, Stack, Ordered Map, Interactive, Counting,
// Breadth-First Search, Combinatorics, Depth-First Search, Queue, Linked List, Design, Sliding Window,
// Suffix Array, Enumeration, Shortest Path, Hash Function, Binary Search, Divide and Conquer, Number Theory,
// Bucket Sort

// Level - Medium

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may
// want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:
// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

const convert = function (s, numRows) {
  if (numRows === 1) return s;
  const table = [""];
  let count = 1;
  let length = numRows;
  for (let i = 0; i < s.length; i++) {
    if (length === numRows && count < numRows) {
      table[table.length - 1] += s[i];
      count++;
    } else if (count === numRows && length === numRows) {
      table[table.length - 1] += s[i];
      count = 1;
      length -= 1;
    } else if (length > 1) {
      const line = new Array(numRows).fill(" ");
      line[length - 1] = s[i];
      table.push(line.join(""));
      length -= 1;
    } else if (length === 1) {
      table.push(s[i]);
      count++;
      length = numRows;
    }
  }

  let res = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < table.length; j++) {
      if (table[j][i] && table[j][i] !== " ") res += table[j][i];
    }
  }
  return res;
};

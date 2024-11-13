// 1291. Sequential Digits
// Enumeration

// Level - Medium

// An integer has sequential digits if and only if each digit in the number is one more
// than the previous digit.
// Return a sorted list of all the integers in the range [low, high] inclusive that have
// sequential digits.

// Example 1:
// Input: low = 100, high = 300
// Output: [123,234]

// Example 2:
// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]

// Constraints:
// 10 <= low <= high <= 10^9

const sequentialDigits = function (low, high) {
  const res = [];
  let prev = low;
  while (prev <= high) {
    const d = prev.toString().length;
    let n = prev.toString()[0];
    for (let i = 1; i < d; i++) {
      const a = Number(n[i - 1]) + 1;
      n += a;
    }
    if (Number(n) >= low && Number(n) <= high && n.length === d) {
      res.push(Number(n));
    }
    prev = prev + 10 ** (d - 1);
  }
  return res;
};

sequentialDigits(100, 300);

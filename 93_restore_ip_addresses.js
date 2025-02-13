// 93. Restore IP Addresses
// String, Backtracking

// Level - Medium

// A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and
// 255 (inclusive) and cannot have leading zeros.
// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and
// "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting
// dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses
// in any order.

// Example 1:
// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]

// Example 2:
// Input: s = "0000"
// Output: ["0.0.0.0"]

// Example 3:
// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

// Constraints:
// 1 <= s.length <= 20
// s consists of digits only.

const generateIp = (res, cur, start, s) => {
  if (
    cur.length === 4 &&
    cur.join(".").length === s.length + 3 &&
    cur.every((el) => el === "0" || el[0] !== "0")
  ) {
    res.add(cur.join("."));
    return;
  }

  if (start >= s.length) return;

  for (let i = 0; i < 3; i++) {
    const el = s.substring(start, start + i + 1);
    if (el === "0" || (+el >= 1 && +el <= 255)) {
      cur.push(el);
      generateIp(res, cur, start + i + 1, s);
      cur.pop();
    }
  }
};

const restoreIpAddresses = function (s) {
  if (s.length < 4 || s.length > 12) return [];
  const res = new Set();
  generateIp(res, [], 0, s);
  return Array.from(res);
};


// 67. Add Binary
// Math, String, Bit Manipulation, Simulation

// Level - Easy

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:
// 1 <= a.length, b.length <= 10^4
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

const addIfNumberUndefound = (number) => {
  if (number === "0") {
    if (memory) {
      res = "1" + res;
      memory = "";
    } else {
      res = "0" + res;
    }
  } else {
    if (memory) {
      res = "0" + res;
      memory = "1";
    } else {
      res = "1" + res;
    }
  }
};

const addBinary = function (a, b) {
  let fInd = a.length - 1;
  let sInd = b.length - 1;
  let res = "";
  let memory = "";

  while (fInd >= 0 || sInd >= 0) {
    if (a[fInd] === "0" && b[sInd] === "0") {
      if (memory) {
        res = "1" + res;
        memory = "";
      } else {
        res = "0" + res;
      }
    } else if (a[fInd] === "1" && b[sInd] === "1") {
      if (memory) {
        res = "1" + res;
      } else {
        res = "0" + res;
        memory = "1";
      }
    } else if (
      (a[fInd] === "0" && b[sInd] === "1") ||
      (a[fInd] === "1" && b[sInd] === "0")
    ) {
      if (memory) {
        res = "0" + res;
      } else {
        res = "1" + res;
      }
    } else if (a[fInd] === undefined) {
      addIfNumberUndefound(b[sInd]);
    } else if (b[sInd] === undefined) {
      addIfNumberUndefound(a[fInd]);
    }
    fInd--;
    sInd--;
  }

  return memory + res;
};

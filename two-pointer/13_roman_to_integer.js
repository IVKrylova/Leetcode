// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

var romanToInt = function (s) {
  let i = 0;
  let res = 0;
  const list = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  while (i < s.length) {
    if (list[`${s[i]}${s[i + 1]}`]) {
      res += list[`${s[i]}${s[i + 1]}`];
      i += 2;
    } else {
      res += list[s[i]];
      i++;
    }
  }
  return res;
};


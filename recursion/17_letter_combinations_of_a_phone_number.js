const letterCombinations = function (digits) {
  if (digits === "") return [];
  const alphabet = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const letters = [];
  for (let i = 0; i < digits.length; i++) {
    letters.push(alphabet[digits[i]]);
  }
  const res = [];
  const generate = (n, current) => {
    if (current.length === digits.length) {
      res.push(current);
      return;
    }
    for (let i = 0; i < letters[n].length; i++) {
      generate(n + 1, current + letters[n][i]);
    }
  };
  generate(0, "");
  return res;
};

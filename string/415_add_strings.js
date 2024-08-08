const addStrings = function (num1, num2) {
  let l1 = num1.length - 1;
  let l2 = num2.length - 1;
  let res = "";
  let memo = 0;
  while (l1 >= 0 || l2 >= 0) {
    const n =
      memo +
      (isNaN(Number(num1[l1])) ? 0 : Number(num1[l1])) +
      (isNaN(Number(num2[l2])) ? 0 : Number(num2[l2]));
    if (n >= 10) {
      res = (n % 10) + res;
      memo = Math.floor(n / 10);
    } else {
      res = n + res;
      memo = 0;
    }
    l1--;
    l2--;
  }
  return memo ? memo + res : res;
};


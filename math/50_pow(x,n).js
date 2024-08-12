const myPow = function (x, n) {
  if (n === 0 || x === 1) return 1;
  let p = Math.abs(n);
  let res = 1;
  let num = x;
  while (p) {
    if (p % 2 !== 0) {
      res *= num;
    }
    num = num * num;
    p = Math.floor(p / 2);
  }

  return n < 0 ? 1 / res : res;
};


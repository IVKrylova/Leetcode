const multiplication = ([[a1, a2], [b1, b2]], [[c1, c2], [d1, d2]]) => {
  return [
    [a1 * c1 + a2 * d1, a1 * c2 + a2 * d2],
    [b1 * c1 + b2 * d1, b1 * c2 + b2 * d2],
  ];
};

const fib = (n) => {
  // [[F(n + 1), F(n)],    =    [[BigInt(1), BigInt(1)],
  // [F(n), F(n - 1)],]          [BigInt(1), BigInt(0)]] ** n;

  let matrix = [
    [BigInt(1), BigInt(1)],
    [BigInt(1), BigInt(0)],
  ];
  let res = [
    [BigInt(1), BigInt(0)],
    [BigInt(0), BigInt(1)],
  ];
  let p = n;
  while (p) {
    if (p % 2 !== 0) {
      res = multiplication(res, matrix);
    }
    matrix = multiplication(matrix, matrix);
    p = Math.floor(p / 2);
  }
  return res[0][1];
};

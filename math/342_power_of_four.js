const isPowerOfFour = function (n) {
  if (n <= 0) return false;
  let p = n;
  while (p >= 1) {
    if (p === 1) return true;
    if (p % 4 !== 0) return false;
    p /= 4;
  }
  return true;
};

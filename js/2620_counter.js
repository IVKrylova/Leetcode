const createCounter = function (n) {
  let count = 0;
  return function () {
    const res = count + n;
    count++;
    return res;
  };
};

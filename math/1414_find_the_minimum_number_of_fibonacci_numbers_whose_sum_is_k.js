const fib = (k) => {
  const res = [0, 1];
  let i = 2;
  while (i) {
    const item = res[i - 1] + res[i - 2];
    if (item <= k) {
      res.push(item);
      i++;
    } else {
      return res;
    }
  }
  return res;
};

const findMinFibonacciNumbers = function (k) {
  const list = fib(k);
  let sum = k;
  const res = [];
  let ind = list.length - 1;
  while (sum > 0) {
    if (sum - list[ind] >= 0) {
      res.push(list[ind]);
      sum = sum - list[ind];
      let middleSum = sum;
      while (middleSum >= 0) {
        if (middleSum - list[ind] >= 0) {
          res.push(list[ind]);
          middleSum = middleSum - list[ind];
        } else {
          break;
        }
      }
      sum = middleSum;
      ind--;
    } else {
      ind--;
    }
  }
  return res.length;
};


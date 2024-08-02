const passThePillow = function (n, time) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  if (time < n) return arr[time];
  const remainder = time % (n - 1);
  const order = Math.floor(time / (n - 1)) % 2;
  return order === 0 ? arr[remainder] : arr.reverse()[remainder];
};

passThePillow(18, 38);

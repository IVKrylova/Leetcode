const fibGenerator = function* () {
  yield 0;
  yield 1;
  let index = 2;
  let prev = 0;
  let cur = 1;
  while (index) {
    const res = prev + cur;
    prev = cur;
    cur = res;
    index++;
    yield res;
  }
};

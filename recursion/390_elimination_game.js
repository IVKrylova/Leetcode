const play = (arr, move) => {
  if (arr.length === 1) return arr[0];
  if (move === 0) {
    const newArr = [];
    for (let i = 1; i < arr.length; i += 2) {
      newArr.push(arr[i]);
    }
    return play(newArr, 1);
  } else {
    const newArr = [];
    for (let i = arr.length - 2; i >= 0; i -= 2) {
      newArr.push(arr[i]);
    }
    return play(newArr.reverse(), 0);
  }
};

const lastRemaining = function (n) {
    if (n === 1) return 1;
  const arr = [];
  for (let i = 2; i <= n; i+=2) {
    arr.push(i);
  }
  return play(arr, 1);
};

lastRemaining(100000000);

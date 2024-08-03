const reverse = function (x) {
  const num =
    x < 0
      ? -1 * Number(x.toString().slice(1).split("").reverse().join(""))
      : Number(x.toString().split("").reverse().join(""));
  const leftBorder = Math.pow(-2, 31);
  const rightBorder = Math.pow(2, 31) - 1;
  return num < leftBorder || num > rightBorder ? 0 : num;
};

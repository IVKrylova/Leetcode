const distanceTraveled = function (mainTank, additionalTank) {
  if (mainTank < 5) return mainTank * 10;
  let res = 0;
  let start = mainTank;
  let add = additionalTank;
  while (start > 0) {
    if (start < 5) {
      res = res + start;
    } else {
      res = res + 5;
      if (add) {
        start = start + 1;
        add = add - 1;
      }
    }
    start = start - 5;
  }
  return res * 10;
};

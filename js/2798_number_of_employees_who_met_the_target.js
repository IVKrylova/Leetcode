const numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  hours.forEach((el) => {
    if (el >= target) count++;
  });
  return count;
};

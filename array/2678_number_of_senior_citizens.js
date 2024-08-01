const countSeniors = function (details) {
  const arr = details.filter((el) => Number(el.slice(11, 13)) > 60);
  return arr.length;
};

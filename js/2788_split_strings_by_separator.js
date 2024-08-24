
const splitWordsBySeparator = function (words, separator) {
  const res = [];
  for (let i = 0; i < words.length; i++) {
    const arr = words[i].split(separator).filter((el) => el);
    for (let j = 0; j < arr.length; j++) {
      res.push(arr[j]);
    }
  }
  return res;
};

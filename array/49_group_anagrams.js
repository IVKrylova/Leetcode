const groupAnagrams = function (strs) {
  if (strs.length === 0) return [[]];
  const list = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].toLowerCase().split("").sort().join("");
    if (list[str]) {
      list[str].push(i);
    } else {
      list[str] = [i];
    }
  }

  const res = [];
  let j = 0;
  for (let key in list) {
    res[j] = [];
    for (let i = 0; i < list[key].length; i++) {
      res[j].push(strs[list[key][i]]);
    }
    j++;
  }
  return res;
};


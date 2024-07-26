var longestCommonPrefix = function (strs) {
  const l = Math.min(...strs.map((el) => el.length));
  let res = "";
  for (j = 0; j < l; j++) {
    let i = 1;
    const ent = strs[0].slice(0, j + 1);
    while (i < strs.length) {
        if (strs[i].startsWith(ent)) {
            i++;
        } else {
            return res;
        }
    }
    res = ent;
  }
  return res;
};

longestCommonPrefix(["flower","flow","flight"])
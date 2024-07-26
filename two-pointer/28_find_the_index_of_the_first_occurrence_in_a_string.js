var strStr = function (haystack, needle) {
  let l = 0;
  while (l < haystack.length) {
    let k = 0;
    for (let i = 0; i < needle.length; i++) {
      if (haystack[l + i] === needle[i]) {
        k++;
      }
    }
    if (k === needle.length) return l;
    l++;
  }
  return -1;
};


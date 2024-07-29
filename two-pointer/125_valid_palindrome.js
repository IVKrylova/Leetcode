var isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let l = 0;
  let r = str.length - 1;

  while (r > l) {
    if (str[r] !== str[l]) {
      return false;
    }
    r--;
    l++;
  }
  return true;
};

var isPalindrome = function(x) {
  let res = true;
  const str = x.toString();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
      if (str[left] !== str[right]) {
          res = false;
          break;
      }
      left++;
      right--;
  }
  return res;
};

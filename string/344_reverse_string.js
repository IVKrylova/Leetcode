const reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (right > left) {
    const l = s[left];
    s[left] = s[right];
    s[right] = l;
    left++;
    right--;
  }
  return s;
};

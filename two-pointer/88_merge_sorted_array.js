var merge = function (nums1, m, nums2, n) {
  const res = [];
  const arr = nums1.slice(0, m);
  let i = 0;
  let j = 0;
  while (j < n) {
    if (arr[i] < nums2[j]) {
      res.push(arr[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++;
    }
  }
  const a = res.concat(arr.slice(i, m));
  for (let i = 0; i < a.length; i++) {
    nums1[i] = a[i];
  }
  return nums1;
};

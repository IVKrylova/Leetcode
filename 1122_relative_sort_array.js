// 1122. Relative Sort Array
// Array, Hash Table, Sorting, Counting Sort

// Level - Easy

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not
// appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Example 2:
// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]

// Constraints:
// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// All the elements of arr2 are distinct.
// Each arr2[i] is in arr1.

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const partition = (arr, start, end) => {
  let left = start;
  let right = end;
  let indPivot = Math.floor(start + Math.random() * (end + 1 - start));
  const pivot = arr[indPivot];
  while (left < right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left < right) {
      if (arr[left] === arr[right]) {
        right--;
        if (arr[right] === pivot) {
          indPivot = right;
        } else if (arr[left] === pivot) {
          indPivot = left;
        }
      } else {
        swap(arr, left, right);
        if (arr[left] === pivot) {
          indPivot = left;
        } else if (arr[right] === pivot) {
          indPivot = right;
        }
      }
    }
  }
  return indPivot;
};

const quiqSortInPlace = (arr, start, end) => {
  if (start >= end) return arr;
  const indPivot = partition(arr, start, end);
  quiqSortInPlace(arr, start, indPivot);
  quiqSortInPlace(arr, indPivot + 1, end);
};

const relativeSortArray = function (arr1, arr2) {
  const map = new Map();
  const rest = [];
  const res = [];
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], 0);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (map.has(arr1[i])) {
      map.set(arr1[i], map.get(arr1[i]) + 1);
    } else {
      rest.push(arr1[i]);
    }
  }
  map.forEach((count, num) => {
    let i = 0;
    while (i < count) {
      res.push(num);
      i++;
    }
  });
  quiqSortInPlace(rest, 0, rest.length - 1);
  return res.concat(rest);
};

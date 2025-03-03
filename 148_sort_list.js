// 148. Sort List
// Linked List, Two Pointers, Divide and Conquer, Sorting, Merge Sort

// Medium

// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is in the range [0, 5 * 10^4].
// -10^5 <= Node.val <= 10^5

const getArr = (head) => {
  const arr = [];
  let node = head;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  return arr;
};

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const partition = (arr, start, end) => {
  let left = start;
  let right = end;
  let indPivot = Math.floor(start + Math.random() * (end + 1 - start));
  const pivot = arr[indPivot];
  while (left < right) {
    while (arr[left].val < pivot.val) {
      left++;
    }
    while (arr[right].val > pivot.val) {
      right--;
    }
    if (right > left) {
      if (arr[right].val === arr[left].val) {
        right--;
      } else {
        swap(arr, left, right);
      }
      if (arr[right].val === pivot.val) {
        indPivot = right;
      } else if (arr[left].val === pivot.val) {
        indPivot = left;
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

const sortList = function (head) {
  if (!head) return null;
  const arr = getArr(head);
  quiqSortInPlace(arr, 0, arr.length - 1);
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  arr[arr.length - 1].next = null;
  return arr[0];
};

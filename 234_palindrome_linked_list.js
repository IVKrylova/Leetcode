// 234. Palindrome Linked List
// Linked List, Two Pointers, Stack, Recursion

// Level - Easy

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:
// The number of nodes in the list is in the range [1, 10^5].
// 0 <= Node.val <= 9

const getValues = (values, node) => {
  if (!node) return;
  values.push(node.val);
  getValues(values, node.next);
};

const isPalindrome = function (head) {
  const values = [];
  getValues(values, head);
  let left = 0;
  let right = values.length - 1;
  if (values.length % 2 === 1) {
    while (right - left > 1) {
      if (values[left] !== values[right]) {
        return false;
      }
      left++;
      right--;
    }
  } else {
    while (right > left) {
      if (values[left] !== values[right]) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
};

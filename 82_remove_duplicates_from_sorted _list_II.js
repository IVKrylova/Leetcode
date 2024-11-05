// 82. Remove Duplicates from Sorted List II
// Linked List, Two Pointers

// Level - Medium

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving
// only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Example 2:
// Input: head = [1,1,1,2,3]
// Output: [2,3]

// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

const deleteDuplicates = function (head) {
  if (!head) return null;
  const stack = [[head, 1]];
  let node = head.next;
  while (node) {
    const lastNode = stack[stack.length - 1];
    if (node.val === lastNode[0].val) {
      lastNode[1] += 1;
    } else {
      if (lastNode[1] !== 1) {
        stack.pop();
      }
      stack.push([node, 1]);
    }
    node = node.next;
  }
  if (stack[stack.length - 1] && stack[stack.length - 1][1] !== 1) {
    stack.pop();
  }

  for (let i = 0; i < stack.length; i++) {
    if (i === stack.length - 1) {
      stack[i][0].next = null;
    } else {
      stack[i][0].next = stack[i + 1][0];
    }
  }
  return stack[0] ? stack[0][0] : null;
};

const mergeNodes = function (head) {
  if (head === null || head.next === null) return null;
  const stack = [];
  let node = head;
  while (node) {
    if (node.val !== 0) {
      stack[stack.length - 1][0] = node;
      stack[stack.length - 1][1] += node.val;
    } else {
      stack.push([null, 0]);
    }
    node = node.next;
  }
  stack.pop();
  for (let i = 0; i < stack.length; i++) {
    if (i === stack.length - 1) {
      stack[i][0].next = null;
    } else {
      stack[i][0].next = stack[i + 1][0];
    }
    stack[i][0].val = stack[i][1];
  }
  return stack[0][0];
};

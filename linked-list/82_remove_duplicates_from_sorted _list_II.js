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

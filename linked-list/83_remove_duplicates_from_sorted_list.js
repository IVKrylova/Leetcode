const deleteDuplicates = function (head) {
  let node = head;
  while (node) {
    let next = node.next;
    while (next && node.val === next.val) {
      node.next = node.next.next;
      next = node.next;
    }
    node = next;
  }
  return head;
};

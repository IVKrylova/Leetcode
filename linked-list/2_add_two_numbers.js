const addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let memo = 0;
  let prev;
  while (node1 && node2) {
    const val = node1.val + node2.val + memo;
    node1.val = val % 10;
    memo = Math.floor(val / 10);
    prev = node1;
    node1 = node1.next;
    node2 = node2.next;
  }

  if (node1) {
    while (node1) {
      const val = node1.val + memo;
      node1.val = val % 10;
      memo = Math.floor(val / 10);
      prev = node1;
      node1 = node1.next;
    }
  } else {
    prev.next = node2;
    while (node2) {
      const val = node2.val + memo;
      node2.val = val % 10;
      memo = Math.floor(val / 10);
      prev = node2;
      node2 = node2.next;
    }
  }
  if (memo) {
    prev.next = {
      val: memo,
      next: null,
    };
  }
  return l1;
};

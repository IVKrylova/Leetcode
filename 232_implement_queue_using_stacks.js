// 232. Implement Queue using Stacks
// Stack, Design, Queue

// Level - Easy

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions
// of a normal queue (push, peek, pop, and empty).
// Implement the MyQueue class:
// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:
// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty
// operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque
// (double-ended queue) as long as you use only a stack's standard operations.

// Example 1:
// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]
// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

// Constraints:
// 1 <= x <= 9
// At most 100 calls will be made to push, pop, peek, and empty.
// All the calls to pop and peek are valid.

class NodeList {
  constructor(val = null, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class MyQueue {
  constructor() {
    this.head = new NodeList(null, null, null);
    this.tail = new NodeList(null, null, this.head);
    this.head.next = this.tail;
    this.size = 0;
  }

  push(x) {
    const node = new NodeList(x, this.tail, null);
    if (this.size === 0) {
      this.head = node;
      this.tail.prev = this.head;
    } else {
      const prev = this.tail.prev;
      prev.next = node;
      node.prev = prev;
      this.tail.prev = node;
    }
    this.size += 1;
  }

  pop() {
    const node = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    node.next = null;
    this.size -= 1;
    return node.val;
  }

  peek() {
    return this.head.val;
  }

  empty() {
    return this.size === 0;
  }
}

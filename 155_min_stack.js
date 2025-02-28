// 155. Min Stack
// Stack, Design

// Level - Medium

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// Constraints:
// -2^31 <= val <= 2^31 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 10^4 calls will be made to push, pop, top, and getMin.

class MinStack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  push(val) {
    if (this.length === 0) {
      this.stack[this.length] = [val, val];
    } else {
      this.stack[this.length] = [
        val,
        val < this.stack[this.length - 1][1]
          ? val
          : this.stack[this.length - 1][1],
      ];
    }
    this.length += 1;
  }

  pop() {
    this.stack[this.length - 1] = null;
    this.length -= 1;
  }

  top() {
    return this.stack[this.length - 1][0];
  }

  getMin() {
    return this.stack[this.length - 1][1];
  }
}

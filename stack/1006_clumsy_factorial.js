const clumsy = function (n) {
  const stack = [n];
  const operations = ["*", "/", "+", "-"];
  let i = n - 1;
  let j = 0;
  while (i) {
    if (operations[j] === "*") {
      const res = stack.pop() * i;
      stack.push(res);
    } else if (operations[j] === "/") {
      const res = Math.floor(stack.pop() / i);
      stack.push(res);
    } else {
      stack.push(i);
    }
    i--;
    j === 3 ? (j = 0) : j++;
  }
  let res = stack[0];
  let start = "+";
  for (let i = 1; i < stack.length; i++) {
    if (start === "+") {
      res += stack[i];
      start = "-";
    } else {
      res -= stack[i];
      start = "+";
    }
  }
  return res;
};

clumsy(10);

var isValid = function (s) {
  const end = ")]}";
  const start = "([{";
  const queue = [];
  if (end.includes(s[0])) return false;
  if (s.length % 2 !== 0) return false;
  for (let i = 0; i < s.length; i++) {
    if (start.includes(s[i])) {
      queue.push(s[i]);
    } else {
      if (end.indexOf(s[i]) === start.indexOf(queue[queue.length - 1])) {
        queue.pop();
      } else {
        return false;
      }
    }
  }
  return queue.length === 0;
};

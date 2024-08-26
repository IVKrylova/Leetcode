const partition = (arr, pivot) => {
    let left = [],
      right = [],
      center = [];
    for (let el of arr) {
      if (el < pivot) {
        left.push(el);
      } else if (el === pivot) {
        center.push(el);
      } else {
        right.push(el);
      }
    }
    return [left, right, center];
  };
  
  const quicksort = (arr) => {
    if (arr.length < 2) {
      return arr;
    } else {
      const pivot = arr[Math.floor(Math.random() * arr.length)];
      const [left, right, center] = partition(arr, pivot);
      return quicksort(left).concat(center).concat(quicksort(right));
    }
  };
  
  const findContentChildren = (g, s) => {
    const sortedGreed = quicksort(g);
    const sortedCookies = quicksort(s);
    let count = 0;
    let i = 0;
    let j = 0;
    while (i < g.length && j < s.length) {
      if (sortedCookies[j] < sortedGreed[i]) {
        j++;
      } else {
        count++;
        i++;
        j++;
      }
    }
    return count;
  };
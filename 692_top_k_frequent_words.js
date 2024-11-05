// 692. Top K Frequent Words
// Hash Table, String, Trie, Sorting, Heap (Priority Queue), Bucket Sort, Counting

// Level - Medium

// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the
// same frequency by their lexicographical order.

// Example 1:
// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:
// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// Constraints:
// 1 <= words.length <= 500
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// k is in the range [1, The number of unique words[i]]

const comparator = (a, b) => {
  if (a[1] > b[1]) {
    return 1;
  } else if (a[1] === b[1] && a[0] < b[0]) {
    return 1;
  } else if (a[1] === b[1] && a[0] === b[0]) {
    return 0;
  } else {
    return -1;
  }
};

const partition = (arr, pivot) => {
  const left = [];
  const center = [];
  const rigth = [];
  for (let i = 0; i < arr.length; i++) {
    if (comparator(arr[i], pivot) === 1) {
      left.push(arr[i]);
    } else if (comparator(arr[i], pivot) === 0) {
      center.push(arr[i]);
    } else {
      rigth.push(arr[i]);
    }
  }
  return [left, center, rigth];
};

const sort = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const [left, center, rigth] = partition(arr, pivot);
  return sort(left).concat(center).concat(sort(rigth));
};

const topKFrequent = function (words, k) {
  const hash = {};
  for (let i = 0; i < words.length; i++) {
    hash[words[i]] = hash[words[i]] ? hash[words[i]] + 1 : 1;
  }
  const entries = Object.entries(hash);
  const sorted = sort(entries);

  return sorted.slice(0, k).map((el) => el[0]);
};

topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3);

// 68. Text Justification
// Array, String, Simulation

// Level - Hard

// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth
// characters and is fully (left and right) justified.
// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra
// spaces ' ' when necessary so that each line has exactly maxWidth characters.
// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does
// not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the
// right.
// For the last line of text, it should be left-justified, and no extra space is inserted between words.
// Note:
// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

// Example 1:
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

// Example 2:
// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be
// left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.

// Example 3:
// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art",
// "is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

// Constraints:
// 1 <= words.length <= 300
// 1 <= words[i].length <= 20
// words[i] consists of only English letters and symbols.
// 1 <= maxWidth <= 100
// words[i].length <= maxWidth

const fullJustify = function (words, maxWidth) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < words.length) {
    j = i;
    let cur = "";
    while (cur.length <= maxWidth + 1 && j < words.length) {
      cur += words[j] + " ";
      j++;
    }
    if (cur.length === maxWidth + 1) {
      i = j;
      res.push(cur.substring(0, maxWidth));
    } else if (cur.length < maxWidth + 1) {
      const spaces = maxWidth - cur.length;
      res.push(cur + " ".repeat(spaces));
      break;
    } else {
      i = j - 1;
      cur = cur.substring(0, cur.length - 2 - words[i].length).split(" ");
      const spaces = maxWidth - cur.reduce((sum, str) => sum + str.length, 0);
      if (spaces % (cur.length - 1) === 0) {
        res.push(cur.join(" ".repeat(spaces / (cur.length - 1))));
      } else {
        let curStr = "";
        const count = Math.floor(spaces / (cur.length - 1));
        if (count === Infinity) {
          res.push(cur[0] + " ".repeat(spaces));
        } else {
          let rest = spaces % (cur.length - 1);
          let k = 0;
          while (k < cur.length - 1) {
            curStr += cur[k] + " ".repeat(count);
            if (rest > 0) {
              curStr += " ";
              rest -= 1;
            }
            k++;
          }
          res.push(curStr + cur[k]);
        }
      }
    }
  }
  return res;
};

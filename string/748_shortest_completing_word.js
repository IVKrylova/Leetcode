const shortestCompletingWord = function (licensePlate, words) {
  const letters = licensePlate
    .split("")
    .filter((el) => el.search(/^[A-Za-z]+$/) !== -1)
    .map((el) => el.toLowerCase());

  let res = "";
  let i = 0;
  while (i < words.length) {
    if (words[i].length >= letters.length) {
      let j = 0;
      let w = words[i].split("");
      while (j < letters.length) {
        const ind = w.indexOf(letters[j]);
        if (ind === -1) {
          break;
        } else {
          w[ind] = "-";
        }
        j++;
      }
      if (j === letters.length) {
        if (!res) {
          res = words[i];
        } else {
          if (words[i].length < res.length) res = words[i];
        }
      }
    }
    i++;
  }

  return res;
};

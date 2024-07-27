var lengthOfLastWord = function (s) {
  const str = s.trim();

  for (let i = str.length; i >= 0; i--) {
    if (str[i] === " ") {
      return str.length - (i + 1);
    }
    if (i === 0) return str.length;
  }
};

lengthOfLastWord("   fly me   to   the moon  ")

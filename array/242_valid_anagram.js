const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sortedS = s.toLowerCase().split("").sort().join("");
  const sortedT = t.toLowerCase().split("").sort().join("");
  if (sortedS !== sortedT) return false;
  return true;
};

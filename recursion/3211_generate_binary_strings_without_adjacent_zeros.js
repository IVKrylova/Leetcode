const generate = (n, prefix, res) => {
  if (n === 0) {
    res.push(prefix);
    return;
  }

  generate(n - 1, prefix + 0, res);
  generate(n - 1, prefix + 1, res);
};

const filter = (str) => {
  let i = 0;
  while (i < str.length - 1) {
    if (!`${str[i]}${str[i + 1]}`.includes("1")) return false;
    i++;
  }
  return true;
};

const validStrings = function (n) {
  if (n === 1) return ["0", "1"];
  const res = [];
  generate(n, "", res);
  return res.filter((el) => filter(el));
};

validStrings(3);

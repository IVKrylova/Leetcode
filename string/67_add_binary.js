var addBinary = function (a, b) {
  let fInd = a.length - 1;
  let sInd = b.length - 1;
  let res = "";
  let memory = "";

  const addIfNumberUndefound = (number) => {
    if (number === "0") {
      if (memory) {
        res = "1" + res;
        memory = "";
      } else {
        res = "0" + res;
      }
    } else {
      if (memory) {
        res = "0" + res;
        memory = "1";
      } else {
        res = "1" + res;
      }
    }
  };

  while (fInd >= 0 || sInd >= 0) {
    if (a[fInd] === "0" && b[sInd] === "0") {
      if (memory) {
        res = "1" + res;
        memory = "";
      } else {
        res = "0" + res;
      }
    } else if (a[fInd] === "1" && b[sInd] === "1") {
      if (memory) {
        res = "1" + res;
      } else {
        res = "0" + res;
        memory = "1";
      }
    } else if (
      (a[fInd] === "0" && b[sInd] === "1") ||
      (a[fInd] === "1" && b[sInd] === "0")
    ) {
      if (memory) {
        res = "0" + res;
      } else {
        res = "1" + res;
      }
    } else if (a[fInd] === undefined) {
      addIfNumberUndefound(b[sInd]);
    } else if (b[sInd] === undefined) {
      addIfNumberUndefound(a[fInd]);
    }
    fInd--;
    sInd--;
  }

  return memory + res;
};

const luckyNumbers = function (matrix) {
  const minInRow = [];
  const indMinInRow = [];
  const res = [];

  for (let i = 0; i < matrix.length; i++) {
    const min = Math.min(...matrix[i]);
    minInRow.push(min);
    indMinInRow.push(matrix[i].indexOf(min));
  }

  for (let j = 0; j < indMinInRow.length; j++) {
    const column = [];
    for (let k = 0; k < matrix.length; k++) {
      column.push(matrix[k][indMinInRow[j]]);
    }
    const max = Math.max(...column);
    if (max === minInRow[j]) res.push(max);
  }

  return res;
};


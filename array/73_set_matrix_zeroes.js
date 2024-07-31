var setZeroes = function (matrix) {
  const rows = [];
  const columns = [];
  const n = matrix.length;
  const m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    if (matrix[i].includes(0)) {
      rows.push(i);
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === 0) columns.push(j);
      }
    }
  }

  for (let i = 0; i < rows.length; i++) {
    matrix[rows[i]] = matrix[rows[i]].map((el) => (el = 0));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < columns.length; j++) {
      matrix[i][columns[j]] = 0;
    }
  }

  return matrix;
};


const buyChoco = function (prices, money) {
  const sorted = prices.sort((a, b) => a - b);
  const rest = money - sorted[0] - sorted[1];
  return rest >= 0 ? rest : money;
};

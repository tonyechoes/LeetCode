/**
 * @param {number[]} prices
 * @return {number[]}
 */

var finalPrices = function (prices) {
  let n = prices.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    let discount = false;

    for (let j = i + 1; j < n; j++) {
      if (prices[j] <= prices[i]) {
        result.push(prices[i] - prices[j]);
        discount = true;
        break;
      }
    }

    if (!discount) {
      result.push(prices[i]);
    }
  }
  return result;
};
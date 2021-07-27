const maxProfit = (prices) => {
    let minPrice = prices[0];
    let maxProft = 0;
  
    for (const price of prices) {
      const currentProfit = price - minPrice;
      minPrice = Math.min(minPrice, price);
      maxProft = Math.max(maxProft, price - minPrice);
    }
  
    return maxProft;
  };

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
const coinChange = (coins, amount) => {
    // Build a table and findout how many min coin needed for each value
    // untill the desired 'amount' for each coin
    // Lets say we have coins [1,3,4] and want to reach 6.
    // Table would be:
    //         [0] [1] [2] [3] [4] [5] [6]
    // {1}      0   1   2   3   4   5   6
    // {1,3}    0   1   2   1   2   3   2
    // {1,3,4}  0   1   2   1   1   2   2
    // The end result can never reach the upperlimit, and first index always be 0.
    const upperLimit = amount +1
    const dp = new Array(upperLimit).fill(upperLimit)
    dp[0] = 0
  
    coins.forEach(coin =>{
        for (let i=coin; i<upperLimit; i++) {
            // Here is the trick, "dp[i - coin] + 1" is the new candidate to compare.
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    })
    return dp[amount] === upperLimit ? -1 : dp[amount]
  }
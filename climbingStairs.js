function climbStairs(n){
    const dp = new Array(n).fill(0);
    // Base Cases
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    // Start from n=3 since we have covered the solutions up to N=2 above
    // Sum the last 2 results behind me to get the current result.
    // dp[i] = dp[i-1] + dp[i-2]
    for(let i=3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n];
}
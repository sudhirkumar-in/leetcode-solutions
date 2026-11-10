/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, costs) {
    let dp = []

    const getCost = (i, j) => costs[j - 1] + (j - i) ** 2;

    // base conditions
    dp[0] = 0
    dp[1] = Math.min(dp[0] + getCost(0, 1))
    dp[2] = Math.min(dp[1] + getCost(1, 2), getCost(0, 2))

    for (let i = 3; i <= n; i++) {
        // recurrence relation
        dp[i] = Math.min(
            dp[i - 1] + getCost(i - 1, i),
            dp[i - 2] + getCost(i - 2, i),
            dp[i - 3] + getCost(i - 3, i),
        )
    }

    return dp[n]
};
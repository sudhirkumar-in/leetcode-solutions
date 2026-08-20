function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {// for each amount:
        for (const coin of coins) {// for each coin:
            if (coin <= a) {
                dp[a] = Math.min(
                    dp[a],
                    dp[a - coin] + 1
                );
            }
        }
    }
    
    return dp[amount] == Infinity ? -1 : dp[amount];
};
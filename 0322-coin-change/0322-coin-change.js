let ct = console.table;

var coinChange = function (coins, targetAmt) {
    let m = coins.length;
    let n = targetAmt;

    // min coins required to get amount,
    // using coins till i
    let dp = Array.from(
        { length: m },
        () => new Array(targetAmt + 1).fill(Infinity)
    );

    for (let i = 0; i < m; i++) {
        dp[i][0] = 0;
    }

    for (let a = 1; a <= targetAmt; a++) {
        for (let i = 0; i < m; i++) {
            let c = coins[i];
            let remainingAmt = a - c;

            if (remainingAmt >= 0) {
                // Take current coin
                let take = dp[i][remainingAmt] + 1;

                // Don't take current coin
                let notTake = dp[i - 1]?.[a] ?? Infinity;

                dp[i][a] = Math.min(take, notTake);
            } else {
                // Can't take current coin
                dp[i][a] = dp[i - 1]?.[a] ?? Infinity;
            }

            // ct(dp);
        }
    }

    return dp[m - 1][targetAmt] === Infinity
        ? -1
        : dp[m - 1][targetAmt];
};
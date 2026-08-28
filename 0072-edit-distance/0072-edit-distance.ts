function minDistance(s: string, t: string): number {
    let m = s.length
    let n = t.length

    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1))

    dp[0][0] = 0
    for (let i = 1; i <= m; i++) dp[i][0] = i
    for (let j = 1; j <= n; j++) dp[0][j] = j

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] =
                Math.min(
                    dp[i - 1][j - 1] + (s[i - 1] === t[j - 1] ? 0 : 1), // diag / replace
                    dp[i - 1][j] + 1,  //   above / delete
                    dp[i][j - 1] + 1,//     left / insert
                )
        }
    }

    return dp[m][n]
};

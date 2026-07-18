/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    function dfs(remain, memo) {
        let key = "" + remain;
        if (memo[key] !== undefined) {
            return memo[key];
        }
        if (remain === 0) return 0;

        let best = Infinity;              // ← local to this call/node
        for (let i = 1; i * i <= remain; i++) {
            let total = 1 + dfs(remain - (i * i), memo);
            best = Math.min(best, total);
        }
        memo[key] = best;
        return best;
    }
    return dfs(n, {});
};

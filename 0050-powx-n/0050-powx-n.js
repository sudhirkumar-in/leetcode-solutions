/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    // edge
    if (n == 1) {
        return x;
    }
    if (n === 0) {
        return 1;
    }
    if (n < 1) {
        return 1 / dfs(x, -n);
    }
    return dfs(x, n);

};

function dfs(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;

    const half = dfs(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return half * half;
    }

    return half * half * x;
}
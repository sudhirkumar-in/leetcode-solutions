/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const F = [];
    F[0] = 0;
    F[1] = 1;
    for (let i = 2; i <= n; i++) {
        F[i] = F[i - 1] + F[i - 2];
    }
    return F[n];
};
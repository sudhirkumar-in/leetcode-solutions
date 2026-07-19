/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    // n == 2
    if (n == 2) return [-1, 1]
    let sum = 0;
    const res = []
    for (let i = 0; i + 1 < n; i++) {
        res.push(i);
        sum += i;
    }
    res.unshift(-sum);
    return res;
};
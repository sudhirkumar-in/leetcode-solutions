/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 0) return false
    return 2 ** Math.trunc(Math.log2(n)) === n
};
/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
    let k = Math.floor(Math.log2(n));
    return Math.pow(2, k + 1) - 1
};
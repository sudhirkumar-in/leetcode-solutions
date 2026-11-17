/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    const len = n.toString(2).replaceAll('0', '').length;
    return len;
};
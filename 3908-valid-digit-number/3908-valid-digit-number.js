/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function (n, x) {
    const str = n.toString();
    const ind = str.indexOf(x);
    if (ind == -1) {
        return false;
    }
    if (ind != 0) {
        return true;
    }
    return false;
};